import React from 'react';

class TodoItem extends React.Component {
  render() {
    const {index, name, completed} = this.props;
    return (
      <li key={`todo-item-${index}`}>
        <input type="checkbox" checked={completed} onChange={() => {}} />
        {name}
      </li>
    );
  }
}

export default TodoItem;
