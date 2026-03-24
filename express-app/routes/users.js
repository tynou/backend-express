const express = require('express');
const router = express.Router();

const users = {
  items: [
    {
      "id": 1,
      "name": "Шишкина Светлана"
    },
    {
      "id": 2,
      "name": "Тимонин Александр"
    }
  ]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users.items);
});

router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const user = users.items.find(user => user.id === id);
  if (user === undefined)
    return res.status(404);
  res.send(user);
});

router.post('/', function(req, res, next) {
  const newUser = req.body;
  users.items.push(newUser);
  res.status(201).json(newUser);
})

module.exports = router;
