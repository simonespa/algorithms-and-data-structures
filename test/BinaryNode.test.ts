import BinaryNode from 'src/BinaryNode';

describe('when a new object is created', () => {
  it('should set the value with the one passed in the constructor and set the "visited" flag to true when the value is read', () => {
    const expectedValue = 'node';
    const node: BinaryNode<string> = new BinaryNode(expectedValue);

    // it is set to false by default
    expect(node.isVisited()).toBe(false);
    // when is read for the first time
    expect(node.getValue()).toBe(expectedValue);
    // it is set to true
    expect(node.isVisited()).toBe(true);
    // this proves that the value isn't removed and the flag remains true
    expect(node.getValue()).toBe(expectedValue);
    expect(node.isVisited()).toBe(true);
  });
});

describe('the left child', () => {
  it('should set the left child and return the same one', () => {
    const left: BinaryNode<string> = new BinaryNode('left');
    const right: BinaryNode<string> = new BinaryNode('right');
    const node: BinaryNode<string> = new BinaryNode('node');
    node.setLeft(left);

    expect(node.getLeft()).toBe(left);
    expect(node.getLeft()).not.toBe(right);

    // this verify that the child is not removed
    expect(node.getLeft()).toBe(left);
  });
});

describe('the right child', () => {
  it('should set the right child and return the same one', () => {
    const left: BinaryNode<string> = new BinaryNode('left');
    const right: BinaryNode<string> = new BinaryNode('right');
    const node: BinaryNode<string> = new BinaryNode('node');
    node.setRight(right);

    expect(node.getRight()).toBe(right);
    expect(node.getRight()).not.toBe(left);

    // this verify that the child is not removed
    expect(node.getRight()).toBe(right);
  });
});
