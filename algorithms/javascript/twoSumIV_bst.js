/** Two Sum IV - Input is a BST
 * 
 * Given the root of a Binary Search Tree and a target number k,
 * return true if there exists TWO elements in the BST such that
 * their sum is equal to the given target.
 * === Constraint ===
 * The number of nodes in the tree is in the range [1, 104].
 * -104 <= Node.val <= 104
 * root is guaranteed to be a valid binary search tree.
 * -105 <= k <= 105
 */

const twoSumBST = (root, target) => {

    if(!root) return false;

    // root is guaranteed, use a stack to help traverse and store values in map
    let set = new Set(); 
    let stack = [root];

    // Continue as stack has values stored through pre-order traversal
    while(stack.length) {
        // store current node that is popped
        const node = stack.pop();
        // if the Set or Map has the compliment value of the target - current node
        if(set.has(target - node.val)) return true;
        // otherwise add the current node.value to the set
        set.add(node.val);
        console.log(node.val);
        // preOrder Depth First Search
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right);
    }
    // Otherwise sum does not exist in BST.
    return false;
} 




// Testing BSTs
let root = [5, 3, 6, 2, 4, null, 7]; 
// Targets
let k = 9;
let k2 = 28;

console.time();
console.log(twoSumBST(root, k)); // expected: true
console.timeEnd();

console.time();
console.log(twoSumBST(root, k2)); // expected: false
console.timeEnd();