class linkedList {
    constructor (head = null, tail = null) {
        this.head = head;
        this.tail = tail;
        this.append = function (value) {
            let newNode = new node;
            newNode.value = value;
            if (this.head == null) {
                this.head = newNode;
            }
            else {
                if (this.tail !== null) {
                    let currentTail = this.tail;
                    currentTail.setNext(newNode);
                    this.tail = newNode;
                }
                else {
                    this.tail = newNode;
                    let currentHead = this.head;
                    currentHead.setNext(newNode);
                };
            };
        };

        this.prepend = function (value) {
            let newNode = new node;
            newNode.value = value;
            if (this.head == null) {
                this.head = newNode;
            }
            else {
                let currentHead = this.head;
                newNode.setNext(currentHead);
                if (this.tail == null) {
                    currentHead = this.tail;
                    this.head = newNode;
                }
                else {
                    this.head = newNode;
                };
            };
        };

        this.at = function (index) {
            function indexNodes (node, indexNum = 0) {
                if (indexNum === index) {
                    console.log(node);
                    return node;
                };
                let theNext = node.nextNode;
                indexNum++;
                indexNodes (theNext, indexNum);
            };
            let indexStart = this.head;
            indexNodes(indexStart);
        };

        this.pop = function () {
            return this.tail;
        };

        this.contains = function (value) {
            function indexNodes (node) {
                if (node.value == value) {
                    console.log(true);
                    return true;
                }
                else if (node.nextNode === null) {
                    console.log(false);
                    return false;
                };
                let theNext = node.nextNode;
                indexNodes (theNext);
            };
            let indexStart = this.head;
            indexNodes(indexStart);
        };

        this.find = function (value) {
            function indexNodes (node, indexNum = 0) {
                if (node.value == value) {
                    console.log(indexNum);
                    return indexNum;
                }
                else if (node.nextNode === null) {
                    console.log(null);
                    return null;
                };
                let theNext = node.nextNode;
                indexNum++;
                indexNodes (theNext, indexNum);
            };
            let indexStart = this.head;
            indexNodes(indexStart);
        };

        this.toString = function () {
            let string = "";
            function indexNodes (node) {
                if (node.nextNode === null) {
                    string += "( " + node.value + " ) -> null";
                    console.log(string);
                    return string;
                };
                string += "( " + node.value + " ) -> ";
                let theNext = node.nextNode;
                indexNodes (theNext);
            };
            let indexStart = this.head;
            indexNodes(indexStart);
        };
    };
};

class node {
    constructor (value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
        this.setNext = function (nexty) {
            this.nextNode = nexty;
        };
    };
};