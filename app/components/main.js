var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('../main.css');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Header message="This is the header" />
        <h3>Hello React Nation!</h3>

        {this.props.children}

        <Footer message="This is the footer" />
      </div>
    )
  }
});
var Footer = React.createClass({
  render: function(){
    return(
      <footer id="footer">{this.props.message}</footer> 
    )
  }
});
var Header = React.createClass({
  render: function(){
    return(
      <header id="header">{this.props.message}</header> 
    )
  }
});

module.exports = Main;