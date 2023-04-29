import React from 'react';
import './Fixed.css';
import Fixing from './Fixed.module.css';
import {getHeaderData as iconNav, selectElement as oneHtml} from '../../util/model'

class Fixed extends React.Component{
    constructor(){
        super();
        this.state ={

        }
    }
    componentDidMount(){
        iconNav()
           .then(icons=>{
              const mobileNav = oneHtml('.hero-mob.one');
              const wish = oneHtml(".hero-mob.middle");
              const mobileLog = oneHtml(".hero-mob.last");
              const parentLogo = oneHtml(".Fixed_mContent__q4vur");
              const son = parentLogo.childNodes;
              son[0].childNodes[0].classList.add("se");

              son.forEach((start, count)=>{
                start.addEventListener('click',()=>{
                    makeChange(count);
                });
              });
              function makeChange(tar){
                son.forEach(l=>{
                    l.classList.remove('visit');
                });
                son[0].childNodes[1].classList.add("col");
                son[0].childNodes[0].classList.remove("se");
               son[tar].classList.add("visit");
              }
              mobileNav.innerHTML = icons.searchIcon;
              wish.innerHTML = icons.heartLogo;
              mobileLog.innerHTML = icons.logIcon;
           })
           .catch(error=>{
            console.error(error, "Some thing went");
           })
    }
    render(){
        return(<React.Fragment>
            <div className={Fixing.mobile}>
                <div className={Fixing.mContent}>
                    <div className={Fixing.left}>
                        <div className='hero-mob one'></div>
                        <p>{this.props.explore}</p>
                    </div>
                    <div className={Fixing.center}>
                        <div className='hero-mob middle'></div>
                        <p>{this.props.wish}</p>
                    </div>
                    <div className={Fixing.right}>
                        <div className='hero-mob last'></div>
                        <p>{this.props.log}</p>
                    </div>
                </div>
            </div>
    </React.Fragment>)
    }
}
export default Fixed;

export function LoadFixed(){
    return(
    <>
       <div className={Fixing.load}>
          <div className={Fixing.wrapLoad}>
            <div className={Fixing.one}>
                <div className={Fixing.logo}></div>
                <div className={Fixing.text}></div>
            </div>
            <div className={Fixing.two}>
                <div className={Fixing.logo}></div>
                <div className={Fixing.text}></div>
            </div>
            <div className={Fixing.three}>
                <div className={Fixing.logo}></div>
                <div className={Fixing.text}></div>
            </div>
          </div>
       </div>
    </>);
}