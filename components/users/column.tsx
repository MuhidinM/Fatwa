"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Category } from "@/types/types";
import { DataTableColumnHeader } from "../ui/data-column-header";
import { DialogFull } from "../dialog-full";
import DeleteAlert from "../ui/delete-alert";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Suspend from "../suspend";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Category>[] = [
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
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => (
      // console.log(row.original),
      <div className="flex justify-end">
        <Suspend uuid={row.original.uuid} type="Users" />
      </div>
    ),
  },
];
