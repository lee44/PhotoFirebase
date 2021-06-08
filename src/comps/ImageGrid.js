import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <img
            src={doc.url}
            alt="uploaded pic"
            onClick={() => setSelectedImg(doc.url)}
          />
        ))}
    </div>
  );
};

export default ImageGrid;
