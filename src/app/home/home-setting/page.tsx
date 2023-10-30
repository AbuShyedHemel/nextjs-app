const data = fetch("https://jsonplaceholder.typicode.com/todos/hi")
  .then((response) => response.json())
  .then((json) => console.log(json));

const HomeSettings = () => {
  return <div className="bg-purple-400">Home-Setting</div>;
};

export default HomeSettings;
