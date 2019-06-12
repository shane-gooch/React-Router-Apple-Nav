import React from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';

import data from './data';

import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      item: []
    };
  }

  componentDidMount() {
    this.setState({ 
      item: data
    })
  }
  
  render() {
    // debugger; 
    return (
      <div className="App">

        <div>
          <Route 
            path='/' 
            render={props => <NavWrapper {...props} item={this.state.item} />} 
          />
          <Route 
            exact
            path='/:title' 
            render={props => <SubNav {...props} item={this.state.item} />}
          />
        </div>
      </div>
      )
    };
  }



export default App;
