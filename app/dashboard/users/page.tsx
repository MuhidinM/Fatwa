"use client";
import { db } from "@/app/firebase-config";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/users/column";
import { User } from "@/types/types";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

const UsersHome = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const usersRef = ref(db, "Users");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray: User[] = Object.values(data);
        const filteredData: User[] = usersArray.filter((user) => user.name);
        const transformedUsers: User[] = filteredData.map((users) => ({
          uuid: users.uuid,
          name: users.name,
          photo: users.photo,
          email: users.email,
          // Add any other transformations you need here
        }));
        setUsers(transformedUsers);
      }
    });
  }, []);
  return (
    <div className="md:container mx-auto py-10">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default UsersHome;
