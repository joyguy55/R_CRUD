

TestyComponent = React.createClass({
  render: function() {
    return (
      <h1>Boo</h1>
    );
  }
});

ReactDOM.render(<TestyComponent/>, document.getElementById('work'));
//ReactDOM.render(<h1>Hi there</h1>, document.getElementById('work'));

// issue with keys
