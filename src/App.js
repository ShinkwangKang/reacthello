import React, {Component} from 'react';
import './App.css';
import Todos from './component/Todos';
import Timer from './component/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer expireDate={'2019-01-30 T18:00:00+09:00'} />;
      </div>
    );
  }
}
export default App;
