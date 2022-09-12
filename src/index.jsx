import ReactDOM from "react-dom";

import {
  foo,
  nestedBar
} from "./main.module.css";

import {
  component,
  nestedComponentClass
} from "./component.module.css"

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
      <p className={component}>
        <code>.component</code> via direct import in JS
        <code className={nestedComponentClass}>.nested-component-class</code>
      </p>
    </>
  );
}

ReactDOM.render(<App/>, document.getElementById("app"));
