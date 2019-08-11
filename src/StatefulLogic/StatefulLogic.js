import React, { Component } from 'react';

/*
  Render-props можно использовать для вынесения стейтфул логики

  Напишите компонент, который будет добавлять тултип к кнопке.
  Пусть тултип будет обычным `div`

  Пусть на тултипе будет написано "Hello, i'm Tooltip"

  Укажите у тултипа аттрибут `data-testid="tooltip"`

  Кнопка должна получать onClick коллбек из компонента-обёртки
*/

export const WithTooltip = props => {
  class WithTooltip extends React.Component {
    state = { hasTooltip: false };

    onClickHandler = () => {
      this.setState({ hasTooltip: !this.state.hasTooltip });
    };

    render() {
      const { children } = props;

      return (
        <React.Fragment>
          {this.state.hasTooltip && (
            <div data-testid="tooltip">Hello, i'm Tooltip</div>
          )}
          {children(this.onClickHandler)}
        </React.Fragment>
      );
    }
  }
  return <WithTooltip />;
};
