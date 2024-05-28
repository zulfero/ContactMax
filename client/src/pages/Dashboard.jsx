import Sidebar from "../components/Sidebar";
import DashboardSide from "../components/Sidebar";

function Dashboard({ children }) {
  return (
    <div className="flex">
      <div className="w-[20%] min-h-screen bg-[#4870FC]">
        <Sidebar/>
      </div>
      <div className="min-h-screen bg-[#7791f0] w-[80%]">{children}</div>
    </div>
  );
}
export default Dashboard;