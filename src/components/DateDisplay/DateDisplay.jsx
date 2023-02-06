import { formatDistanceToNowStrict } from 'date-fns';
import React, { Component } from 'react';

export default class DateDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeValue: DateDisplay.formatTime(props.time),
    };
  }

  static formatTime(time) {
    return formatDistanceToNowStrict(time, { addSuffix: true, roundingMethod: 'ceil' });
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ timeValue: DateDisplay.formatTime(this.props.time) });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <span className="created">{`created ${this.state.timeValue}`}</span>;
  }
}
