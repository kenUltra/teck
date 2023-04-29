import React from "react";
import { Link } from 'react-router-dom';
import { stack, hostPage as mapUse } from "../../../util/hostPage";
import Area from "./AreaPlace.module.css";
import { BackBtn } from "./HiddenHome";


function AreaPlace({ backHome }) {
    const [titleS, setTitle] = React.useState("");
    const [mainTitle, setMainTitle] = React.useState("");
    const [middleTitle, setMiddleTitle] = React.useState("");
    const [lastTitle, setLastTitle] = React.useState("");
    const [sum, setSum] = React.useState("");
    const [leftSlider, setLeftSlide] = React.useState("");
    const [rightSlider, setRigthtSlide] = React.useState("");
    const [location, setLocation] = React.useState("");
    React.useEffect(() => {
        stack()
            .then(places => {
                setTitle(old => {
                    return old = places.title
                })
                setMainTitle(old => {
                    return old = places.address
                })
                setMiddleTitle(old => {
                    return old = places.kindPlace
                })
                setLastTitle(old => {
                    return old = places.guest
                })
                setSum(old => {
                    return old = places.btnTitle
                })
                setLeftSlide(left => {
                    return left = places.kind[0]
                })
                setRigthtSlide(right => {
                    return right = places.kind[1]
                })
                setLocation(loc=>{
                    return loc = places.zip
                })
            })
            .catch(err => {
                console.error(err);
            })
        mapUse()
          .then(mapIcon=>{
              const hold = document.body.querySelector(".AreaPlace_iconMap__2dsbf > span");
              hold.innerHTML = mapIcon.where;
          })
          .catch(err=>{
              console.error("an error on page", err);
          })    
    }, []);
    return (
        <React.Fragment>
            <section className={Area.wrap}>
                <div className={Area.content}>
                    <div className={Area.top}>
                        <div className={Area.title}>
                            <h1>{titleS}</h1>
                        </div>
                        <div className={Area.btn}>
                            <BackBtn homebtn={backHome} />
                        </div>
                    </div>
                    <div className={Area.bottom}>
                        <div className={Area.bottomContent}>
                            <div className={Area.contentOne}>
                                <div className={Area.headlineOne}>
                                    <h1>{mainTitle}</h1>
                                </div>
                                <div className={Area.locationUser}>
                                    <div className={Area.wrapLoc}>
                                        <div className={Area.iconMap}>
                                            <span></span>
                                        </div>
                                        <div className={Area.zone}>
                                            <h2>{location}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Area.contentSecond}>
                                <div className={Area.headlineSecond}>
                                    <h1>{middleTitle}</h1>
                                </div>
                                <div className={Area.secondContent}>
                                    <TwoSlider leftText={leftSlider} rightText={rightSlider} />
                                </div>
                            </div>
                            <div className={Area.contentThird}>
                                <div className={Area.lastHeadLine}>
                                    <h1>{lastTitle}</h1>
                                </div>
                                <div className={Area.listguest}>
                                    <Sum />
                                </div>
                            </div>
                            <div className={Area.update}>
                                <div className={Area.updateEarn}>
                                    <Link to={"http://airbnb.com/host"}>
                                        <h2>{sum}</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AreaPlace;


export function Sum() {
    const [number, setNumber] = React.useState(0);
    const [styleDown, setStyleDown] = React.useState(" ");
    function numberUp(){
        setNumber(old=>{
            return old = old + 1;
        })
        if(number > 0){
            setStyleDown(" ")
        }
    }
    function numberDown(){
        setNumber(oldNumber=>{
           return oldNumber <= 1 ? oldNumber = 0 : oldNumber - 1;
        });
        if(number === 0 || number <=0){
            setStyleDown("stop");
        }
    }
    return (
        <div className={Area.wrapNumber}>
            <div className={Area.number + " " + styleDown} onClick={numberDown}>
                <span>-</span>
            </div>
            <div className={Area.up}>
                <span>{number}</span>
            </div>
            <div className={Area.number} onClick={numberUp}>
                <span>+</span>
            </div>
        </div>
    )
}
export class TwoSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftStyle: " ",
            rightStyle: " "
        }
        this.leftSide = this.leftSide.bind(this);
        this.rightSlide = this.rightSlide.bind(this);
    }
    leftSide() {
        const lop = Area.check;
        this.setState((last) => {
            return {
                leftStyle: last.leftStyle = lop,
                rightStyle: last.rightStyle = " "
            }
        })
    }
    rightSlide() {
        const r = Area.check;
        this.setState((other) => {
            return {
                leftStyle: other.leftStyle = " ",
                rightStyle: other.rightStyle = r,
            }
        })
    }
    render() {
        return (
            <div className={Area.slider}>
                <div className={Area.left + " " + this.state.leftStyle} onClick={this.leftSide} onClickCapture={this.props.Once}>
                    <h2>{this.props.leftText}</h2>
                </div>
                <div className={Area.right + " " + this.state.rightStyle} onClick={this.rightSlide} onClickCapture={this.props.Twice}>
                    <h2>{this.props.rightText}</h2>
                </div>
            </div>
        )
    }
}