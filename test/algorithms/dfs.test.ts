import BinaryNode from 'src/data-structures/nodes/BinaryNode';
import { preOrder, inOrder, postOrder } from 'src/algorithms/dfs';

let nodes: Array<BinaryNode<number>>;
const root: number = 5;

beforeAll(() => {
  nodes = new Array<BinaryNode<number>>(11);

  for (let i = 0; i < nodes.length; i++) {
    nodes[i] = new BinaryNode(i + 1);
  }

  nodes[root].setLeftChild(nodes[1]);
  nodes[root].setRightChild(nodes[2]);

  nodes[1].setLeftChild(nodes[3]);
  nodes[1].setRightChild(nodes[0]);

  nodes[3].setLeftChild(nodes[6]);
  nodes[3].setRightChild(nodes[7]);

  nodes[0].setLeftChild(nodes[10]);

  nodes[2].setLeftChild(nodes[4]);
  nodes[2].setRightChild(nodes[8]);

  nodes[4].setRightChild(nodes[9]);
});

test('preOrder', () => {
  const output: Array<number> = [];
  preOrder(nodes[root], output);

  expect(output).toEqual([6, 2, 4, 7, 8, 1, 11, 3, 5, 10, 9]);
});

test('inOrder', () => {
  const output: Array<number> = [];
  inOrder(nodes[root], output);

  expect(output).toEqual([7, 4, 8, 2, 11, 1, 6, 5, 10, 3, 9]);
});

test('postOrder', () => {
  const output: Array<number> = [];
  postOrder(nodes[root], output);

  expect(output).toEqual([7, 8, 4, 11, 1, 2, 10, 5, 9, 3, 6]);
});
