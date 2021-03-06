import React from "react";
import "./styles.css";
import Form from "./Form";
import { formData } from "./formData";

export default function MyNewApp() {
    return (
        <div className="App">
            <Form formData={formData} />
        </div>
    );
}
