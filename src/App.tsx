import { DashboardLayout } from "./components/DashboardLayout";
import { DriverRenterProfiles } from "./components/DriverRenterProfile";
import { VehicleManagement } from "./components/VehicleManagement";

// import './App.css'

function App() {
  return (
    <>
      <DashboardLayout>
        <div className="space-y-6">
          <VehicleManagement />
          <DriverRenterProfiles />
        </div>
      </DashboardLayout>
    </>
  );
}

export default App;
