"use client";
import { db } from "@/app/firebase-config";
import { Category } from "@/types/types";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
      {/* <h1 className="text-2xl font-bold">Categories</h1>
      <div className="grid grid-cols-2 gap-4">
        {category.length > 0 ? (
          category.map((cat) => (
            <Alert key={cat.uuid}>
              <AlertTitle>{cat.name}</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the
                cli.
              </AlertDescription>
            </Alert>
          ))
        ) : (
          <p className="px-4 py-2">Loading categories...</p>
        )}
      </div> */}
    </div>
  );
};

export default CategoriesHome;
