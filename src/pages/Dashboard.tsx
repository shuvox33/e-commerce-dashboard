import AdminSideBar from "../components/AdminSideBar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from 'react-icons/fa'
import userPic from '../assets/userpic.png'
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from '../assets/data.json';
import { Barchart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from '../components/DashboardTable'
const Dashboard = () => {
    return (
        <div className="admin-container">
            <AdminSideBar />
            <main className="dashboard">
                {/* search bar */}
                <div className="bar">
                    <BsSearch />
                    <input type="text" placeholder="Search for data, user, docs" />
                    <FaRegBell />
                    <img src={userPic} alt="User" />
                </div>
                {/* widget container */}
                <section className="widget-container">
                    <WidgetItem percent={40} amount={true} value={34000} heading="Revenue" color="rgb(0,115, 255)" />
                    <WidgetItem percent={-14} value={4000} heading="Users" color="rgb(0,198, 202)" />
                    <WidgetItem percent={80} value={23000} heading="Transactions" color="rgb(255,196, 0)" />
                    <WidgetItem percent={30} value={1000} heading="Products" color="rgb(76, 0, 255)" />
                </section>
                {/* graph & categories */}
                <section className="graph-container">
                    <div className="revenue-chart">
                        <h2>Revenue & Transaction</h2>
                        <Barchart title_1="Revenue" title_2="Transaction" bgColor_1="rgb(0,115,255" bgColor_2="rgba(53,162,235, .8" data_1={[123,82,345,66,233,707,333]} data_2={[173,502,425,345,153,807,553] }/>
                    </div>
                    <div className="dahsboard-categories">
                        <h2>Inventory</h2>
                        <div>
                            {
                                data.categories.map((i) => (
                                    <CategoriesItem key={i.heading} heading={i.heading} value={i.value} color={`hsl(${i.value*5},100%,50%)`} />
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="transaction-container">
                    <div className="gender-chart">
                        <h2>Gender Ration</h2>
                        {/* chart  */}
                        <DoughnutChart labels={["Male", "Female"]} data={[19, 12]} backgroundColor={["hsl(340, 82%, 56%)", "rgba(53, 162,235,.8)"] } cutout={90}/>
                        <p><BiMaleFemale/></p>
                    </div>

                    <Table data={data.transaction}/>

                </section>
            </main>
        </div>
    );
};

interface WidgetItemProps {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
}

const WidgetItem = ({ heading, value, percent, color, amount = false }: WidgetItemProps) => (
    <article className="widget">
        <div className="widget-info">
            <p>{heading}</p>
            <h2>{amount ? `$${value}` : value}</h2>
            {
                percent > 0 ? (<span className="green"><HiTrendingUp /> +{percent}%{" "}</span>)
                    : (<span className="red"><HiTrendingDown /> {percent}%{" "}</span>)
            }
        </div>
        <div style={{ background: `conic-gradient(${color} ${(Math.abs(percent) / 100) * 360}deg, rgb(255,255,255) 0)` }} className="widget-circle">
            <span style={{ color }}>{percent}%</span>
        </div>
    </article>
);

interface CategoriesItemProps {
    heading: string;
    color: string;
    value: number;
}
const CategoriesItem = ({ heading, color, value }: CategoriesItemProps) => (
    <div className="category-item">
        <h5>{heading}</h5>
        <div>
            <div
                style={{
                    backgroundColor: color,
                    width: `${value}%`,
                }}>
            </div>
        </div>
        <span>{value}%</span>
    </div>
);

export default Dashboard;