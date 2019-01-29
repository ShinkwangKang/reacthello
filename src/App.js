import React, {Component} from 'react';
import './App.css';
import Todos from './component/Todos';

// 데이터 set
const data = [
  {name: '자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8', completed: false},
  {name: 'React 개발에 필요한 환경을 구축한다.', completed: true},
  {name: '개발편의를 위한 Intelli J를 익힌다.', completed: true},
  {name: '기본적인 Git사용법을 익힌다.', completed: true},
  {name: 'PR코드 리뷰를 응용한 개발 프로세스를 익힌다.', completed: false},
  {name: 'React로 간단한 노트앱을 만들어본다.', completed: false},
];

// 컴포넌트를 호출하여 데이터를 넘김.
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos title={'강의목표'} items={data} />
      </div>
    );
  }
}

export default App;
