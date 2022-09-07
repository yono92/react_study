import logo from "./logo.svg";
import "./App.css";

// 태그의 속성(attribute)에 값을 넣는 방법
// 큰 따옴표 사이에 문자열을 넣거나
// 중괄호 사이에 자바스크립트 코드를 넣으면 됨

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
