const data = fetch("https://jsonplaceholder.typicode.com/todos/hi")
  .then((response) => response.json())
  .then((json) => console.log(json));

const HomeSettings = () => {
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default HomeSettings;
