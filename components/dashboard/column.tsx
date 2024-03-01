"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Payment } from "@/types/types";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "../ui/data-column-header";
import { DialogFull } from "../dialog-full";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "fatwa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fatwa" />
    ),
    cell: ({ row }) => (
      <div className="lowercase">
        {(row.getValue("fatwa") as string).length > 50
          ? `${(row.getValue("fatwa") as string).slice(0, 50)}...`
          : row.getValue("fatwa")}
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right">Action</div>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <DialogFull
          fatwa={row.getValue("fatwa")}
          category={row.getValue("category")}
        />
      </div>
    ),
  },
];
