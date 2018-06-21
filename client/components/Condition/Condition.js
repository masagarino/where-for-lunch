import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Checkbox from 'components/Checkbox/Checkbox';
import styles from './Condition.css';

export default class Condition extends PureComponent {
  constructor() {
    super();
    this.state = {
      arr: [],
      options: [
        { value: '1', text: 'Affordable  ' },
        { value: '2', text: 'Middle  ' },
        { value: '3', text: 'High  ' },
        { value: '4', text: 'Luxurious  ' },
      ],
    };
  }

  static propTypes = {
    condition: PropTypes.object,
    actionChange: PropTypes.func,
    action: PropTypes.func,
  };

  handleOnBlurPriceAction = (e) => {
    const { arr } = this.state;
    const { value, checked } = e.target;
    if (checked) {
      if (arr.indexOf(value) === -1) {
        arr.push(value);
      }
    } else {
      const index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
    this.props.actionChange(arr.join());

    return this.setState({ arr });
  }

  handleOnBlurAction = (e) => {
    this.props.action(e.target.value);
  }

  render() {
    const { condition: { radius } } = this.props;
    const options = this.state.options.map((option, i) => {
      return (
        <Checkbox onBlurAction={this.handleOnBlurPriceAction} name={option.value} value={option.value} key={i} text={option.text}></Checkbox>
      );
    });
    return (
      <div className={styles.root}>
        {options}
        <span>radius:</span>
        <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
        <span>meters</span>
      </div>
    );
  }
}
