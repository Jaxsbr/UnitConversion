import React, {Component} from 'react';
import Header from './header/header';
import Values from './values/values';

const over = `App-logo over`
const under = `Gear-logo under`

class App extends Component {
  state = {
    values: []
  }

  // todo: provide url
  getValues() {
    debugger;
    fetch('')
    .then(res => res.json())
    .then((data) => {
      this.setState({ values: data })
    })
    .catch(console.log)
  }

  render() {  
    return (      
       //<Header></Header>
       <Values values={this.state.values }/>       
    )
  }
}

export default App;
