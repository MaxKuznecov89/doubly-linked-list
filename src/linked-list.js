const Node = require('./node');

class LinkedList {
    constructor() {
        this.arr = [];
        this.length = this.arr.length;
        this._tail;
        this._head;

    }

    append(data) {

        let instance = new Node(data);
        this.arr.push(instance);
        this.length = this.arr.length;
        this._tail = this.arr[this.arr.length -1];
        this._head = this.arr[0];
        return this;
    }

    head() {
        if(this.arr.length == 0)return null;
        return this._head.data
    }

    tail() {
        if(this.arr.length == 0)return null;
        return this._tail.data
    }

    at(index) {
        return this.arr[index].data
    }

    insertAt(index, data) {
        let instance = [new Node(data)];
        let arrStart = this.arr.slice(0,index);
        let arrEnd = this.arr.slice(index);
        let arrRess = arrStart.concat(instance,arrEnd);
        this.arr = arrRess;
        this.length = this.arr.length;
        this._tail = this.arr[this.arr.length -1];
        this._head = this.arr[0];

    }

    isEmpty() {
        return this.arr.length <= 0 ? true : false;
    }

    clear() {
        this.arr = [];
        this.length = this.arr.length;
        return this;


    }

    deleteAt(index) {

        this.arr.splice(index,1);
        this.length = this.arr.length;
        this._tail = this.arr[this.arr.length -1];
        this._head = this.arr[0];
        return this;

    }

    reverse() {
        this.arr.reverse();
        this._tail = this.arr[this.arr.length -1];
        this._head = this.arr[0];
        return this;

    }

    indexOf(data) {
        let res = - 1;
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i].data == data){
                return i
            }};
        return res;



    }
}

module.exports = LinkedList;