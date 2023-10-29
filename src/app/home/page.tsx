import { Card } from "antd";
import Link from "next/link";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Card>
      <ul>
        <li>
          <Link href="home/home-setting">Setting</Link>
        </li>
        <li>
          <Link href="home/home-dashboard">Dashboard</Link>
        </li>
      </ul>
    </Card>
  );
};

export default HomePage;
