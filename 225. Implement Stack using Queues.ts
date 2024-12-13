class DoublyListNode {
    val: number
    next: DoublyListNode | null
    prev: DoublyListNode | null
    constructor(prev?: DoublyListNode | null, val?: number, next?: DoublyListNode | null) {
        this.prev = (prev === undefined ? null : prev)
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.64 MB, less than 12.45%
class MyStack {
    head: DoublyListNode | null
    tail: DoublyListNode | null

    constructor() {
        this.head = null
        this.tail = null
    }

    push(x: number): void {
        if (!this.head) {
            this.head = new DoublyListNode(null, x)
            this.tail = this.head
        } else {
            this.tail = new DoublyListNode(this.tail, x)
        }
    }

    pop(): number {
        if (!this.tail) return -1

        const val = this.tail.val

        this.tail = this.tail.prev
        if (this.tail) this.tail.next = null

        return val
    }

    top(): number {
        if (!this.tail) return -1
        return this.tail.val
    }

    empty(): boolean {
        return this.tail == null
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */