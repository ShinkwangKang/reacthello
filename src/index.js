import React from 'react';
import ReactDOM from 'react-dom';

const FunctionalComponent = () => (
  <div>
    <h1>함수형 컴포넌트</h1>
    <h2>현재 시간은? {new Date().toLocaleTimeString()}.</h2>
  </div>
);

class StatelessComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>상태 없는 컴포넌트</h1>
        <h2>현재 시간은? {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
// 상태있는 컴포넌트
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date().toLocaleTimeString(),
    };

    // 되는 코드
    setTimeout(() => {
      this.setState({ow: new Date().toLocaleTimeString()});
    }, 5000);

    /*
    // 안되는 코드
    setTimeout(function() {
      console.log(this);
      this.setState({ow: new Date().toLocaleTimeString()});
    }, 5000);
    */
  }
  render() {
    return (
      <div>
        <h1>상태 있는 컴포넌트</h1>
        <h2>현재 시간은? {this.state.now}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <FunctionalComponent />
    <StatelessComponent />
    <StatefulComponent />
  </div>,
  document.getElementById('root')
);
