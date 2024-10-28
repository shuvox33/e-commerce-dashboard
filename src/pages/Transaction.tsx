import { Column } from "react-table";
import AdminSideBar from "../components/AdminSideBar";
import { ReactElement } from "react";

interface DataType {
    avatar: ReactElement;
    name: string;
    email: string;
    gender: string;
    role: string;
    action: ReactElement;
}


const column: Column<DataType>[] = [
    {
        Header: 'Avatar',
        accessor: 'avatar',
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Emain',
        accessor: 'email',
    },
    {
        Header: 'Gender',
        accessor: 'gender',
    },
    {
        Header: 'Role',
        accessor: 'role',
    },
    {
        Header: 'Action',
        accessor: 'action',
    },
]

const Transaction = () => {
    return (
        <div className="admin-container">
            <AdminSideBar />
            <main>main</main>
        </div>
    );
};

export default Transaction;