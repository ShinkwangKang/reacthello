import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 1일차
/*
ReactDOM.render(<App />, document.getElementById('root'));
*/
/*
const MyElem = <p> 이렇게 써도됨? </p>;
const MyCom = () => <p> 이렇게 써도됨? </p>;

console.log(MyCom);
console.log(MyElem, MyCom(), <myCom />);

class MyKlassCom extends React.Component() {
  render() {
    return (
      <di>
        <p>클래스형 컴포넌트</p>
        <MyCom />
      </di>
    );
  }
}
console.log(MyKlassCom);
console.log(<MyKlassCom />);
*/

// 2일차
// #1
//const MyElem = <p> 이렇게 써도됨? </p>;
//const MyCom = () => <p> 이렇게 써도됨? </p>;
//console.log(MyElem, MyCom());

// #2
/*
function tick() {
  console.log('tick', this);
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

const nTimer = setInterval(tick, 100);

const nTimer2 = setTimeout(function() {
  clearInterval(nTimer);
}, 5000);
console.log(nTimer, nTimer2);
*/
