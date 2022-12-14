import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';



import {greatPlaceStyle, greatPlaceStyleHover} from './hover_style.jsx';

export default class MyGreatPlaceWithControllableHover extends Component {
  static propTypes = {
    // use hover from controllable
    hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const style = this.props.hover ? greatPlaceStyleHover : greatPlaceStyle;

    return (
       <div className="hint hint--html hint--info hint--top" style={style}>
          <div>{this.props.text}</div>
          
       </div>
    );
  }
}