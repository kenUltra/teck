import React from "react";
import '../Airbnb_base/Fixed.css';
import centerStyle  from "./CenterHeader.module.css";
import { Link } from "react-router-dom";
import {textHeader as CenterT, searchTitle as ease, getHeaderData as iconSearch, manyElement as htmls, selectElement as html ,makeUpper } from "../../util/model";
import Location from "../Search/Location";
import Guest from '../Search/Guest'
import Dates from "../Search/Dates";

class CenterH extends React.Component{
    constructor(){
        super();
        this.state = {
            middleFirst: "",
            middleSecond: "",
            middleLast: "",
            classOne: " ",
            classTwo: " ",
            subClass: "centerA",
            line: " "
        }
        this.changeE = this.changeE.bind(this);
        this.one = this.one.bind(this);
    }
    componentDidMount(){
        const parent = document.body.querySelector(".Shared_centerContainer__RC2AY");
        const sub = document.body.querySelector(".Shared_subNav__JFgoa");
        const rootP = sub.previousElementSibling;
        parent.classList.add("remove-content");
        rootP.classList.add("new-head");
        CenterT()
           .then(top=>{
            this.setState({ loedPage: false,
                            middleFirst: top[1][0],
                            middleSecond: top[1][1],
                            middleLast: top[1][2] });
           })
           .catch(err=>{
             console.error(err, "some error happen");
           });
      
    }
    changeE(){
        this.setState({ classTwo: "seleted", classOne: "make", subClass: "changeSome", line: "list" });
    }
    one(){
        this.setState({ classTwo: " ", classOne: " ", subClass: "centerA", line: " " });
    }
    render(){
        return(<React.Fragment>
            <div className={centerStyle.wrap}>
                <div className={centerStyle.text}>
                    <div className={centerStyle.one + " " + this.state.classOne}>
                        <h3 onClick={this.one}>{this.state.middleFirst}</h3>
                        <span></span>
                    </div>
                    <div className={centerStyle.two + " " + this.state.classTwo}>
                        <h3 onClick={this.changeE}>{this.state.middleSecond}</h3>
                        <span></span>
                    </div>
                    <div className={centerStyle.three}>
                        <Link to="/host-house">
                           <h3>{this.state.middleLast}</h3>
                        </Link>
                        <span></span>
                    </div>
                </div>

                <MoreContent middleClass={this.state.subClass} line={this.state.line}/>     
            </div>
        </React.Fragment>)
    }
}
export default CenterH;

export const LoadContent = ()=>{
    return(
        <div className={centerStyle.load}>
            <div className={centerStyle.loadWraper}>
                <div className={centerStyle.loadOne}></div>
                <div className={centerStyle.loadTwo}></div>
                <div className={centerStyle.loadthree}></div>
                <div className={centerStyle.loadfour}>
                    <div className={centerStyle.loadLast}></div>
                    <div className={centerStyle.loadSearch}></div>
                </div>
            </div>
        </div>
    )
}
export class MoreContent extends React.Component{
    constructor(){
        super();
        this.state ={
            loadPage: true,
            today: false,
            loc: false,
            gue: false,
            lastText: "",
            lastSub: "",
            wrapBox: [],
        }
        this.el = this.el.bind(this);
        this.guest = this.guest.bind(this); 

    }
    componentDidMount(){
        ease()
        .then(head=>{
            const allHead = head;
            const cut =  allHead.slice(0, 4); 
            const last = makeUpper(allHead[4].title);
            const lastSub = makeUpper(allHead[4].subtitle);

            this.setState({ loadPage: false,
                            wrapBox: cut,
                            lastText: last,
                            lastSub: lastSub});
        })
        .catch(err=>{
          console.error( err,"an");
        });
        iconSearch()
          .then(s=>{
            let icons = document.body.querySelector("#icon");
            if(icons){
                icons.innerHTML = s.searchIcon;
            }
          })
          .catch(err=>{
            console.error(err,"the ioncs doen't appeat");
          })
    }
    componentDidUpdate(){
        const lists = htmls(".CenterHeader_searchMain__tTzvy");
        const search = html(".CenterHeader_lastSearch__WqYSV");
        const makeArr = Array.from(lists);
        makeArr.push(search);
        function sot(goal){
            makeArr.forEach(l=>{
                l.classList.remove("color-some");
            })
            makeArr[goal].classList.add('color-some');
        }
        makeArr.forEach((some,make)=>{
            some.addEventListener('click', () => {
                sot(make);
            });
            
        })
    }
    el(id){
        if(id === '01') {
            this.setState(old=>{
                return{
                    loc: old.loc = true,
                    gue: old.gue = false,
                    today: old.today = false
                }
            });
        }else if(id === "02" || id === "03" || id === "04"){
            this.setState(oldValue=>{
                return{
                    loc: oldValue.loc = false,
                    gue: oldValue.gue = false,
                    today: oldValue.today = true
                }
            });
        }else {
            this.setState(oldValue=>{
                return{
                    loc: oldValue.loc = false,
                    gue: oldValue.gue = false,
                    today: oldValue.today = false
                }
            });
        }
    }
    guest(){
        this.setState(oldValue=>{
            return{
                loc: oldValue.loc = false,
                gue: oldValue.gue = true,
                today: oldValue.today = false
            }
        });
    }
    render(){
        return(<React.Fragment>

            <div className={centerStyle.child}>
                <div className={centerStyle.wraping}>
                    {this.state.wrapBox.map((wrap,inc)=>{
                        return <SubSearch key={wrap.id} title={wrap.title} subTitle={wrap.subtitle} class={wrap.title + " " + this.props.middleClass + inc  }  lineUp={wrap.title + " " + this.props.line + inc  } searchAction={()=>{
                            this.el(wrap.id) }}/>
                    })}
                    <div className={centerStyle.lastSearch} onClick={this.guest} >
                      <div className={centerStyle.lastBox}>
                             <div className={centerStyle.lastT}>
                                <h1>{this.state.lastText}</h1>
                             </div>
                             <div className={centerStyle.lastsubT}>
                                <h2>{this.state.lastSub}</h2>
                             </div>
                       </div>  
                      <div className={centerStyle.btnSearch}>
                        <div className={centerStyle.iconSea} id="icon"></div>
                        <div className={centerStyle.text}>
                            <span>{makeUpper("search")}</span>
                        </div>
                     </div>
                    </div>
                </div>
            </div>

            {this.state.loc && <Location />}
            {this.state.today && <Dates />}
            {this.state.gue && <Guest />}
        </React.Fragment>)
    }
}

export class SubSearch extends React.Component{
    constructor(){
        super();
        this.state ={

        }
    }
    render(){
        return(
            <React.Fragment>
              <div className={ centerStyle.searchMain + " box-" + this.props.class } onClick={this.props.searchAction}>
                     <div className={centerStyle.title }>
                    <h1>{ this.props.title }</h1>
                     </div>
                     <div className={centerStyle.subTitle}>
                    <h2>{ this.props.subTitle }</h2>
                     </div>
              </div>
              <div className={centerStyle.line + " -" + this.props.lineUp}>
                <span></span>
              </div>

            </React.Fragment>
        )
    }
}