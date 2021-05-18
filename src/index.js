import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import MyForm from "./MyForm";
import MyNewApp from "./MyNewApp";
import PhotoUpload from "./PhotoUpload";
import UploadFile from "./UploadFile";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <UploadFile />
    </React.StrictMode>,
    rootElement
);
