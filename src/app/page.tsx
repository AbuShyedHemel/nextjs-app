"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div>
      <ul>
        <li>
          <Link className={`Link ${pathname === "/" ? "active" : ""}`} href="/">
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={`Link ${pathname === "/home" ? "active" : ""}`}
            href="/home"
          >
            Home
          </Link>
        </li>
      </ul>
      <Button onClick={() => router.push("/home")}>Change Page</Button>
    </div>
  );
};

export default Page;
