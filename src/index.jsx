import ReactDOM from "react-dom";

import {
  foo,
  nestedBar
} from "./main.module.css";

function App() {
  return (
    <>
      <div className={foo}>
        <p>
          <code>.foo</code> and <code>.component</code> via <code>composes</code>.
        </p>
        <p className={nestedBar}>
          <code>.nested-class</code>
        </p>
      </div>
    </>
  );
}

ReactDOM.render(<App/>, document.getElementById("app"));
