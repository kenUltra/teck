import React from "react";
import load from './loading.module.css';

function Loading(){
    return(
    <div className={load.main}>
        <div className={load.image}></div>
        <div className={load.detail}>
            <div className={load.one}>
                <div className={load.left}></div>
                <div className={load.right}></div>
            </div>
            <div className={load.two}>
                <div className={load.detailTwo}> </div>
            </div>
            <div className={load.three}>
                <div className={load.dateLoad}></div>
            </div>
            <div className={load.four}>
                <div className={load.prices}>
                </div>
            </div>
        </div>
    </div>)
}

export default Loading