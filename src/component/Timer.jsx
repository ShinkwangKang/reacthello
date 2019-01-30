import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
//import './Timer.css';

moment.locale('ko');

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mtNow: moment(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        mtNow: moment(),
      });
    }, 1000);
  }

  render() {
    const {expireDate} = this.props;
    const {mtNow} = this.state;
    const mtExpire = moment(expireDate);

    console.log(expireDate, mtNow.format('a hh:mm'));

    return (
      <div className="Timer">
        <div>현재시간은 {mtNow.format('a hh:mm')}</div>
        <div>금일 강의 종료까지 {mtExpire.fromNow()}분 남았습니다.</div>
      </div>
    );
  }
}

export default Timer;
