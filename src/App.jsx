import "./App.css";

function App() {
  return (
    <div>
      <h1>hello, ci/cd!</h1>
      <h2>with, {import.meta.env.VITE_API_KEY}</h2>
    </div>
  );
}

export default App;
