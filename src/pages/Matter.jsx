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
                    <h1>The page that you try to reach is not available yet</h1>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Matter;