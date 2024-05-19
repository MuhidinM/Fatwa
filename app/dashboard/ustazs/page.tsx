"use client";

import { db } from "@/app/firebase-config";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/ustazs/column";
import { Teacher } from "@/types/types";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

const UstazsHome = () => {
  const [teacher, setTeacher] = useState<Teacher[]>([]);

  useEffect(() => {
    const teacherRef = ref(db, "ustazs");
    onValue(teacherRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const teacherArray: Teacher[] = Object.values(data);
        const transformedTeachers: Teacher[] = teacherArray.map((teacher) => ({
          uuid: teacher.uuid,
          name: teacher.name,
          // Add any other transformations you need here
        }));
        setTeacher(transformedTeachers);
      }
    });
  }, []);
  console.log(teacher);
  return (
    <div className="md:container mx-auto py-10">
      <DataTable columns={columns} data={teacher} />
    </div>
  );
};

export default UstazsHome;
