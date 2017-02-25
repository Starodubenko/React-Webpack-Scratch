import * as React from "react";
import {Header, Content, Footer} from "../../components";

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Main App !!!</h1>
                <Header>
                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer>
                </Footer>
            </div>
        )
    }
}