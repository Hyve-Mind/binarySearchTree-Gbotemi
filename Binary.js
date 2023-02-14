//my own methods

//build tree method
//insert method
//delete method
//count method
//inorder
//preorder
//postorder
//bfs

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.root = null;
    }
}

class Tree {
    constructor(value) {
        this.root = new Node(value);
    }

    buildTree(array) {
        let uniq = [...new Set(array)];
        if (!this.root.value) {
            this.root = new Node(uniq[0]);
        }
        for (let i = 0; i <= uniq.length; i++) {
            this.insert(uniq[i]);
        }
    }
    count() {
        let arr = this.dfsInorder()
        let count = arr.length
        return count
    }
    insert(value) {
        if (!this.root.value) {
            this.root = new Node(value);
        }
        let newNode = new Node(value);
        let insertNode = (Node) => {
            if (value < Node.value) {
                if (!Node.left) {
                    Node.left = newNode;
                }
                else {
                    insertNode(Node.left);
                }
            }
            else if (value > Node.value) {
                if (!Node.right) {
                    Node.right = newNode;
                }
                else {
                    insertNode(Node.right);
                }
            }
        }
        insertNode(this.root)
    }
    delete(value) {
        let currentArray = this.breadthFirstSearch();
        let indexOfValue = currentArray.indexOf(value);
        currentArray.splice(indexOfValue, 1);
        this.resetTree();
        this.buildTree(currentArray);
    }
    dfsPreorder(){
        let orderedArray = [];
        //DLR
        //read data first
        //Go left
        //then read data
        function checkTree(currentNode) {
            //read data first
            orderedArray.push(currentNode.value);
            //Go left
            if (currentNode.left) {
                checkTree(currentNode.left);
            }
            //go right recursively;
            if (currentNode.right) {
                checkTree(currentNode.right);
            }
        }
        checkTree(this.root);
        return orderedArray;
    }
    dfsInorder() {
        let orderedArray = [];
        //LDR
        //Go left first
        //read data
        //go right next
        function checkTree(currentNode) {
            //go left recursively;
            if (currentNode.left) {
                checkTree(currentNode.left);
            }
            //read data
            orderedArray.push(currentNode.value);
            //go right recursively;
            if (currentNode.right) {
                checkTree(currentNode.right);
            }
        }
        checkTree(this.root);
        return orderedArray;
    }
    dfsPostorder(){
        let orderedArray = [];
        //LRD
        //Go left first
        //go right next
        //read data
        function checkTree(currentNode) {
            //go left recursively;
            if (currentNode.left) {
                checkTree(currentNode.left);
            }
            //go right recursively;
            if (currentNode.right) {
                checkTree(currentNode.right);
            }
            // read data
            orderedArray.push(currentNode.value);
        }
        checkTree(this.root);
        return orderedArray;
    }
    resetTree() {
        this.root.value = undefined;
        this.root.left = null;
        this.root.right = null;
    }
    breadthFirstSearch() {
        let result = [];
        let queue = [];
        queue.push(this.root);
        while (queue.length) {
            let currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result;
    }

    min() {
        let array = this.dfsInorder();
        return array[0];
    }
    max() {
        let array = this.dfsInorder()
        return array[array.length - 1];
    }
}

let gbotemi = new Tree();
console.log(gbotemi);
