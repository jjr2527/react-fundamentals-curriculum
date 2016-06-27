var React = require('react');

var Home = React.createClass({
  render: function(){
    return (
      <h6>
        Hello {this.props.name}!
      </h6>
    )
  }
});

module.exports = Home;