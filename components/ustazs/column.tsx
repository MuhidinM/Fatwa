"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Category } from "@/types/types";
import { DataTableColumnHeader } from "../ui/data-column-header";
import Suspend from "../suspend";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ustazs" />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <Suspend uuid={row.original.uuid} type="ustazs" />
      </div>
    ),
  },
];
