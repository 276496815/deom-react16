import React from "react";
import { render } from "react-dom";

// import懒加载
// import App from "./test1.js";

// react-loadable 懒加载
// import App from "./test2.js";

// 大量的loading
// import App from "./test3.js";

// react.lazy
import App from "./test4.js";

render(
    <App/>,
    document.getElementById("root")
);