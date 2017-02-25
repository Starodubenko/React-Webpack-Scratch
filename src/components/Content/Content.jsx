import * as React from "react";

export class Content extends React.Component{

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