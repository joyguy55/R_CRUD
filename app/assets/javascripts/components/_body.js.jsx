var Body = React.createClass({

  getInitialState(){
    return { items: [] }
  },

  componentDidMount(){
    $.getJSON('/api/v1/items.json', (response) => {this.setState ({ items: response}) });
    console.log('component mounted');
  },

  handleSubmit(item){
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },

  render(){
    return(
      <div className="panel panel-default">
            <NewItem handleSubmit={this.handleSubmit} />
            <AllItems items={this.state.items}/>
      </div>
    )
  }

});
