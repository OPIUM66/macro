const greeterClient = require('../../gprc/greeterClient.js');

class HelloService {
  static async sayHello(name) {
    return new Promise((resolve, reject) => {
      greeterClient.SayHello({ name }, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.message);
        }
      });
    });
  }
}

module.exports = HelloService;
