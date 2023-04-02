import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/admin/dashboard");
  };
  return (
    <div className="w-[80%] mx-auto text-center mt-10 ">
      <button className="bg-green-500 px-7 py-3 rounded" onClick={handleClick}>
        Go to Dashboard
      </button>
    </div>
  );
}
