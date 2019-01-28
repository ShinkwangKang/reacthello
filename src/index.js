import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/*
const     MyElem = <p> 이렇게 써도됨? </p>;

const      MyCom = () => <p> 이렇게 써도됨? </p>;



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
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
