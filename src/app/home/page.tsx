"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { CalendarDateRangePicker } from "./home-dashboard/components/date-range-picker";
import { UserNav } from "./home-dashboard/components/user-nav";
type HomePageProps = {
  isActive?: boolean;
};
const HomePage: FC<HomePageProps> = ({ isActive }) => {
  const { setTheme } = useTheme();
  const router = useRouter();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="dark:bg-black bg-white">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("blue")}>
            Red
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="text-center" hidden={isActive}>
        <Button
          className="bg-red-500"
          onClick={() => router.push("home/home-setting")}
        >
          Go to Home-Settings
        </Button>

        <Button
          className="bg-purple-400"
          onClick={() => router.push("home/home-dashboard")}
        >
          Go to Home-Dashboard
        </Button>
        <CalendarDateRangePicker />
        <UserNav />
      </div>
    </>
  );
};

export default HomePage;
