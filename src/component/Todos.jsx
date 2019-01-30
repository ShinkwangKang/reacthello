import React from 'react';
//import 'Todos.css';

// #2. app.js 에서 props 를 배열로 받아서 map로 돌면서 그려보는 예제
class Todos extends React.Component{

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render(){
    const{title, items}= this.props;
    return(
      <div className="Todos" style={{backgroundColor:'#ccc'}}>
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => {
            return <li key={index}><input type="checkbox" defaultChecked={item.completed}/>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export  default Todos;
