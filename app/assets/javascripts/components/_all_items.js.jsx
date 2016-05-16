var AllItems = React.createClass({
    render(){
        var items = this.props.items;

        return(
          <table className="table">
            <thead>
              <tr className="thead-default">
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {items.map(function(item) {
                return <tr key={item.id} >
                <td> {item.name} </td>
                <td> {item.description} </td>
                <td> {btn} </td>
                </tr>
              })}
            </tbody>
          </table>
      );

        return(
          <div>
              {items}
          </div>
        )
      }
});
