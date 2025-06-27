import { Fragment, memo, useState } from "react";

const ToDoList = memo((props) => {
  const { todos } = props;
  return (
    <Fragment>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={`${todo}-${index}`}>{todo}</p>;
      })}
    </Fragment>
  );
});

const Counter = memo((props) => {
  const { count } = props;
  console.log("Counter component rendered");
  return <p>Count : {count}</p>;
});

function ExampleMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Coding", "Create Videos"]);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <>
      <ToDoList todos={todos} count={count} />
      <button
        onClick={() => {
          addTodo(`Playing Piano`);
        }}
      >
        Add Todo
      </button>
      <Counter count={count} />
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default ExampleMemo;
