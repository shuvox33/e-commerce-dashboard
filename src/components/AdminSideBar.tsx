import { Link, Location, useLocation } from "react-router-dom";
import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import {
  FaChartPie,
  FaChartBar,
  FaChartLine,
  FaStopwatch,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const AdminSideBar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const location = useLocation();
  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
          <h2>Logo</h2>
          {phoneActive && (
            <button id="close-sidebar" onClick={() => setShowModal(false)}>
              <IoCloseOutline/>
            </button>
          )}
        </div>
        <DivOne location={location} />
        <DivTwo location={location} />
        <DivThree location={location} />
      </aside>
    </>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        Icon={RiDashboardFill}
        text="Dashboard"
        location={location}
      />
      <Li
        url="/admin/products"
        Icon={RiShoppingBag3Fill}
        text="Product"
        location={location}
      />
      <Li
        url="/admin/customers"
        Icon={AiFillFileText}
        text="Customer"
        location={location}
      />
      <Li
        url="/admin/transaction"
        Icon={IoIosPeople}
        text="Transaction"
        location={location}
      />
    </ul>
  </div>
);
const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/bar"
        Icon={FaChartBar}
        text="Bar"
        location={location}
      />
      <Li
        url="/admin/chart/pie"
        Icon={FaChartPie}
        text="Pie"
        location={location}
      />
      <Li
        url="/admin/chart/line"
        Icon={FaChartLine}
        text="Line"
        location={location}
      />
    </ul>
  </div>
);
const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/app/stopwatch"
        Icon={FaStopwatch}
        text="Stopwatch"
        location={location}
      />
      <Li
        url="/admin/app/coupon"
        Icon={RiCoupon3Fill}
        text="Coupon"
        location={location}
      />
    </ul>
  </div>
);

const Li = ({ url, location, Icon, text }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,155,255,0.1"
        : "white",
    }}
  >
    <Link
      style={{
        color: location.pathname.includes(url) ? "rgb(0, 115, 255)" : "black",
      }}
      to={url}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSideBar;
