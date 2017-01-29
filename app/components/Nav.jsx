var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li>
              <IndexLink to="/" activeClassName="activeNavigationLink">Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="activeNavigationLink">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://github.com/dariotilgner" target="_blank">Dario Tilgner</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
