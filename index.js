const express = require('express')
const app = express()
const port = process.env.PORT || 3002

// Parser Body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  console.log('Method: GET', );
  console.log('query: ', JSON.stringify(req.query));
  res.send({ 
    method: 'GET',
    query: req.query,
  })
})
app.post('/', (req, res) => {
  console.log('Method: POST', );
  console.log('Payload: ', JSON.stringify(res.body));
  res.send({ 
    method: 'POST',
    body: req.body,
  })
})
app.put('/', (req, res) => {
  console.log('Method: PUT', );
  console.log('Payload: ', JSON.stringify(res.body));
  res.send({ 
    method: 'PUT',
    body: req.body,
  })
})
app.delete('/', (req, res) => {
  console.log('Method: DELETE', );
  console.log('Payload: ', JSON.stringify(res.body));
  res.send({ 
    method: 'DELETE',
    body: req.body,
  })
})

app.listen(port , () => console.log(`Server is running at port ${port}`))
