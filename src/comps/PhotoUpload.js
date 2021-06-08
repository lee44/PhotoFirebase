import React, { useState } from "react";
import Title from "./Title";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import { Container } from "react-bootstrap";

function PhotoUpload() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Title />
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </Container>
    </>
  );
}

export default PhotoUpload;
