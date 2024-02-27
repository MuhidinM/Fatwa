import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Dashboard Template</h1> <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
