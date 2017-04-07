'use strict';

var http = require('http'),
    url = require('url'),
    staticFile = require('./staticFile'),
    
    studentList = require('./studentList'),
    countryList = require('./countryList'),
    
    collections = {
      'getStudentList': studentList,
      'getCountryList': countryList
    },
    
    dir = '../client';
    
http.createServer(onRequest).listen(3000);
console.log('server started on port 3000');

function onRequest (request, response) {
  var pathname = url.parse(request.url).pathname,
      urlData = pathname.split('/'),
      collection = urlData[1],
      id = urlData[2];
      
  if (collections[collection]) {
    collectionHandle(request, response, collections[collection], id);
  } else {
    staticFile(request, response, dir + pathname);
  }
}

function collectionHandle (request, response, collection, id) {
  var buffer = '';
  
  if (request.method == 'GET') {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(collection));
    
  } else if (request.method == 'POST') {
    request.on('data', function(data) {
      buffer += data;
    });
    
    request.on('end', function() {
      var model = JSON.parse(buffer);
      model.id = Number(collection[collection.length - 1].id) + 1;
      collection.push(model);
      
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(JSON.stringify(model));
    });
    
  } else if (request.method == 'PUT') {
    request.on('data', function(data) {
      buffer += data;
    });
    
    request.on('end', function() {
      var model = JSON.parse(buffer),
          index = collection.findIndex(item => item.id == id);
      collection.splice(index, 1, model);
      
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(JSON.stringify(model));
    });
    
  } else if (request.method == 'DELETE') {
    var index = collection.findIndex(item => item.id == id),
        model = collection.splice(index, 1);
    
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(model));
  }
}