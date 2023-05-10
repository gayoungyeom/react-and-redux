export class Component {
  constructor(props) {
    this.props = props;
  }
}

export function createDOM(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([key, value]) =>
    element.setAttribute(key, value)
  );
  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}

export function createElement(tag, props, ...children) {
  props ||= {};

  if (typeof tag === 'function') {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));
      return instance.render();
    } else {
      if (children.length > 0) {
        return tag(makeProps(props, children));
      } else {
        return tag(props);
      }
    }
  } else {
    return { tag, props, children };
  }
}

// export function render(vdom, container) {
//   container.appendChild(createDOM(vdom));
// }

export const render = (function () {
  let prevDom = null;

  return function (vdom, container) {
    //최초 실행 시
    if (prevDom === null) {
      prevDom = vdom;
    }

    //이전 UI가 존재 -> 새로 들어온 DOM 객체와 비교

    container.appendChild(createDOM(vdom));
  };
})();
