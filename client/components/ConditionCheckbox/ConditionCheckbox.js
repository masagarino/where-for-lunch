import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox/Checkbox';
import styles from './ConditionCheckbox.css';

export default class ConditionCheckbox extends PureComponent {
  constructor() {
    super();
    this.state = {
      allChecked: false,
      checkedCount: 0,
      arr: [],
      options: [
        { value: '1', text: 'Affordable Class' },
        { value: '2', text: 'Middle Class' },
        { value: '3', text: 'High Class' },
        { value: '4', text: 'Luxurious Class' },
      ],
    };
  }

  static propTypes = {
    price: PropTypes.object,
    action: PropTypes.func,
  };

  handleOnBlurAction = (e) => {
    const arr = this.state.arr;
    if (e.target.checked) {
      if (arr.indexOf(e.target.value) === -1) {
        arr.push(e.target.value);
      }
    } else {
      const index = arr.indexOf(e.target.value);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
    this.props.action(arr.join());
  }

  render() {
    const options = this.state.options.map((option, i) => {
      return (
        <Checkbox onBlurAction={this.handleOnBlurAction} name={option.value} value={option.value} key={i} text={option.text}></Checkbox>
      );
    });
    return (
      <div className={styles.root}>
        <form>{options}</form>
      </div>
    );
  }
}
