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

interface Profile {
  id: number;
  name: string;
  email: string;
  rentalHistory: string;
  rating: number;
}

const initialProfiles: Profile[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    rentalHistory: "3 rentals",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    rentalHistory: "1 rental",
    rating: 5,
  },
];

export function DriverRenterProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);
  const [newProfile, setNewProfile] = useState<Omit<Profile, "id">>({
    name: "",
    email: "",
    rentalHistory: "",
    rating: 0,
  });

  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({
      name: "",
      email: "",
      rentalHistory: "",
      rating: 0,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Driver/Renter Profiles</CardTitle>
        <CardDescription>
          Manage digital profiles with rental history and ratings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mb-4">Add Profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Profile</DialogTitle>
              <DialogDescription>
                Enter the details of the new driver/renter.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newProfile.name}
                  onChange={(e) =>
                    setNewProfile({ ...newProfile, name: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={newProfile.email}
                  onChange={(e) =>
                    setNewProfile({ ...newProfile, email: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rentalHistory" className="text-right">
                  Rental History
                </Label>
                <Input
                  id="rentalHistory"
                  value={newProfile.rentalHistory}
                  onChange={(e) =>
                    setNewProfile({
                      ...newProfile,
                      rentalHistory: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rating" className="text-right">
                  Rating
                </Label>
                <Input
                  id="rating"
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={newProfile.rating}
                  onChange={(e) =>
                    setNewProfile({
                      ...newProfile,
                      rating: parseFloat(e.target.value),
                    })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddProfile}>Add Profile</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rental History</TableHead>
              <TableHead>Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {profiles.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell>{profile.name}</TableCell>
                <TableCell>{profile.email}</TableCell>
                <TableCell>{profile.rentalHistory}</TableCell>
                <TableCell>{profile.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
