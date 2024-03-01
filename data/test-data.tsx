import { Button } from "@/components/ui/button";
import { Payment } from "@/types/types";

export async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "m5gr84i9",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "success",
      fatwa: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "success",
      fatwa: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "processing",
      fatwa: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "success",
      fatwa: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "failed",
      fatwa: "carmella@hotmail.com",
    },
  ];
}
