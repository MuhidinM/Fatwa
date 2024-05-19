"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Category } from "@/types/types";
import { DataTableColumnHeader } from "../ui/data-column-header";
import { DialogFull } from "../dialog-full";
import DeleteAlert from "../ui/delete-alert";
import { Button } from "../ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Categories" />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        {/* <Button variant="link" className="text-destructive">
          Delete
        </Button> */}
        {/* <DialogFull question={row.original.question} uuid={row.original.uuid} /> */}
        <DeleteAlert uuid={row.original.uuid} type={"categories"} />
      </div>
    ),
  },
];
