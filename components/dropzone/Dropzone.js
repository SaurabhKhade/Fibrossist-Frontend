import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import styles from "../../styles/Test.module.scss";

export default function Zone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
  });

  return (
    <section className="dropContainer">
      <div {...getRootProps({ className: "dropBox" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop your files here.</p>
        ) : (
          <p>
            Drag &apos;n&apos; drop your scanned x-ray here or click to upload.
          </p>
        )}
      </div>
    </section>
  );
}
