import HostFooter from '../styles/FooterHost.module.css';
import React, {Component} from 'react';
import BackDrop from '../Airbnb/BackDrop';
import Term from '../Airbnb/Term';
// import Footer from '../../Footer';

class FooterHost extends Component{
  constructor() {
    super();
    this.state ={
        copy: false,
        privacy: false,
        userC: {},
        list: [],
        dataS: {},
    }
    this.tern = this.tern.bind(this);
    this.backHome = this.backHome.bind(this);
    this.privacy = this.privacy.bind(this);
  }
  componentDidMount(){
    fetch("http://localhost:3000/Data/about.json").then(response =>{
        return response.json();
      }).then(data=>{
        const term = data.term;
        const all = data;
       this.setState((old)=>{
        return {userC: old.userC = term,
              list: old.list = term.listRight,
              dataS: old.dataS = all,
            }
       })
      }).catch(error=>{
        console.log(error);
      })

  }
  years(){
    const date = new Date();
    return date;
  }
  currencyWorld(){
    const us = Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    // call the function usegni name and this.currency().format();
    return us;
  }
  tern(){
    this.setState({ copy: true });
  }
  backHome(){
    this.setState({ copy: false,
      privacy: false });
    document.querySelector('html').className = 'normal';
  }
  privacy(){
    this.setState({
      privacy: true,
    })
  }
  termUI(){
    const titles = this.state.userC;
    const title = this.state.userC.title;
    document.querySelector('html').classList.add("show-some");
     function M({lists, son}){
       return(
       <>
        <li>{lists}</li>
        <p>{son}</p>
       </>)
     }
     function fullscreen(){
      const main = document.querySelector(".term");
      const s = main.childNodes[0];
      if(main.classList.contains("all-screen")){
        main.classList.remove("all-screen");
        s.classList.remove("y-axes");
      }else{
        //const hideb= main.children;
        main.classList.add("all-screen");
        s.classList.add("y-axes");
      }
     }
     function scrollDown(){
      console.log("down scrolling");
     }
     function show(){
      function on(){
        const b = titles.general;
        return [b.one, b.second, b.third];
      } 
      return on();      
     }
     function son(){
      const holdData= show();
      const sonData = titles.baseGeneral;
      const inside = Array.from(sonData, (p, start)=>{
        return React.createElement('p',{key: start}, p)
      });
      const liAndSon = Array.from(holdData, (showData,o)=>{
        return React.createElement('li',{key: o}, showData, inside[o])
      })
      return liAndSon;
     }
     return ( <>
          <Term type={title} full={fullscreen} down={scrollDown} hide={HostFooter.po}>
            <h2>{titles.subtitle}</h2>
              <ul>
                  {this.state.list.map((con, i)=>{
                    return <M key={i} lists={con}/>
                  })}
              </ul>
              <ol>
                {son()}
              </ol>
             <div className={HostFooter.smalest}><small>{titles.notice}</small></div> 
         </Term>
      </>)
  }
  dataOut(dataKey){
    let a;
    switch(dataKey){
      case "Privacy":
      case "privacy":
      case "privacy's":
       a = this.state.dataS.privacy;
        break;
      case "userPrivacy":
      case "user Privacy":   
      case "User Privacy":   
      case "user_privacy":
      case "user privacy":
        a = this.state.dataS.userPrivacy;
        break;
      case "map":
      case "maps":
      case "Maps":
      case "site":
      case "site Map":
      case "siteMap":
        a = this.state.dataS.map;
        break;  
      default:
        a = this.state.dataS.term;
        break;
    }
    function m(){
      return <Term type={a?.title} hide={HostFooter.po}>
        <h2>{a?.subtitle}</h2>
      </Term>
    }
    return m();
  }
  render() {
    return (
        <React.Fragment>
          <div className='Airbnb'>
                {this.state.copy && <BackDrop home={this.backHome} />}
                {this.state.copy && this.termUI() }
                { this.state.privacy ? <BackDrop home={this.backHome}/> : null}
                { this.state.privacy &&  this.dataOut('privacy') }
          </div>
            <div className={HostFooter.wrap}>
               <div className={HostFooter.footer}>
                 <div className={HostFooter.footerChild}>
                  <div className={HostFooter.wraping}>
                    <div className={HostFooter.justices}>
                       <p>&copy;</p>
                    </div>
                    <div className={HostFooter.company_content}>
                        <p>Airbnb, Inc</p>
                       <p>{this.years().getFullYear()}</p>
                    </div>
                    <div className={HostFooter.termOfUse}>
                        <span>.</span>
                        <p onClick={this.tern}>Terms</p>
                        <span>.</span>
                        <p>Sitemap</p>
                        <span>.</span>
                        <p onClick={this.privacy}>Privacy</p>
                        <span>.</span>
                        <p>Your Privacy Choices</p>
                        <span>.</span>
                        <p>Destinations</p>
                    </div>
                  </div>
                 </div>
                 <div className={HostFooter.footerChildLeft}>
                    <div className={HostFooter.language}>
                        {/* <h1>e</h1> */}
                        <p>English(US)</p>
                    </div>
                    <div className={HostFooter.money}>
                        <p>{'$'} USD</p>
                    </div>
                    <div className={HostFooter.res}>
                      <p>Support & resources</p>
                    </div>
                    <div className={HostFooter.up}>
                        <p>{'^'}</p>
                    </div>
                 </div>
               </div>
            </div>
        </React.Fragment>
    )
  }
}
export default FooterHost;