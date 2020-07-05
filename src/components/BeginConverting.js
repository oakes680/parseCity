import React from 'react'


const BeginConverting = ({ upload, bc }) => {
    return (
        <>

            <span>Step 2: </span>
            <button className="button" onClick={upload}>
                <span >Begin Converting</span><span className={bc ? "fadeOut" : "fadeIn"}> ✔️</span>
            </button>
        </>
    )
}

export default BeginConverting