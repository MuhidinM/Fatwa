import { columns } from "@/components/dashboard/column";
import { DataTable } from "@/components/ui/data-table";
import { getData } from "@/data/test-data";

const DashboardHome = async () => {
  const data = await getData();

  return (
    <div className="md:container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DashboardHome;
