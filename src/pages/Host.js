import React from "react";
import './shared.css'
import HostStyle from "./Host.module.css";
import HeaderHost from "../Component/Host/Element/HeaderHost";
import Sign from "../Component/Host/Element/Sign";
import Lead from "../Component/Host/Element/Lead";
import Week from "../Component/Host/Element/Week";
import Cap from "../Component/Host/Element/Cap";
import Fast from "../Component/Host/Element/Fast";
import Btn from "../Component/Host/Element/Btn";
import Choice from "../Component/Host/Element/Choice";
import FooterHost from "../Component/Host/Element/FooterHost";
import Remove from "../Component/Host/Remove";


let hello = 0;
let point = 0;
class Host extends React.Component {
  textLeftslide = document.querySelector(".Choice_left__VoGt4");
  constructor() {
    super();
    this.state = {
      sign: false,
      section: [],
      trip: [],
      best: [],
      fast: [],
    };
    this.getNotify = this.getNotify.bind(this);
    this.removeblock = this.removeblock.bind(this);
    this.Week = this.Week.bind(this);
    this.Seller = this.Seller.bind(this);
    this.fast = this.fast.bind(this);
    this.home = this.home.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3000/Data/host.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const head = data.host;
        const subHead = data.trip;
        const best = data.bestSeller;
        const fast = data.onTime;
        this.setState({
          section: head,
          trip: subHead,
          best: best,
          fast: fast,
        });
      })
      .catch((error) => {
        console.log("show-text on this code is not worling", error);
      });
  }
  screenSize(sizeScreen = 0) {
    return window.matchMedia(
      "only screen and (max-width: " + sizeScreen + "px)"
    );
  }
  slidePoint(
    objToSlide,
    moveToLeft = false,
    spacesobj = 0,
    stopChangeNumber = 0,
    maxEdgeSlide = 0
  ) {
    let movefrom;
    const obj = document.body.querySelectorAll(objToSlide);
    movefrom = obj[0].getBoundingClientRect().width + spacesobj;
    if (moveToLeft === false) {
      hello -= movefrom;
      if (hello < stopChangeNumber) {
        hello = maxEdgeSlide;
      }
      obj.forEach((right) => {
        return (right.style.transform = `translate(${hello}px,0px)`);
      });
    } else {
      hello += movefrom;
      if (hello > 0) {
        hello = 0;
      }
      obj.forEach((left) => {
        return (left.style.transform = `translate(${hello}px,0px)`);
      });
    }
  }
  leftOne() {
    const left = new Host();
    const size = () => {
      if (left.screenSize(832).matches)
        left.slidePoint(".second-host-container.once", true, 10);
      else {
        left.slidePoint(".second-host-container.once", true, 15);
      }
    };
    size();
  }
  rightOne() {
    const right = new Host();
    function widthScreen() {
      if (right.screenSize(450).matches) {
        right.slidePoint(
          ".second-host-container.once",
          false,
          10,
          -870,
          -894
        );
      } else if (right.screenSize(670).matches) {
        right.slidePoint(".second-host-container.once", false, 10, -915, -1110);
      } else if (right.screenSize(950).matches) {
        right.slidePoint(".second-host-container.once", false, 10, -832, -900);
      } else if (right.screenSize(1030).matches) {
        right.slidePoint(".second-host-container.once", false, 15, -549, -563);
      } else {
        right.slidePoint(".second-host-container.once", false, 15, -379, -380);
      }
    }
    widthScreen();
  }
  getNotify() {
    this.setState((last) => {
      return {
        sign: (last.sign = true),
      };
    });
  }
  back() {
    this.setState((last) => {
      return {
        sign: (last.sign = false),
      };
    });
  }
  removeblock() {
    this.setState({
      sign: false,
    });
  }
  Week() {
    const weekend = this.state.section.map((week) => {
      return <Week key={week.id} topText={week.title} imageWeek={week.image} />;
    });
    return weekend;
  }
  Trip() {
    const move = this.state.trip.map((on) => {
      return (
        <Cap
          key={on.id}
          url={on.imageOnce}
          definition={on.definition}
          price={on.price}
          live={on.place}
          styleOne={"second-host-container once"}
        />
      );
    });
    return move;
  }
  Seller() {
    const e = this.state.best.map((l) => {
      return (
        <Cap
          key={l.id}
          url={l.imageOnce}
          definition={l.definition}
          price={l.price}
          live={l.place}
          styleOne={"second-host-container plus"}
        />
      );
    });
    return e;
  }
  fast() {
    const del = this.state.fast.map((lo) => {
      return (
        <Fast
          key={lo.id}
          rate={lo.rate}
          sunC={lo.sumComment}
          place={lo.place}
          detail={lo.detail}
          images={lo.image}
          price={lo.prices}
        />
      );
    });
    return del;
  }
  secondLeft() {
    const left = new Host();
    function a() {
      if (left.screenSize(450).matches) {
        left.slidePoint(".second-host-container.plus", true, 10);
      } else {
        left.slidePoint(".second-host-container.plus", true, 15);
      }
    }
    return a();
  }
  secondRight() {
    const right = new Host();
    function b() {
      if (right.screenSize(450).matches) {
        right.slidePoint(
          ".second-host-container.plus",
          false,
          10,
          -1050,
          -1050
        );
      } else if (right.screenSize(750).matches) {
        right.slidePoint(
          ".second-host-container.plus",
          false,
          15,
          -1250,
          -1290
        );
      } else if (right.screenSize(950).matches) {
        right.slidePoint(
          ".second-host-container.plus",
          false,
          15,
          -1050,
          -1070
        );
      } else if (right.screenSize(1030).matches) {
        right.slidePoint(".second-host-container.plus", false, 15, -649, -950);
      } else {
        right.slidePoint(".second-host-container.plus", false, 15, -400, -550);
      }
    }
    return b();
  }
  left() {
    const leftMain = new Host();
    function l() {
      if (leftMain.screenSize(450).matches) {
        leftMain.slidePoint(".top-hero-week", true, 5);
      } else {
        leftMain.slidePoint(".top-hero-week", true, 20);
      }
    }
    return l();
  }
  right() {
    let rightMain = new Host();
    function r() {
      if (rightMain.screenSize(450).matches) {
        rightMain.slidePoint(".top-hero-week", false, 5, -770, -800);
      } else if (rightMain.screenSize(650).matches) {
        rightMain.slidePoint(".top-hero-week", false, 10, -900, -990);
      } else if (rightMain.screenSize(800).matches) {
        rightMain.slidePoint(".top-hero-week", false, 15, -1500, -1630);
      } else {
        rightMain.slidePoint(".top-hero-week", false, 15, -900, -1070);
      }
    }
    return r();
  }
  leftCard() {
    const left = new Host();
    function a() {
      if (left.screenSize(450).matches) {
        left.slidePoint(".larger>.fast-wrap", true, 10);
      } else {
        left.slidePoint(".larger>.fast-wrap", true, 20);
      }
    }
    return a();
  }
  rightCard() {
    const right = new Host();
    function b() {
      if (right.screenSize(450).matches) {
        right.slidePoint(".larger>.fast-wrap", false, 10, -1160, -1155);
      } else if (right.screenSize(600).matches) {
        right.slidePoint(".larger>.fast-wrap", false, 15, -1300, -1530);
      } else if (right.screenSize(960).matches) {
        right.slidePoint(".larger>.fast-wrap", false, 15, -1330, -1370);
      } else {
        right.slidePoint(".larger>.fast-wrap", false, 15, -600, -790);
      }
    }
    return b();
  }
  textSlideleft() {
    const textR = new Host();
    const first = textR.textLeftslide,
          second = first?.nextElementSibling,
          last = second?.nextElementSibling,
          lastChildren = last?.children;
   function unicSecond(gap = 1){
    const z = lastChildren[1].getBoundingClientRect().width;
    const wz = z + gap;
    return point += wz;
    
  }
   if(last.getBoundingClientRect().x <= 180){
    if(window.matchMedia("only screen and (max-width: 450px)").matches){
      unicSecond(5);
    }else{
      unicSecond(10);
    }
    let list = Array.from(lastChildren);
    list.forEach(i=>{
      if(point === 0 || point > 0){   
      first.classList.remove("hide-text");
      second.classList.remove("hide-bar");
      last.classList.remove('add-more');
        point = 0;
      }
      i.style.transform = "translate("+ point +"px,0px)";
    })
   }
  }
  textSlideRight() {
    const textL = new Host(),
          first = textL.textLeftslide,
          second = first?.nextElementSibling,
          last = second?.nextElementSibling,
          lastChildren = last?.children;
    first.classList.add('hide-text');
    second.classList.add('hide-bar');
    last.classList.add("add-more");
    function unic(gap = 1){
      const w = lastChildren[1].getBoundingClientRect().width;
      const wa = w + gap;
      return point -= wa;
      
    }
    if(last.getBoundingClientRect().x <= 180 ){
      if(window.matchMedia("only screen and (max-width: 450px)").matches){
       unic(5);
      }else{
       unic(10);
      }
        let a = Array.from(lastChildren);
        console.log("the poinst",point);
        a.forEach(ab=>{
          if(window.matchMedia("only screen and (max-width: 450px)").matches){
            if(point <= -875){ 
              point = -850;
              return;
             }
          }
          else if(window.matchMedia("only screen and (max-width: 750px").matches){
           if(point <= -1050){
             point = -1040;
             return;
           }
          }
          else if(window.matchMedia("only screen and (max-width: 950px)").matches){
            if(point <= -990){
              point = -950;
              return;
            }
          }
          else if(window.matchMedia("only screen and (max-width: 1080px)").matches){
            if(point <= -980){
              point = -950;
              return;
            }
          }
          else{
            if(point <= -810){
               point = -730;
               return;
            }
          }
          ab.style.transform = "translate("+ point +"px,0px)";
        })
    }    
  }
  home(){
    this.setState({ sign: false });
  }
  render() {
    return (
      <React.Fragment>
        <div className={HostStyle.hidden}>
          <h1>Hello and welcome to you</h1>
        </div>
        <div className={HostStyle.host}>
          <HeaderHost btnSign={this.getNotify} />
        {this.state.sign && <Sign />}
        {this.state.sign && <Remove Bhome={this.home} />}
        </div>

        <Lead slideLeft={this.left} rightSlide={this.right} content="wrap-up-section top-hero">
          {this.Week()}
        </Lead>

        <div className={HostStyle.slide}>
          <div className={HostStyle.size}>
            <Choice />
            <Btn
              hideLeft={this.textSlideleft}
              hideRight={this.textSlideRight}
            />
          </div>
        </div>

        <Lead
          heroTitle="Plan a trip with help from host around the world"
          btnContainer="show-text"
          child="Second-field"
          content="wrap-up-section second"
          slideLeft={this.leftOne}
          rightSlide={this.rightOne}
        >
          <div className="inside">{this.Trip()}</div>
        </Lead>

        <Lead
          heroTitle="Best Seller"
          btnContainer="show-text"
          child="Second-field"
          slideLeft={this.secondLeft}
          rightSlide={this.secondRight}
        >
          {this.Seller()}
        </Lead>
        <Lead
          heroTitle="Starting in the next 6 hours"
          btnContainer="show-text"
          child="Second-field larger"
          slideLeft={this.leftCard}
          rightSlide={this.rightCard}
        >
          {this.fast()}
        </Lead>
        <FooterHost />
      </React.Fragment>
    );
  }
}

export default Host;
