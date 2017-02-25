import React, {Component, PropTypes} from "react";
// import ReactDomServer from "react-dom/server";
var ReactDomServer = require('react-dom/server');
import Routes from "../routes";

export default class Html extends Component {

    render() {
        console.log(" Start Html.js rendering");
        const {assets, component, store} = this.props;
        const content = component ? ReactDomServer.renderToString(component) : '';

        return (
                <html lang="en-us">
                <head>
                </head>
                <body>
                <Routes/>
                <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
                <script src={assets} charSet="UTF-8"/>
                </body>
                </html>
        );
    }
}
