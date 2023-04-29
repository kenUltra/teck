import React from "react";
import guest from './Search.module.css';
import { searchContent as guestData} from '../../util/model';

class Guest extends React.Component{
    constructor(){
        super();
        this.state ={
            guestData: []
        }
    }
    componentDidMount(){
        guestData()
           .then(guest=>{
             this.setState({ guestData: guest[1].navTitle });
           })
           .catch(err=>{
            console.error(err, "the data for guest component dit get correctly");
           });
    }
    render(){
        return(<div className={guest.mainGuest}>
            <div className={guest.guest}>
                 {this.state.guestData.map((data, list)=>{
                    return <GuestType key={list} type={data.title} limiteAge={data.ageA} unicCase={data.unicServices} />
                 })}
            </div>
        </div>)
    }
}

export default Guest;

export function GuestType({type, limiteAge, unicCase}){
    const [number, setNumber] = React.useState(0);
    const [btnMinus, setBtnMinus ] = React.useState("btn-rm");
    function add(){
        setBtnMinus(" ");
        setNumber((oldvalue)=>{
            return oldvalue = oldvalue + 1;
        });
    }
    function sub(){
        if(number <= 2){
            setNumber(1);
            setBtnMinus("btn-rm");
        }
        setNumber((oldvalue)=>{
            return oldvalue = oldvalue - 1;
        });
    }
    return (
        <div className={guest.guestWap}>
            <div className={guest.gleft}>
                <div className={guest.top}>
                    <h1>{type}</h1>
                </div>
                <div className={guest.bottom}>
                    <h2>{limiteAge}</h2>
                    <h3>{unicCase}</h3>
                </div>
            </div>
            <div className={guest.gright}>
                <div className={guest.btnl} onClick={sub} >
                    <span className={btnMinus}>-</span>
                </div>
                <div className={guest.number}>
                    <span>{number}</span>
                </div>
                <div className={guest.btnr} onClick={add}>
                    <span>+</span>
                </div>
            </div>
        </div>
    )
}