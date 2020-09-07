import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

const App = () => {
    return(
        <Message header="Attention!" text="We did an update"/>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));