import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { Form, Button, Card, Alert } from "react-bootstrap";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const Label = styled.label`
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid #0d6efd;
    border-radius: 50%;
    line-height: 18px;
    color: #0d6efd;
    font-weight: bold;
    font-size: 24px;
    &:hover {
      background: #0d6efd;
      color: white;
    }
  `;
  const ImageInput = styled.input`
    height: 0;
    width: 0;
    opacity: 0;
  `;

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <>
      <div className="title text-center m-5">
        <h1>Your Pictures</h1>
      </div>
      <Form>
        <Label>
          <ImageInput type="file" onChange={handleChange} />
          <span style={{ margin: "0 0 0 5.5px" }}>+</span>
        </Label>

        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </Form>
    </>
  );
};

export default UploadForm;
