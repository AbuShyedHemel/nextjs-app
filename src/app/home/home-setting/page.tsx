import { Card } from "@/components/ui/card";

const data = fetch("https://jsonplaceholder.typicode.com/todos/hi")
  .then((response) => response.json())
  .then((json) => console.log(json));

const HomeSettings = () => {
  return <Card className="rounded-none bg-purple-400 h-full">Customer</Card>;
};

export default HomeSettings;
