// Listing 2-1. createClass.

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
