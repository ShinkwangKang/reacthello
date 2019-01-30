import React, {Component} from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
  state = {
    isRolling: true,
    title: 'Welcome to React',
  };

  handleLogoClick = () => {
    if (this.state.isRolling) {
      this.setState({isRolling: false, title: 'Stop React'});
    } else {
      this.setState({isRolling: true, title: 'Moving React'});
    }
  };

  render() {
    const {isRolling, title} = this.state;

    return (
      <header className="Header">
        <div onClick={this.handleLogoClick}>
          <img src={logo} className={`App1-logo ${isRolling ? 'rotate' : ''}`} alt="logo" />
        </div>
        <h1 className="App-title">{title}</h1>
      </header>
    );
  }
}

export default Header;
