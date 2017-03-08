import * as React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";

import "./Header.scss"

// @connect((store) => {
//     return {
//
//     }
// })
// export class Header extends React.Component{
//
//     constructor() {
//         super();
//
//         this.state = {
//
//         }
//     }
//
//     render(){
//         let {config} = this.props;
//         let links = [];
//         config.forEach((link, i)=>{
//             links.push(<Link to={link.destination} key={i} className="ytrewq">{link.title}</Link>);
//         });
//         return (
//             <div className="qwerty">
//                 <h1>A</h1>
//                 <h1>B</h1>
//                 <h1>C</h1>
//                 {links}
//             </div>
//         )
//     }
// }

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {logOutAction} from "../../redux/actions";
import {routerActions} from "react-router-redux";


@connect((store) => {
    return {

    }
})
class Login extends React.Component {
    static muiName = 'FlatButton';

    goToLoginPage(e){
        e.preventDefault();
        this.props.dispatch(routerActions.push('/login'));
    }

    render() {
        return (
            <FlatButton style={this.props.style} label="Login" onClick={this.goToLoginPage.bind(this)}/>
        );
    }
}

@connect((store) => {
    return {
        user: store.auth.user
    }
})
class Logged extends React.Component {

    handleChange = (event, value) => {
        switch (value) {
            case "profile":
                this.props.dispatch(routerActions.push({
                    pathname: '/profile'
                }));
                break;
            case "signOut":
                this.props.dispatch(logOutAction());
                break;
        }
    };

    render() {
        return (
            <div className="header">
                <span className="user-name">{this.props.user.fullName}</span>
                <IconMenu
                    iconStyle={this.props.iconStyle}
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    onChange={this.handleChange}
                >
                <MenuItem value="profile" primaryText="profile"/>
                <MenuItem value="signOut" primaryText="Sign out"/>
            </IconMenu>
            </div>)
    }
}

Logged.muiName = 'IconMenu';


@connect((store) => {
    return {
        user: store.auth.user
    }
})
export class Header extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Tickets store"
                    iconElementLeft={<IconButton>Logo</IconButton>}
                    iconElementRight={this.props.user ? <Logged/> : <Login/>}
                />
            </div>
        );
    }
}