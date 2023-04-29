import React from "react";
import hidePart from "./HiddenHome.module.css";

const HiddenHome = ({ returnHome }) => {
    return (
        <div className={hidePart.entire} onClick={returnHome} />
    )
}
export default HiddenHome;

export function BackBtn({ homebtn }) {
    return (<div className={hidePart.btnWrap} onClick={homebtn}>
        <div className={hidePart.btnContent}>
            <div className={hidePart.not}>
                <h1>X</h1>
            </div>
        </div>
    </div>)
}