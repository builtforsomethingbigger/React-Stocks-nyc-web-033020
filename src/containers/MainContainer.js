import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const stocksUrl = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    inPortfolio: [],
    alphaSort: false,
    priceSort: false,
    filter: ''
  }


  componentDidMount(){
    fetch(stocksUrl)
    .then(resp => resp.json())
    .then(stocks => this.setState({ stocks }))
  }

  toPortfolio = stock => {
    if (!this.state.inPortfolio.includes(stock)){
      this.setState({
        inPortfolio: [...this.state.inPortfolio, stock]
      })
    }
  }

  leavePortfolio = stock => {
    let keepArray = []
    this.state.inPortfolio.forEach(keepStock => {
      if (keepStock !== stock) keepArray.push(keepStock)
    })
    this.setState({
      inPortfolio: keepArray
    })
  }

  
  render() {
    // console.log(this.state.inPortfolio)
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.stocks} handleClick={this.toPortfolio} />
            </div>
            <div className="col-4">

              <PortfolioContainer inPortfolio={this.state.inPortfolio} handleClick={this.leavePortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
