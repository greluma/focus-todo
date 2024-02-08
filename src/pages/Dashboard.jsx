import { Outlet } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";

export default function Dashboard() {
    return (
        <div style={{ height: "100%", display: 'grid', gridTemplateRows: '1fr 13fr' }} >
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}