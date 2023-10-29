"use client";
import { Button, Card } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div>
      <Card>
        <ul>
          <li>
            <Link
              className={`Link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
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
        <Button type="text" onClick={() => router.push("/home")}>
          Change Page
        </Button>
      </Card>
    </div>
  );
};

export default Page;
