class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
        this.array = []
    }

    enqueue(value) {
        const node = new Node(value)

        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }

        this.length++

        return this
    }

    peek() {
        return this.first
    }

    dequeue() {
        if (!this.first) {
            return null
        }
        if (this.first === this.last) {
            this.last = null
        }

        this.first = this.first.next

        this.length--

        return this
    }
}

export const Main = () => {
    const myQueue = new Queue()
    console.log(myQueue.enqueue('A'))
    console.log(myQueue.enqueue('B'))
    console.log(myQueue.enqueue('C'))
    console.log(myQueue.peek())
    console.log(myQueue.dequeue())
    console.log(myQueue.dequeue())
    console.log(myQueue.dequeue())
    console.log(myQueue)
}
