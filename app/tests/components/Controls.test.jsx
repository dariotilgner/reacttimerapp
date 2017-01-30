var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exists', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $element = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $element.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $element = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $element.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    });
  });
});
