import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  condition: string;
  status: "Available" | "Rented" | "Maintenance";
}

const initialVehicles: Vehicle[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    condition: "Excellent",
    status: "Available",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2019,
    condition: "Good",
    status: "Rented",
  },
  {
    id: 3,
    make: "Ford",
    model: "F-150",
    year: 2021,
    condition: "Excellent",
    status: "Maintenance",
  },
];

export function VehicleManagement() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [newVehicle, setNewVehicle] = useState<Omit<Vehicle, "id">>({
    make: "",
    model: "",
    year: new Date().getFullYear(),
    condition: "",
    status: "Available",
  });

  const handleAddVehicle = () => {
    setVehicles([...vehicles, { ...newVehicle, id: vehicles.length + 1 }]);
    setNewVehicle({
      make: "",
      model: "",
      year: new Date().getFullYear(),
      condition: "",
      status: "Available",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vehicle Management</CardTitle>
        <CardDescription>
          Add vehicles and monitor their condition and status.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mb-4">Add Vehicle</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Vehicle</DialogTitle>
              <DialogDescription>
                Enter the details of the new vehicle.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="make" className="text-right">
                  Make
                </Label>
                <Input
                  id="make"
                  value={newVehicle.make}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, make: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="model" className="text-right">
                  Model
                </Label>
                <Input
                  id="model"
                  value={newVehicle.model}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, model: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="year" className="text-right">
                  Year
                </Label>
                <Input
                  id="year"
                  type="number"
                  value={newVehicle.year}
                  onChange={(e) =>
                    setNewVehicle({
                      ...newVehicle,
                      year: parseInt(e.target.value),
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="condition" className="text-right">
                  Condition
                </Label>
                <Input
                  id="condition"
                  value={newVehicle.condition}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, condition: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddVehicle}>Add Vehicle</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Make</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell>{vehicle.make}</TableCell>
                <TableCell>{vehicle.model}</TableCell>
                <TableCell>{vehicle.year}</TableCell>
                <TableCell>{vehicle.condition}</TableCell>
                <TableCell>{vehicle.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
