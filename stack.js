let stack = new Stack();
class Stack {
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return !this.items.length;
    } //是否空栈

    push(e){
        this.items.push(e);
    }//入栈

    pull(){
        return this.items.pop();
    }//出栈

    print(){
        console.log(this.items.toString());
    }                               //打印栈
}

let queue = new Queue();
class Queue {
    constructor(){
        this.items = [];
    }
    push(e){
        this.items.push(e);
    }                                //入队

    bpull(){
        return this.items.shift();
    }                               //出队
    print(){
        console.log(this.items.toString());
    }                               //打印队
}
<!--
两栈实现一队列
假设两个栈 a 和b，最初的时候，a,b都为空栈。
假设栈 a 为提供入队列的功能，栈 b 提供出队列的功能。
入队列：
1，如果栈 b 为空，直接将元素压入栈a 。
2，如果栈 b 不为空，首先依次弹出栈 b 的元素，压入栈 a 中，再将要压入的元素压入栈 a 。
出队列：
1，如果栈 a 为空，直接弹出栈 b 的栈顶元素（如果栈b也为空，抛出异常）。
2，如果栈 a 不为空，则依次弹出栈 a 的元素，放入栈 b 中，再弹出栈 b 的栈顶元素。-->


let astack = new Stack();
let bstack = new Stack();
 class squeue {
     // 入队
     spull(e) {
                                //如果栈b为空，则直接插入a栈
         if(bstack.isEmpty){
             astack.push(e);
         }
                                //如果栈b不为空，则先将b中的元素插入a栈中
         else {
             while (!bstack.isEmpty) {
                 astack.push(bstack.pull());
             }
                                 //再将元素插入a栈中
             astack.push(e);
         }

     }
             //出队
     spull() {
         <!--
         1.如果栈a为空，直接弹出栈b的栈顶元素（如果栈b也为空，空栈）。
         2.如果栈a不为空，依次将栈a的元素放入栈b中，再弹出栈b的栈顶元素。
          -->
         if (astack.isEmpty){
             if (bstack.isEmpty){
                 alert("empty");
             }
             else {
                 bstack.pull();
             }
         }
         else {
             while(!astack.isEmpty){
                 bstack.push(astack.pull());
             }
             bstack.pull();
         }
     }
 }







