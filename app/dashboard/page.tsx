import { columns } from "@/components/dashboard/column";
import { DataTable } from "@/components/ui/data-table";
import { data } from "@/constants";



const DashboardHome = async () => {

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DashboardHome;
