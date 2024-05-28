import Sidebar from "../components/Sidebar";
import DashboardSide from "../components/Sidebar";

function Dashboard({ children }) {
  return (
    <div className="flex">
      <div className="w-[10%] min-h-screen bg-[#4870FC]">
        <Sidebar/>
      </div>
      <div className="min-h-screen bg-green-300 w-[90%]">{children}</div>
    </div>
  );
}
export default Dashboard;