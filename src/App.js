import React, {Component} from 'react';
import './App.css';
import Todos from './component/Todos';
import Timer from './component/Timer';

class App extends Component {
  handleExpiredTimer(arg) {
    console.log('타이머 종료!!!!!!!!!!!!!!!!!!!!!!!!', arg);
  }
  render() {
    return (
      <div className="App">
        <Timer expireDate={'2019-01-30T14:02:00+09:00'} onExpired={this.handleExpiredTimer} />
      </div>
    );
  }
}
export default App;
