import MongoPromise from "./mongoPromise";

const testResolve = jest.fn(v => v);
const testReject = jest.fn(e => e);

describe("A promise", async () => {
  const promise = (shouldResolve, resolveVal, rejectVal) =>
    new MongoPromise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(resolveVal);
        } else {
          reject(rejectVal);
        }
      }, 50);
    });

  afterEach(() => {
    testResolve.mockClear();
    testReject.mockClear();
  });

  test("successfully resolves with then", async () => {
    await promise(true, "resolve", "reject")
      .then(testResolve)
      .catch(testReject);
    expect(testResolve).toHaveBeenCalledWith("resolve");
  });

  test("calls rejection fn", async () => {});

  test("then is chainable", async () => {
    await promise(true, v => v, "reject")
      .then(testResolve)
      .then(testResolve)
      .then(testResolve)
      .catch(testReject);

    expect(testResolve.mock.calls.length).toBe(3);
  });

  test(".all function resolves if all promises are fulfilled", async () => {
    let p1 = promise(true, "resolve1", "reject1");
    let p2 = promise(true, "resolve2", "reject2");
    let p3 = promise(true, "resolve3", "reject3");
    await new MongoPromise((resolve, reject) => {})
      .all([p1, p2, p3])
      .then(testResolve)
      .catch(testReject);
    expect(testResolve.mock.calls.length).toBe(1);
    expect(testResolve).toHaveBeenCalledWith([
      "resolve1",
      "resolve2",
      "resolve3"
    ]);
  });
});
