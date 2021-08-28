import BinaryNode from '../../src/BinaryNode';
import { preOrder, inOrder, postOrder } from '../../src/algorithms/dfs';

describe('[src/algorithms/dfs]', () => {
  let nodes: Array<BinaryNode<number>>;
  const root: number = 5;

  beforeAll(() => {
    nodes = new Array<BinaryNode<number>>(11);

    for (let i = 0; i < nodes.length; i++) {
      nodes[i] = new BinaryNode(i + 1);
    }

    nodes[root].setLeft(nodes[1]);
    nodes[root].setRight(nodes[2]);

    nodes[1].setLeft(nodes[3]);
    nodes[1].setRight(nodes[0]);

    nodes[3].setLeft(nodes[6]);
    nodes[3].setRight(nodes[7]);

    nodes[0].setLeft(nodes[10]);

    nodes[2].setLeft(nodes[4]);
    nodes[2].setRight(nodes[8]);

    nodes[4].setRight(nodes[9]);
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
});
