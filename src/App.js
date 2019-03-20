import React, { Component } from 'react';
import Toolbar from './COMPONENT/toolbar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <main style={{margin:'65px'}}>
          <p>this is page</p>
        </main>
      </div>
    );
  }
}

export default App;
