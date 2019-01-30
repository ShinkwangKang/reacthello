import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: '',
    };
  }

  // submit 한다.
  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  handleInputChange = ({target}) => {
    this.setState({
      value: '입력값을 서버로 전송합니다.: ' + target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input defaultValue="" type="text" onChange={this.handleInputChange} />
        </label>
        <input type="submit" Value="Submit" />
      </form>
    );
  }
}

export default ControlledForm;
