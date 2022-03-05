class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}
 
// Method returns maximum sum possible
// from subtrees rooted at grandChildrens
// of node 'node'
function sumOfGrandChildren(node, mp)
{
    let sum = 0;
     
    // Call for children of left child
    // only if it is not NULL
    if (node.left!=null)
        sum += getMaxSumUtil(node.left.left, mp) + getMaxSumUtil(node.left.right, mp);
 
    // Call for children of right child
    // only if it is not NULL
    if (node.right!=null)
        sum += getMaxSumUtil(node.right.left, mp) + getMaxSumUtil(node.right.right, mp);
    return sum;
}
 
// Utility method to return maximum
// sum rooted at node 'node'
function getMaxSumUtil(node, mp)
{
    if (node == null)
        return 0;
 
    // If node is already processed then return
    // calculated value from map
    if (mp.has(node))
        return mp.get(node);
 
    // Take current node value and call for
    // all grand children
    let incl = node.data + sumOfGrandChildren(node, mp);
 
    // Don't take current node value and call
    // for all children
    let excl = getMaxSumUtil(node.left, mp) + getMaxSumUtil(node.right, mp);
 
    // Choose maximum from both above
    // calls and store that in map
    mp.set(node,Math.max(incl, excl));
 
    return mp.get(node);
}
 
// Returns maximum sum from subset of nodes
// of binary tree under given constraints
function getMaxSum(node)
{
    if (node == null)
        return 0;
         
    let mp = new Map();
    return getMaxSumUtil(node, mp);
}
 
// Driver code
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);
root.left.left = new Node(1);   
 
console.log(getMaxSum(root));