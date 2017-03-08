import * as React from "react"
import * as TestUtils from "react-addons-test-utils";
import {Checkbox} from "./Checkbox"

describe('Checkbox test', () => {

    let component;
    let label;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <Checkbox labelOn="On" labelOff="Off"/>
        );
        label = TestUtils.findRenderedDOMComponentWithClass(component, "check-box");
    });

    it("Checkbox should be rendered with default label text that's equal Off", () => {
        expect(label.textContent).to.equal("Off");
    });

    it("Checkbox 'onChange' method should set 'isChacked' property to opposite value", () => {
        let input = TestUtils.findRenderedDOMComponentWithTag(component, 'input');

        expect(label.textContent).to.equal("Off");
        TestUtils.Simulate.change(input);
        expect(label.textContent).to.equal("On");
        TestUtils.Simulate.change(input);
        expect(label.textContent).to.equal("Off");
    })
});