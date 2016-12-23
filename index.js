var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

const PORT = process.env.PORT || 8080

var router = express.Router()

router.get('/',function (req, res) {
  res.json({mes: 'Oh hey!'})
});

app.use('/api', router);

app.listen(PORT)
console.log('Lords l33t api is running on port '+PORT);
