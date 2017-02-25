import * as React from "react";

export class Button extends React.Component{

    constructor() {
        super();
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}