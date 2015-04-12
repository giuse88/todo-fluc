let callbacks = [];

class Dispatcher {

  constructor() {
    console.log("Dispatcher Constructor.");
  }

  register(callback) {
    callbacks.push(callback);
    return callbacks.length - 1;
  }

  dispatch(action) {
    callbacks.map(function (callback) {
      callback(action);
    });
  }

}

export default Dispatcher;
