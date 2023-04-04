class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)

        this.tail.next = newNode
        this.tail = newNode
        this.length++

        return this
    }

    prepend(value) {
        const newNode = new Node(value)

        newNode.next = this.head
        this.head = newNode
        this.length++

        return this
    }

    printList() {
        const array = []
        let currentNode = this.head

        while (currentNode != null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }

        return array.join(' --> ')
    }

    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head

        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }

        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next

        leader.next = newNode
        newNode.next = holdingPointer
        this.length++

        return this
    }

    remove(index) {
        // const beforeCurrentNode = this.traverseToIndex(index - 1)
        // const afterCurrentNode = this.traverseToIndex(index + 1)
        // beforeCurrentNode.next = afterCurrentNode

        const leader = this.traverseToIndex(index - 1)
        const unwanted = leader.next

        leader.next = unwanted.next

        this.length--
    }
}

export const Main = () => {
    const myLinkedList = new LinkedList(22)
    myLinkedList.append(2)
    myLinkedList.append(77)
    myLinkedList.append(6)
    myLinkedList.append(43)
    myLinkedList.append(76)
    myLinkedList.append(89)
    myLinkedList.remove(1)
    console.log('PrintList:', myLinkedList.printList())
}
