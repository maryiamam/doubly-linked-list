const Node = require('./node');

class LinkedList {

constructor() {

    this.length = 0;
    this._head = new Node(null, null, null);
    this._tail = new Node(null, null, null);
}

append(data) {
    var n = new Node(data, null, null);
    if (this.isEmpty()) {
        this._head.data = n.data;
        this._tail.data = n.data;
        this._head.next = this._tail;
        this._tail.prev = this._head;
    } else {
        if (this.length == 1) {
            this._tail.data = data;
        } else {
            var nn = new Node(this._tail.data, this._tail.prev, n);
            this._tail.prev.next = nn;
            this._tail = n;
            this._tail.prev = nn;
        }
    }
    this.length++;
    return this;
}

head() {
        return this._head.data;
}

tail() {

        return this._tail.data;

}

AT(index) {

        var cn = this._head, co = 0;

        while (co < index) {
            cn = cn.next;
            co++;
        }
        return cn;

}

at(index) {

        var cn = this._head, co = 0;

        while (co < index) {
            cn = cn.next;
            co++;
        }
        return cn.data;
}

    insertAt(index, data) {
      
            var nn = new Node(data, null, null);
            if (index == 0) {//в начало
                if (this.isEmpty()) {//в начало пустого списка
                    this._head = nn;
                    this._tail = nn;
                } else {//в начало непустого списка
                    nn.next = this._head;
                    this._head.prev = nn;
                }

            } else //не в начало
                if (this.isEmpty()) {//не в начало пустого списка
                    console.log("You are trying to insert smth in " + index + " position of the empty list!");
                    return this;
                } else {
                    if (index == this.length) { //в конец непустого списка
                        this.append(data);
                    }  else {
                            //не в конец и не в начало непустого списка
                            var cn = this.AT(index);
                            nn.next = cn;
                            nn.prev = cn.prev;
                            nn.prev.next = nn;
                            cn.prev = nn;
                        }
                }
            this.length++;
            return this;
}

isEmpty() {
    if (this.length == 0) {
        return true;
    }
    return false;
}

clear() {
    this.length = 0;
    this._head = new Node(null, null, null);
    this._tail = new Node(null, null, null);
    return this;
}

deleteAt(index) {
        var cn = this._head, l = this.length;
        if (this.isEmpty() || index < 0 || index >= l) {
            console.log("Invalid index");
            return this;
        }
        if (index == 0) {
            if (l == 1) {
                list.clear();
            } else {
				cn.next.prev = null;
                this._head = cn.next;
                //this._head.prev = null;
            }
        } else {
            if (index == l - 1) {
                this._tail = this._tail.prev;
                this._tail.next = null;
            } else {
                cn = this.AT(index);
                cn.prev.next = cn.next;
                cn.next.prev = cn.prev;
            }
        }
        this.length--;
        return this;
}

reverse() {

    var en = this._tail;
    var bn = this._head;
    for (var i = 0; i < this.length / 2; i++) {
        var tdata = en.data;
        en.data = bn.data;
        bn.data = tdata;
        en = en.prev;
        bn = bn.next;
    }
    return this;
}

indexOf(data) {

    var cn = this._head;
    for (var i = 0; i < this.length; i++) {
        if (cn.data == data) {
            return i;
        }
        cn = this._head.next;
    }
    return -1;
}
}


module.exports = LinkedList;
