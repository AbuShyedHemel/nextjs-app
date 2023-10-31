"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <body>
      <ol>
        <div className="text-center justify-center">
          <Link
            className={`Link ${pathname === "/home" ? "active" : ""}`}
            href="/home"
          >
            <Button className="bg-slate-500">Home</Button>
          </Link>
        </div>
      </ol>
      {/* <Button onClick={() => router.push("/home")}>Change Page</Button> */}
    </body>
  );
};

export default Page;
