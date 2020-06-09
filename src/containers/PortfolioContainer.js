import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.inPortfolio.map(stock => 
            <Stock key={stock.id} {...stock} handleClick={e => this.props.handleClick(stock)}/>
            )
        }
      </div>
    );
  }

}

export default PortfolioContainer;
