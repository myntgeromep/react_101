class Stack {
    constructor() {
        this.stack = []
    }

    push(item) {
        this.stack.push(item)
    }

    pop() {
        if (this.stack.length < 1) {
            console.log("Stack is currently empty")
        } 
        return this.stack.pop()
    }

    check() {
        console.log(this.stack)
    }
}

const my_stack = new Stack()
my_stack.push('Mazda MX-5')
my_stack.check()
my_stack.push('Porsche 911')
my_stack.push('Alpine A110')
my_stack.check()
my_stack.pop()
my_stack.check()
my_stack.pop()
my_stack.pop()
my_stack.pop()