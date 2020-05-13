let ascId = 0;
const getAscId = () => ascId++;

export default class Node {
  parent;
  children = [];
  id;

  // data property
  type = '';
  style = '';
  className = '';

  constructor({type, style, className = '', url = '', text = ''}) {
    this.type = type;
    this.style = style;
    this.className = className;
    this.url = url;
    this.text = text;
    this.id = getAscId();
  }

  addChild(data) {
    if (data instanceof Node) {
      this.children.push(data);
    } else {
      this.children.push(new Node(data));
    }
   
  }
}