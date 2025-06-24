import { Fragment, useState } from "react";

function Input() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState("Coding", "Create Videos");

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <Fragment>
      <h1>hello world</h1>
    </Fragment>
  );
}

function App() {
  return <></>;
}

export default App;
