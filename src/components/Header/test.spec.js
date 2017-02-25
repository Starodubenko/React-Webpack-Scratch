import {Header} from './Header';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

var component;
var spy = sinon.spy();

describe('Given an instance of the Component', () => {
    describe('when we render the component', () => {
        before(() => {
            component = TestUtils.renderIntoDocument(<Header onRender={ spy }/>);
        });
        it('should render a paragraph', () => {
            var paragraph = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

            expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
            expect(spy).to.be.calledOnce;
        });
    });
});
