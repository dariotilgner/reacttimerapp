var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count.toBe(9));
        done();
      }, 1001);
    });

    it('should never count below zero seconds', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);

      expect(countdown.state.count).toBe(3);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 2001);
    });
  });
});
