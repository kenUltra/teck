import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../../../util/hostPage';
import finish from './EndingPage.module.css';

export default class EndingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            title: [],
        }
        this.main = this.main.bind(this);
    }
    componentDidMount() {
        footer()
            .then(end => {
                this.setState((state) => {
                    return {
                        title: state.title = end.main
                    }
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
    main() {
        const top = this.state.title.map(on => {
            function list(){
                const others = on.list.map((a, b) => {
                    return <Son other={a} key={b} />
                })
                return others;
            }
            return <FooterContent key={on.id} footerT={on.title}>{list()} </FooterContent>
        })
        return top;
    }

    render() {
        return (
            <React.Fragment>
                <div className={finish.end}>
                    <div className={finish.wrap}>
                        {this.main()}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export function FooterContent({ footerT, children }) {
    return (
        <div className={finish.container}>
            <div className={finish.title}>
                <h5>{footerT}</h5>
            </div>
            <div className={finish.content}>
                {children}
            </div>
        </div>
    )
}
export const Son = ({ other }) => {
    return (
        <>
            <ul>
                <li><Link to="http://apple.com">{other}</Link></li>
            </ul>
        </>
    )
}
