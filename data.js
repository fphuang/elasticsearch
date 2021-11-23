// Require the Elasticsearch library.
const elasticsearch = require('elasticsearch');

// Instantiate an Elasticsearch client.
const client = new elasticsearch.Client({
  hosts: ['http://localhost:9200'],
});

// Ping the client to be sure Elasticsearch is up.
client.ping(
  {
    requestTimeout: 30000,
  },
  function (error) {
    // At this point, Elasticsearch is down, please check your Elasticsearch service.
    if (error) {
      console.error('Elasticsearch cluster is down!');
    } else {
      console.log('Everything is okay.');
    }
  }
);

// client.indices.create(
//     {
//         index: 'example_index',
//         id: '1',
//         type: 'cities_list',
//         body: {
//             key1: 'Content for key one',
//             key1: 'Content for key two',
//             key1: 'Content for key three',
//         },
//     },
//     (error, resp, status) => {
//         if(error) {
//             console.log(error);
//         }
//         else {
//             console.log('Created a new index.', resp);
//         }
//     }
// );

const cities = require('./cities.json');
var bulk = [];
cities.forEach(city => {
    bulk.push({
        index: {
            _index: 'example_index',
            _type: 'cities_list',
        }
    });
    bulk.push(city);
});

client.bulk({body: bulk}, (err, resp) => {
    if (err) {
        console.log('Failed bulk operation.', err);
    }
    else {
        console.log('Successfully imported %s');
    }
});


