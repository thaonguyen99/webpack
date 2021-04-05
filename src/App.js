import logo from "./logo.svg";
import "./App.css";
import btn from "./button.module.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src="./img.jpg" alt="roses" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className={btn.button}>Click me</button>
      </header>
    </div>
  );
}

export default App;
