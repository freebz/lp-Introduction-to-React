// Listing 2-8. React.render

var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
});

React.render(<MyComponent name="frodo" />, document.getElementById('container'));
