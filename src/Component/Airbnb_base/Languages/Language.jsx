import React from 'react';
import { Languages } from '../../../util/model';
import { BackBtn } from '../../Home/Imagine/HiddenHome';
import Place from './countrie/PLace';
import Lang from './Language.module.css';

class Language extends React.Component {
    constructor() {
        super();
        this.state = {
            setting: "",
            world: [],
            loadTitle: true
        }
        this.renderPalce = this.renderPalce.bind(this);
    }
    componentDidMount() {
        Languages()
            .then(langData => {
                this.setState(olf => {
                    return {
                        setting: olf.setting = langData.title,
                        loadTitle: olf.loadTitle = false,
                        world: olf.world = langData.diffrentLang
                    }
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
    renderPalce() {
        const main = this.state.world.map(use => {
            return <Place key={use.id} Countrie={use.country} speak={use.language} selected={use.US ? "in-us" : "out-us"}/>
        });
        return main;
    }
    render() {
        return (
            <React.Fragment>
                <div className={Lang.wrap}>
                    <div className={Lang.location}>
                        <h1>Location</h1>
                    </div>
                    <div className={Lang.head}>
                        <div className={Lang.btn}>
                            <BackBtn homebtn={this.props.homebtn} />
                        </div>
                    </div>
                    <div className={Lang.body}>
                        <div className={Lang.title}>
                           {this.state.loadTitle ? <h1 className={Lang.loadT}>L</h1> : <h1>{this.state.setting}</h1>}
                        </div>
                        <div className={Lang.content}>
                            <div className={Lang.main}>
                                {this.renderPalce()}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Language;