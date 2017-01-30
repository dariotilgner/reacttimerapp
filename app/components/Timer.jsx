var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newTimerCount = this.state.count + 1;

      this.setState({
        count: newTimerCount <= 600 ? newTimerCount : 0
      });

      if (newTimerCount === 600) {
        this.setState({
          timerStatus: 'stopped'
        });
      }
    }, 1000);
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleSetTimer: function(seconds) {
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
  render: function() {
    var {count, timerStatus} = this.state;

    var renderControlArea = () => {
      return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} isTimer={true}/>;
    };


    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
