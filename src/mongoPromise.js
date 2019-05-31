export default class MongoPromise {
  constructor(execFn) {
    this.thenables = []
    this.onError = () => {}
    this.allCall = false

    this.resolveFunc = this.resolveFunc.bind(this)
    this.rejectFunc = this.rejectFunc.bind(this)
    this.onError = this.onError.bind(this)
    execFn(this.resolveFunc, this.rejectFunc)
  }

  then(resolve) {
    this.thenables.push(resolve)
    return this
  }

  catch(err) {
    this.onError = err
    return this
  }

  resolveFunc(value) {
    try {
      this.thenables.reduce((result, next) => {
        if (next instanceof MongoPromise) {
          return next(result).then(f => f)
        } else {
          return next(result)
        }
      })
      this.didEval = true
    } catch (e) {
      this.thenables = []
      this.rejectFunc(e)
    }
  }

  rejectFunc(e) {
    this.onError(e)
  }
}

const promise = (shouldResolve, resolveVal, rejectVal) =>
  new MongoPromise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(resolveVal)
      } else {
        reject(rejectVal)
      }
    }, 50)
  })
  let p1 = promise(true, "resolve1", "reject1");
  let p2 = promise(true, "resolve2", "reject2");
  let p3 = promise(true, "resolve3", "reject3");
promise(true, "resolve", "reject")
  .then(foo => {
    console.log(foo)
    return p1
  })
  .then(bar => {
    console.log(bar)
    return p2
  })
  .then(p2 => {
    throw p2.then(f=>f)
  })
  .catch(e => console.log(e))
