//   Definition for node.
// class Node {
//     val: number
//     children: Node[]
//     constructor(val?: number) {
//         this.val = (val===undefined ? 0 : val)
//         this.children = []
//     }
// }


 function preorder(root: Node | null): number[] {
    return preorderWithResult(root, []);
};

function preorderWithResult(node: Node | null, result: number[]): number[] {
    if (node == null) {
        return result;
    }

    result.push(node.val)

    if (node.children.length === 0) {
        return result;
    }
    for (let i = 0; i < node.children.length; i++) {
        result = preorderWithResult(node.children[i], result)
    }
    return result;
}
