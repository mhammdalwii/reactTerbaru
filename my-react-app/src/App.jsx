const Button = (props) => {
  const { children, variant = "bg-black" } = props;
  return (
    <button className={`${variant} text-white font-bold py-2 px-4 rounded`} type="submit">
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-400 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-red-700">Login</Button>
        <Button variant="bg-slate-700">Logout</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
