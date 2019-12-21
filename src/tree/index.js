import Node from './node';

export default class Tree {
  root = null;

  constructor(data = {}) {
    this._initTree(data);
  }

  _initTree(data) {
    this.root = new Node(data);
    data.children.forEach(item => {
      this._buildTree(item, this.root);
    });
  }

  _buildTree(node, parent) {
    const currentNode = new Node(node);
    if (parent) {
      currentNode.parent = parent;
      parent.addChild(currentNode);
    }
    
    if (node.children) {
      node.children.forEach(item => {
        this._buildTree(item, currentNode);
      })
    }
  }

  getNodeById(id, root) {
    let node = null;
    this.traverseDF((n)=> {
      if(n.id === id) {
        node = n;
        return true;
      }
    }, root);
    return node;
  }

  traverseDF = (cb, parent) => {
    let pNode = parent || this.root
    if (!pNode) return;
    const recurse = (node) => {
      if(cb(node)) return;
      if (node.children) {
        for(let i = 0; i < node.children.length; i++) {
          recurse(node.children[i]);
        }
      }
    }
    recurse(pNode);
  }

  addRow = (data) => {
    this._buildTree(data, this.root);
  }

}