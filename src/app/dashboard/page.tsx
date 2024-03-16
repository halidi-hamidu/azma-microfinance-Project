'use client';

import BarChart from "../components/BarChart";
import DashboardCards from "./cards";
import DashbaordTable from "./dashboardTable";

export default function Dashboard(){
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };
    const options = {
        scales: {
            x: {
                type: 'category',
            },
            y: {
                beginAtZero: true,
            },
        },
    };
    return(
        <>
        <div className="dashboard_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner">
                                <img className="img-fluid" src="/images/dashboard.png" alt="" />
                                <h4>Dashboard</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DashboardCards/>
        <DashbaordTable />
        
        </>
    );
}