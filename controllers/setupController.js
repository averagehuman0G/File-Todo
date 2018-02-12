const Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', function(req, res) {
    const seedData = [
      {
        username: 'userOne',
        todo: 'code some more',
        isDone: true,
        fileAttachment: false,
      },
      {
        username: 'userTwo',
        todo: 'Take a break from coding',
        isDone: false,
        fileAttachment: false,
      },
      {
        username: 'userThree',
        todo: 'Give a tech talk',
        isDone: true,
        fileAttachment: false,
      },
    ];
    Todos.create(seedData, function(err, results) {
      res.send(results);
    });
  });
};
