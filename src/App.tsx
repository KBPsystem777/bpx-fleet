import { useAccount, useConnect } from "wagmi";

import { Button } from "./components/ui/button";
import { DashboardLayout } from "./components/DashboardLayout";
import { DriverRenterProfiles } from "./components/DriverRenterProfile";
import { VehicleManagement } from "./components/VehicleManagement";

import "./app.scss";

function App() {
  const account = useAccount();
  const { connectors, connect } = useConnect();

  const LoginComponent = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">BPx Fleets</h1>
        <Button
          className="px-4 py-3 my-5"
          onClick={() => connect({ connector: connectors[1] })}
          variant="default"
        >
          Login via web3 account
        </Button>
      </div>
    );
  };

  return (
    <div className="font-mono">
      {account.status === "connected" ? (
        <div className="flex">
          <DashboardLayout>
            <div className="space-y-6  py-7 ml-7 mr-7">
              <VehicleManagement />
              <DriverRenterProfiles />
            </div>
          </DashboardLayout>
        </div>
      ) : (
        <LoginComponent />
      )}
    </div>
  );
}

export default App;
