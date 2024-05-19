"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/types";
import { DataTableColumnHeader } from "../ui/data-column-header";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Suspend from "../suspend";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Users" />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "photo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Avatar" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">
        <Avatar>
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback>
            {(row.getValue("name") as string).slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
    cell: ({ row }) => <div className="capitalize">{row.original.phone}</div>,
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => (
      // console.log(row.original),
      <div className="flex justify-end">
        <Suspend uuid={row.original.phone} type="Users" />
      </div>
    ),
  },
];
