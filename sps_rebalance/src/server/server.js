var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var DATABASE_FILE = path.join(__dirname, 'db.json');

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/allocationData', function(req, res) {
  fs.readFile(DATABASE_FILE, function(err, data) {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.description = "Internal Error";
      res.send(err);
    }
    else {
      res.setHeader('Cache-Control', 'no-cache');
      const parsedData = JSON.parse(data);
      res.json(parsedData.allocationData);
    }
  });
});

app.get('/assetData', function(req, res) {
  fs.readFile(DATABASE_FILE, function(err, data) {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.description = "Internal Error";
      res.send(err);
    }
    else {
      res.setHeader('Cache-Control', 'no-cache');
      const parsedData = JSON.parse(data);
      res.json(parsedData.assetData);
    }
  });
});

// app.put('/allocationData/:id', function(req, res) {
//   var id = req.params.id;
//   fs.readFile(DATABASE_FILE, function(err, data) {
//     if (err) {
//       console.error(err);
//       res.statusCode = 500;
//       res.description = "Internal Error";
//       res.send(err);
//     }
//     else {
//       res.setHeader('Cache-Control', 'no-cache');
//       var data = JSON.parse(data);
//       var allocationData = data.allocationData;
//       for (var i = 0; i < allocationData.length; i++) {
//         if (allocationData[i].id == id) {
//           allocationData.splice(i, 1, res.req.body);
//         }
//       }
//       data.allocationData = allocationData;
//       fs.writeFile(DATABASE_FILE, JSON.stringify(data, null, 4), function(err) {
//         if (err) {
//           console.error(err);
//           res.statusCode = 500;
//           res.description = 'Internal error';
//           res.send(err);
//         } else {
//           res.setHeader('Cache-Control', 'no-cache');
//           res.json(data.allocationData);
//         }
//       });
//     }
//   });
// });

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
