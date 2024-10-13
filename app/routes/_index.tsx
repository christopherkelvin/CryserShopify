import { TopNav } from "~/components/topnav";

export default function Index() {
  return (
    <>
      <TopNav name="Dashboard" />
      <div className="dark:bg-slate-700 min-h-screen">Hello shop</div>
    </>
  );
}