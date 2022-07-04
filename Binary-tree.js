"use strict";

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Binarytree{
    constructor(){
        this.root = null;
    }

    add(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while(currentNode){
            if(newNode.value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    return;
                }
            currentNode = currentNode.left;
            }else{
                if(!currentNode.right){
                    currentNode.right = newNode;
                    return;
                }
            currentNode = currentNode.right;
            }
        }
    }
}


const MyTree = new Binarytree();
MyTree.add(8);
MyTree.add(7);
MyTree.add(9);
MyTree.add(10);
MyTree.add(5);
MyTree.add(14);
MyTree.add(9);
MyTree.add(17);
MyTree.add(2);
MyTree.add(11);
MyTree.add(12);
console.log(MyTree);
