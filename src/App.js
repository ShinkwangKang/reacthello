import React, {Component} from 'react';
import './App.css';
import Todos from './component/Todos';
import Timer from './component/Timer';
import Toggle from './component/Toggle';
import Header from './component/Header';
import MarkEditor from './component/MarkEditor';
import ControlledForm from './component/ControlledForm';

class App extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      isTimeOver: false,
    };
  }


  // 3일차 callback 연습
  handleExpiredTimer(arg) {
    // 종료되었음 callback 받으면 timer 종료
    console.log('타임 오버:', arg);
    // Timer을 해제 하려면 render 를 새로 해야 하는데,
    // render를 새로 하려면 상태를 변경 하면 된다.
    this.setState = {
      isTimeOver: true,
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.isTimeOver && (
          <Timer expireDate={'2019-01-30T15:21:00+09:00'} onExpired={this.handleExpiredTimer} />
        )}
      </div>
    );
  }
  */

  render() {
    return (
      <div className="App">
        <ControlledForm />
        <MarkEditor />
        <Header />
        <Toggle />
      </div>
    );
  }
}
export default App;
