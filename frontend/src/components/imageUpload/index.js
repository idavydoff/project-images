import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import ChooseEmoji from "./chooseEmoji";
import "./index.css";

const imageUpload = ({ Store }) => {
    const [file, setFile] = useState(null);
    const [emoji, setEmoji] = useState("");
    var output = Store.imageUploadData;

    const upload = () => {
        if (file && emoji) {
            if (!output) Store.uploadImage(file, emoji)
        }
    }
    
    return (
        <div className="container-fluid component p-2">
            <h4 className="text-center text-muted mb-3">Image Upload</h4>
        
            <div className="custom-file mb-3">
                <input type="file" className="custom-file-input" id="fileInput" onChange={(e) => setFile(e.target.files[0])}/>
                <label className="custom-file-label" htmlFor="fileInput">{file ? file.name : "Choose image"}</label>
            </div>

            <button className="btn container-fluid mb-3" data-toggle="modal" data-target="#chooseEmoji">{emoji ? emoji : "Choose emoji"}</button>
            <button className={`btn btn-${output == "" ? "info" : output == "Loading" ? "secondary" : output == "Error" ? "danger" : "success"} container-fluid`} onClick={() => upload()}>{output ? output : "Upload"}</button>
   

            <ChooseEmoji emoji={emoji} setEmoji={setEmoji} />

        </div>
    );
}

export default inject("Store")(observer(imageUpload));