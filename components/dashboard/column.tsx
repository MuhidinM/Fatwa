"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Question } from "@/types/types";
import { DataTableColumnHeader } from "../ui/data-column-header";
import { DialogFull } from "../dialog-full";
import DeleteAlert from "../ui/delete-alert";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Question>[] = [
  {
    accessorKey: "question",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Question" />
    ),
    cell: ({ row }) => (
      <div className="lowercase">
        {(row.getValue("question") as string).length > 50
          ? `${(row.getValue("question") as string).slice(0, 50)}...`
          : row.getValue("question")}
      </div>
    ),
  },
  {
    accessorKey: "askedDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asked Date" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("askedDate") + " ago"}</div>
    ),
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <DialogFull question={row.original.question} uuid={row.original.uuid} />
        <DeleteAlert />
      </div>
    ),
  },
];
