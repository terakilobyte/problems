export default class MongoPromise {
  constructor(execFn) {
    this.thenables = [];
    this.onError = () => {};
    this.allCall = false;

    this.resolveFunc = this.resolveFunc.bind(this);
    this.rejectFunc = this.rejectFunc.bind(this);
    this.onError = this.onError.bind(this);
    execFn(this.resolveFunc, this.rejectFunc);
  }

  all(promises) {}

  then(resolve) {
    this.thenables.push(resolve);
    return this;
  }

  catch(err) {
    this.onError = err;
    return this;
  }

  resolveFunc(value) {
    try {
      this.thenables.reduce((result, next) => next(result), value);
      this.didEval = true;
    } catch (e) {
      this.thenables = [];
      this.rejectFunc(e);
    }
  }

  rejectFunc(e) {
    this.onError(e);
  }
}
