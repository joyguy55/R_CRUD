var crud_component = React.createClass({
  propTypes:{
    value: React.PropTypes.string
  },

    render: function() {
      return(
      <div>
          <p>It's working it's working.("Ani")</p>
            <div>{this.props.value}</div>
      </div>
            );
    }
});

ReactDOM.render(<crud_component />, document.getElementById('work'));

// issue with keys
