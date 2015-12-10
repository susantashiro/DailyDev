import React from 'react';




class Challenge extends React.Component {
  render() {
    return (
      <div className="panel-body">
        <div className="panel-heading">
          <h3 dangerouslySetInnerHTML={{__html:this.props.title}} className="panel-title"></h3>
        </div>
          <p dangerouslySetInnerHTML={{__html:this.props.question}}></p>

        <form id="form" onSubmit={this.props.checkSolution}>
          <input type="text" placeholder="Paste Code Here..."/>
        </form>
      </div>



    )
  }
}

module.exports = Challenge;
