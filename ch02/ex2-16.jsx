// Listing 2-16. Component Lifecycle for Props Alteration

var GenericComponent = React.createClass({

  // Invoked First
  componentWillReceiveProps: function( nextProps ) {
  },

  // Second
  shouldComponentUpdate: function( nextProps, nextState ) {
    // if you want to prevent the component updating
    // return false;
    return true;
  },

  // Third
  componentWillUpdate: function( nextProps, nextState ) {
  },

  // Render
  render: function() {
    return ( <h1> Hello World! </h1> );
  },

  // Finally
  componentDidUpdate: function() {
  }
});
