"use client";
import { db } from "@/app/firebase-config";
import { Category } from "@/types/types";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/categories/column";

const CategoriesHome = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const categoryRef = ref(db, "categories");
    onValue(categoryRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const categoryArray: Category[] = Object.values(data);
        const transformedCategories: Category[] = categoryArray.map(
          (category) => ({
            uuid: category.uuid,
            name: category.name,
            // Add any other transformations you need here
          })
        );
        setCategory(transformedCategories);
      }
    });
  }, []);
  // console.log(category);
  return (
    <div className="md:container mx-auto py-10">
      <DataTable columns={columns} data={category} />
    </div>
  );
};

export default CategoriesHome;
