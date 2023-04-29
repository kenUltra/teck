import React from 'react';
import Matters from "./Matter.module.css";

function Matter(){
    function win(){
        return [ document.querySelector('html').style.height = '100%', document.querySelector('html').style.overflow = 'hidden'];
    }
    return(
        <React.Fragment>
            <div className={Matters.removeContent}>
                   { win() }
                <div className={Matters.content}>
                    <h1>This page is not exist or not found</h1>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Matter;