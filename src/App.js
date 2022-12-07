import FileUploadSingle from "./components/Form";

function App() {
  return (
    
      <div className="row d-flex justify-content-center align-items-center rows">
        <div className="col-md-6">
          <div className="card">
            <div className="text-center">
                <img src="https://i.imgur.com/Dh7U4bp.png" width="200" alt="illustration" />
                <span className="d-block mt-3">Upload your audio file<br /> Know your music genre</span>
                <div className="mx-5">
                  <div className="input-group mb-3 mt-4">
                      <FileUploadSingle />
                    </div>
                </div>      
            </div>   
          </div>
        </div>
      </div>
    

  );
}

export default App;
