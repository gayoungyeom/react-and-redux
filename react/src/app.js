/* @jsx createElement */
import { createElement, render } from './react';

const Title = (props) => {
  return <h1>{props.children}</h1>;
};

const Item = (props) => {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
};

const vdom = (
  <p>
    <Title label="React">React 잘 만들기</Title>
    <ul>
      <Item color="red">첫 번째 아이템</Item>
      <Item color="blue">두 번째 아이템</Item>
      <Item color="green">세 번째 아이템</Item>
    </ul>
  </p>
);

render(vdom, document.querySelector('#root'));
