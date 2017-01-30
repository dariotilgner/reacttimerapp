var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function(e) {
      e.preventDefault();

      var seconds = this.refs.seconds.value;

      var regexp = /^[0-9]*$/g;
      if (regexp.test(seconds)) {
        this.refs.seconds.value = '';
        this.props.onSetCountdown(parseInt(seconds, 10));
      }
    },
    render: function() {
      return (
        <div>
          <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
            <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
            <button className="button expanded">Start</button>
          </form>
        </div>
      );
    }
});

module.exports = CountdownForm;
