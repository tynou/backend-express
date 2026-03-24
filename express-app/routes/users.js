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

module.exports = router;
