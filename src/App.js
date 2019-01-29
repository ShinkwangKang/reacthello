import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LectureGoalList from './component/LectureGoalList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" height={10} />
          <p>Welcome to React</p>
        </header>
        /* 별도 작성한 LectureGoalList 컴포넌트 호출 */
        <LectureGoalList />
      </div>
    );
  }
}

export default App;
