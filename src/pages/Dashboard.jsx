import { Outlet } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";

export default function Dashboard() {
    return (
        <div className="grid h-screen">
            <div className="h-[5vh]">
                <Navbar />
            </div>
            <div className="flex h-[95vh]">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}