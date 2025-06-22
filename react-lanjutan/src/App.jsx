import { Fragment, useId } from "react";

function Input(props) {
  const { id = "input", label } = props;
  const inputId = useId();
  return (
    <Fragment>
      {" "}
      <label htmlFor="">
        <span>{label}</span>
        <input type="text" id={`${inputId}-${id}`} />
      </label>
      <p aria-details={`${inputId}-${id}`}>Name should contain at least first name and last name</p>
    </Fragment>
  );
}

function App() {
  return (
    <>
      <Input />
    </>
  );
}

export default App;
