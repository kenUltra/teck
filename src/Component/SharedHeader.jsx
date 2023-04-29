import React from "react";
import Shared from './Shared.module.css';
import './Shared.css';
import { subNavData as secondHead } from "../util/model";
import { getHeaderData as icons } from "../util/model";
import LastHead from "./Airbnb_base/HeaderAir/LastHead";
import HiddenHome from "./Home/Imagine/HiddenHome";
import Language from "./Airbnb_base/Languages/Language";

let slideHeader = 0;
const SharedHeadeer = ({ firstElement, secondElemet }) => {
    const top = document.querySelector("html");
    const [stackLang, setStackLang] = React.useState(false);
    const slideAction = (isFromLeft = true) => {
        const parentSlide = document.body.querySelector(".Shared_lists__Vka09");
        const leftAr = document.body.querySelector(".Shared_btnRight__JlIoA");
        const targetSlide = Array.from(parentSlide.children);
        const leapMove = parentSlide.childNodes[0].getBoundingClientRect().width;
        isFromLeft ? slideHeader += (Math.floor(leapMove * 2)) : slideHeader -= (Math.floor(leapMove * 2));

        if (slideHeader >= 0) {
            slideHeader = 0;
            leftAr.classList.remove("show");
        }
        targetSlide.forEach(start => {
            start.classList.add("slide-point");
            start.style.setProperty('--slide-to', slideHeader + "px");
        });
    }
    function leftSlide() {
        slideAction(true);
    }
    function rightSlide() {
        const childA = document.body.querySelector(".aw.right");
        const mobile = window.matchMedia("(max-width: 450px)");
        const mobileOther = window.matchMedia("(max-width: 650px)");
        const ipad = window.matchMedia("(max-width: 1030px)");
        childA.parentElement.classList.add("show");

        if (mobile.matches) {
            if (slideHeader <= -3200) {
                slideHeader = -3200;
            }
        } else if (mobileOther.matches) {
            if (slideHeader <= -2800) {
                slideHeader = -3230;
            }
        } else if (ipad.matches) {
            if (slideHeader <= -2600) {
                slideHeader = -2700;
            }
        } else {
            if (slideHeader <= -2400) {
                slideHeader = -2450;
            }
        }
        slideAction(false);
    }
    const lang = () => {
        top.classList.add("lang");
        setStackLang(old => {
            return old = true
        })
    }
    const backHome = () => {
        top.classList.remove("lang");
        setStackLang(old => {
            return old = false
        })
    }
    return (
        <React.Fragment>
            <div className={Shared.main}>
                <div className={Shared.heroMain}>
                    <div className={Shared.start}>{firstElement}</div>
                    <div className={Shared.center}>
                        <div className={Shared.centerContainer}>{secondElemet}</div>
                    </div>
                    <div className={Shared.end}>
                        <LastHead changeLang={lang} />
                    </div>
                </div>
            </div>
            <SubHeader textBtnFilter="Filters" arrowLeft={rightSlide} arrowRight={leftSlide} />

            {stackLang && <Language homebtn={backHome} />}
            {stackLang && <HiddenHome returnHome={backHome} />}

        </React.Fragment>
    )
}
export default SharedHeadeer;

export function SubHeader(props) {
    const [subNav, setSubnav] = React.useState([]);
    const [loadSubNav, setLoadSubNav] = React.useState(true)
    React.useEffect(() => {
        secondHead()
            .then((lists) => {
                setSubnav(lastList => {
                    return lastList = lists
                });
                setLoadSubNav(main => {
                    return main = false
                })
            })
            .catch(err => {
                console.error(err, "this is an error");
            })
    }, []);
    React.useEffect(() => {
        icons()
            .then(filterIcon => {
                const fil = document.body.querySelector(".filter-icon");
                const arrow = document.body.querySelectorAll(".aw");
                arrow.forEach(ar => {
                    return ar.innerHTML = filterIcon.arrowIcon;
                })
                fil.innerHTML = filterIcon.filterIcon;
            })
            .catch(err => {
                console.error(err, "This is an error");
            })
    }, [])
    const point = () => {
        return subNav.map(l => {
            return React.createElement('div', { className: Shared.scrollList + " pos" + l.id, key: l.id }, <div className={Shared.image}><img src={l.imageNav} alt={l.categorie} /></div>, <div className={Shared.title}><p>{l.categorie}</p></div>)
        })
    }
    return (
        <React.Fragment>
            <div className={Shared.subNav}>
                <div className={Shared.subCont}>
                    <div className={Shared.lists}>
                        {loadSubNav ? <LoadSub /> : point()}
                    </div>
                    <div className={Shared.btn}>
                        <div className={Shared.btnLeft} onClick={props.arrowLeft}>
                            <span className="aw"></span>
                        </div>
                        <div className={Shared.btnRight} onClick={props.arrowRight}>
                            <span className="aw right"></span>
                        </div>
                        <div className={Shared.btnFilter}>
                            <div className="filter-icon"></div>
                            <div className="filter-text">
                                <h3>{props.textBtnFilter}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export function LoadSub() {
    const repeat = () => {
        let start = 0;
        let bar = [];
        while(start <= 14){
            bar.push(start++);
        }
        return bar.map((power)=>{
            return <LoadList key={power}/>
        })
    }
    return <div className={Shared.load}>
        {repeat()}
    </div>
}
export function LoadList({ test }) {
    return (
        <div className={Shared.boxing}>
            <div className={Shared.cirle}>
                {test}
            </div>
            <div className={Shared.text}></div>
        </div>
    )
}