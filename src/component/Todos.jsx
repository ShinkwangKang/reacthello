import React from 'react';
import TodoItem from './TodoItem';
//import 'Todos.css';

// #2. app.js 에서 props 를 배열로 받아서 map로 돌면서 그려보는 예제
class Todos extends React.Component {
  constructor(props) {
    super(props);

    // this를 재할당. 현재 표준방법 1
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleTitleClick() {
    console.log('click', this);
  }

  render() {
    const {title, items} = this.props;
    return (
      <div className="Todos" style={{backgroundColor: '#ccc'}}>
        <h2 onClick={() => this.handleTitleClick()}>{title}</h2>
        <ul>
          {items.map((item, index) => {
            const {name, completed} = item;
            return (
              <li key={`todo-item-${index}`}>
                <input type="checkbox" Checked={item.completed} />
                {item.name}
              </li>
            );
          })}

          {items.map((item, index) => {
            return <TodoItem />;
          })}
        </ul>
      </div>
    );
  }
}
export default Todos;
