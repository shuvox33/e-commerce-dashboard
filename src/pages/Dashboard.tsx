import AdminSideBar from "../components/AdminSideBar";
import { BsSearch } from "react-icons/bs";
import {FaRegBell} from 'react-icons/fa'
import userPic from '../assets/userpic.png'
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
const Dashboard = () => {
    return (
        <div className="adminContainer">
            <AdminSideBar />
            <main className="dashboard">
                <div className="bar">
                    <BsSearch/>
                    <input type="text" placeholder="Search for data, user, docs" />
                    <FaRegBell/>
                    <img src={userPic} alt="User" />
                </div>
                <div className="widget-container">
                    <WidgetItem percent={40} amount={true} value={34000} heading="Revenue" color="rgb(0,115, 255)"/>
                    <WidgetItem percent={-14} value={4000} heading="Users" color="rgb(0,198, 202)"/>
                    <WidgetItem percent={80}  value={23000} heading="Transactions" color="rgb(255,196, 0)"/>
                    <WidgetItem percent={30}  value={1000} heading="Products" color="rgb(76, 0, 255)"/>
                </div>
            </main>
        </div>
    );
};

interface WidgetItemProps {
    heading: string;
    value: number;
    percent:number;
    color:string;
    amount?:boolean;
}

const WidgetItem = ({heading, value, percent, color, amount=false}:WidgetItemProps) =>(
    <article className="widget">
        <div className="widgetInfo">
            <p>{heading}</p>
            <h2>{amount? `$${value}`:value}</h2>
            {
                percent>0 ? (<span className="green"><HiTrendingUp/> +{percent}%{" "}</span>)
                :(<span className="red"><HiTrendingDown/> {percent}%{" "}</span>)
            }
        </div>
        <div style={{background: `conic-gradient(${color} ${(Math.abs(percent)/100)*360}deg, rgb(255,255,255) 0)`}} className="widgetCircle">
            <span style={{color}}>{percent}%</span>
        </div>
    </article>
)

export default Dashboard;