var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var Controls = require('Controls');
function handleStatusChange(newStatus) {
  this.setState({
    countdownStatus: newStatus
  });
}

describe('Controls', () => {
  it('should exists', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={handleStatusChange}/>);
      var $element = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $element.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" onStatusChange={handleStatusChange}/>);
      var $element = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $element.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    });
  });
});
