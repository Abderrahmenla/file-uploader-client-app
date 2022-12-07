import { useState } from 'react';

function FileUploadSingle() {
  const [file, setFile] = useState();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleUploadClick = async () => {
    if (!file) {
      return;
    }
    try {
      const base64 = await convertBase64(file);
     
      const data = await fetch('<ekteb url mtea API lena', {
        method: 'POST',
        body: base64,
        headers: {
          'content-type': file.type,
          'content-length': `${file.size}`,
        },
      })
      console.log(data?.json());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input type="file"  aria-label="Recipient's username" aria-describedby="button-addon2" className="form-control" onChange={handleFileChange} />
      <button className="btn btn-success border-rad" type="button" id="button-addon2" onClick={handleUploadClick}>Upload</button>
    </>
  );
}

export default FileUploadSingle;
