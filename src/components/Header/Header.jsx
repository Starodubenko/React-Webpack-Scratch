import * as React from "react";
import {Link} from "react-router";

export class Header extends React.Component{

    constructor() {
        super();

        this.state = {
            linksConfig: [
                {
                    title: "Login",
                    destination: "/login"
                },
                {
                    title: "Home",
                    destination: "/home"
                },
                {
                    title: "Account",
                    destination: "/account"
                }
            ]
        }
    }

    render(){
        let links = [];
        this.state.linksConfig.forEach((link, i)=>{
            links.push(<Link to={link.destination} key={i}>{link.title}</Link>);
        });
        return (
            <div>
                {links}
            </div>
        )
    }
}