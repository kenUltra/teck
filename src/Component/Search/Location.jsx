import React, { Component } from "react";
import Locations from './Search.module.css';
import { searchContent as Map, makeUpper } from '../../util/model';

class Location extends Component{
    constructor(){
        super();
        this.state ={
            mapLocation: "",
            maps: [],
        }
    }
    componentDidMount(){
        Map()
            .then(data=>{
                const boxTitle = makeUpper(data[0].navTitle);
                this.setState({ mapLocation: boxTitle,
                                 maps: data[0].som});

            })
            .catch(err=>{
                console.error(err, "on");
            })
    }
   render(){
    return(
        <React.Fragment>
            <div className={Locations.location + " " + this.props.unic }>
                <div className={Locations.hero}>
                    <div className={Locations.lTitle}>
                        <h1>{this.state.mapLocation}</h1>
                    </div>
                    <div className={Locations.map}>

                        {this.state.maps.map(city=>{
                          return <Country key={city.id} images={city.photo} imageDetail={city.era} places={city.era} />
                       })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
   }
}
export default Location;

export function Country({images, imageDetail, places}){
    return (
        <div className={Locations.places}>
            <div className={Locations.placesImage}>
                <img src={images} alt={imageDetail} />
            </div>
            <div className={Locations.detail}>
                <h3>{places}</h3>
            </div>
        </div>
    )
}