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

  state = {
    data: [
      {name: '자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8', completed: false},
      {name: 'React 개발에 필요한 환경을 구축한다.', completed: true},
      {name: '개발편의를 위한 Intelli J를 익힌다.', completed: true},
      {name: '기본적인 Git사용법을 익힌다.', completed: true},
      {name: 'PR코드 리뷰를 응용한 개발 프로세스를 익힌다.', completed: false},
      {name: 'React로 간단한 노트앱을 만들어본다.', completed: false},
    ],
    isUnmount: false,
  };

  render() {
    return (
      <div className="App">
        <ControlledForm />
        <MarkEditor />
        <Header />
        <Toggle />
        {!this.state.isUnmount && <Todos title={'강의목표'} items={this.state.data} />}
      </div>
    );
  }
}
export default App;
