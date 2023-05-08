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

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}
