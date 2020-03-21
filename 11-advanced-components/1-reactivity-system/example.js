let data = { price: 5, quantity: 2 }
let target = null

// Dependency Class which implements the standard programming observer pattern
class Dep {
  constructor () {
    this.subscribers = [] // The targets that are dependent, and should be
                          // run when notify() is called.
  }
  depend() {  // Remember the target in case we want to run it later
    if (target && !this.subscribers.includes(target)) {
      // Only if there is a target & it's not already subscribed
      this.subscribers.push(target)
    }
  }
  notify() {  // function that runs all the things we’ve recorded
    this.subscribers.forEach(sub => sub())
  }
}

// Go through each of our data properties
Object.keys(data).forEach(key => {
  let internalValue = data[key]

  // Each property gets a dependency instance
  const dep = new Dep()

  Object.defineProperty(data, key, {
    get() {
      dep.depend() // <-- Remember the target we're running
      return internalValue
    },
    set(newVal) {
      internalValue = newVal
      dep.notify() // <-- Re-run stored functions
    }
  })
})

function watcher(myFunc) {
  target = myFunc
  target()
  target = null
}

// Functions that need to be watched for updates with a watcher
watcher(() => {
  total = data.price * data.quantity
})

watcher(() => {
  salePrice = data.price * 0.9
})