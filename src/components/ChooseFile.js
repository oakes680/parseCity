import React from "react";
import "../App.css"

const ChooseFile = ({ fileHandler, fh }) => {
    return (
        <>
            <span>Step 1: </span>
            <button className="filewrap button">
                {/* {fh ? <span>Choose a File</span> : <span className="tran"> Choose a File ✔️</span>} */}
                <span > Choose a File   </span><span className={fh ? "fadeOut" : "fadeIn"}> ✔️</span>
                <input
                    className="custom-file-input"
                    onChange={fileHandler}
                    type="file"
                    accept=".xls,.xlsx"
                    id="file"
                    multiple
                ></input>
            </button>
        </>
    );
};

export default ChooseFile;

{
    /* <span>Step 1: </span>
  <span className="filewrap">
  
    Choose a file
    <input
      className="custom-file-input"
      onChange={fileHandler}
      type="file"
      accept=".xls,.xlsx"
      id="file"
      multiple
    ></input>
  </span> */
}
