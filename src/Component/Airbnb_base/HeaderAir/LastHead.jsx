import React from 'react';
import { Link } from 'react-router-dom';
import { getHeaderData as iconHead, textHeader as lastHead } from '../../../util/model';
import last from './LastHead.module.css';

class LastHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lasthead: "",
            changeLang: false
        }
    }
    componentDidMount() {
        lastHead()
            .then(res => {
                this.setState(oldVal => {
                    return {
                        lasthead: oldVal.lasthead = res[0][3]
                    }
                })
            })
            .catch(err => {
                console.error(err, "the internet is not running");
            })
        iconHead()
           .then(icons=>{
               const lang = document.body.querySelector(".LastHead_icon__c5Dx3 > span"),
                    menu = document.body.querySelector(".LastHead_sand__sdVoK > span"),
                    user = document.body.querySelector(".LastHead_user__SUSxb > span");
            
               lang.innerHTML = icons.worldIcon;
               menu.innerHTML = icons.sandwichMenu;
               user.innerHTML = icons.logIcon;
            })
           .catch(err=>{
               console.log(err);
           })     
    }
    render() {
        return (
            <div className={last.content}>
                <div className={last.text}>
                    <Link to="/become-hoster">
                        <h2>{this.state.lasthead}</h2>
                    </Link>
                </div>
                <div className={last.icon} onClick={this.props.changeLang}>
                    <span></span>
                </div>
                <div className={last.iconUser}>
                    <div className={last.sand}>
                        <span></span>
                    </div>
                    <div className={last.user}>
                        <span></span>
                    </div>
                    <div className={last.dots}></div>
                </div>
            </div>
        )
    }
}

export default LastHead