class Node
{
    constructor(item)
    {
        this.data=item;
        this.left=this.right=null;
    }
}
 
    let root;
    function maxDepth(node)
    {
        if (node == null)
            return 0;
        else
        {
            let lDepth = maxDepth(node.left);
            let rDepth = maxDepth(node.right);
               if (lDepth > rDepth)
                return (lDepth + 1);
             else
                return (rDepth + 1);
        }
    }

let input = [13,9,20,null,null,15,27] 
root = new Node(13);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(27);
console.log(maxDepth(root));