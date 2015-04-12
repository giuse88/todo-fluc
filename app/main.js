var React = require("react");
var Component = require("./components/Component");
import AppDispatcher from "./dispatcher/AppDispatcher";

var d = new AppDispatcher();

function render(element, id) {
  React.render(<Component />, document.getElementById(id));
}

render(Component, "content");
