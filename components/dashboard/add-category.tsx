import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddCategory = () => {
  return (
    <div className="flex space-x-2">
      <Input placeholder="Add Category" />
      <Button>Add</Button>
    </div>
  );
};

export default AddCategory;
