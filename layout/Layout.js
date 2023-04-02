import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/Navbar/navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export function Admin({ children }) {
  const router = useRouter();
  const pathname = router.pathname;
  const lastSegment = pathname.split("/").pop();
  return (
    <>
      <Sidebar />
      <Navbar title={lastSegment} />
      <div className="w-full">{children}</div>
    </>
  );
}
export const getDashboardLayout = function (page, pageProps) {
  return <Admin {...pageProps}>{page}</Admin>;
};

export default Admin;
