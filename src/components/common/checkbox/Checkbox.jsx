import * as React from "react";

export class Checkbox extends React.Component {

    constructor() {
        super();
        this.state = {
            isChecked: false
        }
    }

    onChange(){
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        let {labelOn, labelOff} = this.props;
        return (
            <label className="check-box">
                <input type="checkbox"
                       checked={this.state.isChecked}
                       onChange={this.onChange.bind(this)}
                />
                {this.state.isChecked ? labelOn : labelOff}
            </label>
        )
    }
}