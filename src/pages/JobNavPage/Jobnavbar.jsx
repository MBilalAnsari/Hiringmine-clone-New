import { Link } from "react-router-dom";
import logo from "../../../public/logo.png"
import ContrastIcon from '@mui/icons-material/Contrast';
import "./Jobnavbar.css"
import { useEffect, useState } from "react";

function JobNavbar() {
    const [filter, setFilter] = useState([])
    useEffect(() => {
        filterAPI()
    }, [] )
    const filterAPI = () => {
        return (
            fetch(`https://backend-prod.app.hiringmine.com/api/filterations/all`)
                .then((resp) => (resp.json()))
                .then((resp) => {
                    setFilter(resp.data)
                    console.log(resp.data , "==>resp.data")
                    console.log(filter , "==> usestate")
                })
            )
        }
        console.log(filter , "==> filter resp")

    return (
        <div>
            <div className="nav-bg flex justify-around  p-6 my-0 mx-10 ">
                <img src={logo} alt="" className="w-48 " />

                <input className="border" type="text" name="" id="" />

                <div>
                    <ContrastIcon className="" />
                </div>
            </div>
            <div className="filteration-Parent">
                <Button />
            </div>
        </div>
    )
}
export default JobNavbar


const Button = () => {
    return (
        <div className="filteration-select">
            <select className="" id="opt" >
                <option value="">Bilal</option>
                <option value="">Bilal</option>
                <option value="">Bilal</option>
                <option value="">Bilal</option>
            </select>
        </div>
    )
}