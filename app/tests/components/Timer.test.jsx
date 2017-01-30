var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetTimer', () => {
    it('should set state to started and time up', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer(10);

      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count.toBe(11));
        done();
      }, 1001);
    });

    it('should never count above 10 min', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer(600);

      expect(timer.state.count).toBe(600);

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        done();
      }, 2001);
    });

    it('should pause timer on paused status', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer(3);

      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 2001);
    });

    it('should clear timer on stopped status', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer(3);

      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 2001);
    });
  });
});
