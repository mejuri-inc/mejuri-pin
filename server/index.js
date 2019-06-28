const http = require('http');
const { parse } = require('url');
const fetch = require('node-fetch');

const hostname = 'localhost';
const port = 3000;

const validCategories = [ 'rings' , 'pendants', 'earrings', 'bracelets' ];

const mejuriBaseUrl = 'http://dev-api.mejuri.com/api/v1/taxon/collections-by-categories/type/';

let cache = {};
function memoFetch(uri) {
  if (cache[uri]) {
    return Promise.resolve(cache[uri]);
  }
  return fetch(uri, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
    }
  })
  .then(response => response.text())
  .then(r => {
    cache[uri] = r;
    return r;
  });
}

const queryMejuriApi = (req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET'
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (['GET'].indexOf(req.method) > -1) {
    const queryParams = parse(req.url).pathname;
    const [ resource, slug ] = queryParams.split('/').filter(s => s !== '');

    console.log('resource', resource);
    console.log('slug', slug);

    if ( resource !== 'categories' || !validCategories.find(elem => elem == slug)) {
      return res.end(JSON.stringify({ error: 'invalid category' }));
    }
  
    memoFetch(mejuriBaseUrl + slug)
      .then(response => {
        res.writeHead(200, headers);
        res.end(response);
      })
      .catch(err => res.end(JSON.stringify({ error: err.message })));
  }
  else {
    res.writeHead(405, headers);
    res.end(`${req.method} not allowed.`);
  }
}

const server = http.createServer(queryMejuriApi);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
