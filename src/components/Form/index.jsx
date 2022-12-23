import { useState } from 'react';

function FileUploadSingle() {
  const [file, setFile] = useState();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
     
      const data = await fetch('http://localhost:5000/music', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify({music:base64}),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'access-control-allow-origin' : ['http://localhost:5000','http://localhost:5000/music']
        },
      })
      const genre = await data.text();
      setSuccess(genre);
      setError(error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input type="file"  aria-label="Recipient's username" aria-describedby="button-addon2" className="form-control" onChange={handleFileChange} />
      <button className="btn btn-success border-rad" type="button" id="button-addon2" onClick={handleUploadClick}>Upload</button>
      <div className="break" ></div>
      {error && <p className="mt-4 font-14 text-danger">{error}</p>}
      {success && <p className="mt-4 font-14 text-success">{success}</p>}
    </>
  );
}

export default FileUploadSingle;
