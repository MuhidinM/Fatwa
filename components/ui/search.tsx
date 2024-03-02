import React from "react";
import { Input } from "./input";

export const Search = ({ table, columns }: { table: any; columns: any }) => {
  return (
    <Input
      placeholder={`Filter ${(columns[0] as any)["accessorKey"]}`}
      value={
        (table
          .getColumn((columns[0] as any)["accessorKey"])
          ?.getFilterValue() as string) ?? ""
      }
      onChange={(event) =>
        table
          .getColumn((columns[0] as any)["accessorKey"])
          ?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
};
