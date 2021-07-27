// imports 
import express from 'express'; // import from node_modules 
import fun from './js-fun.js'; // import from our own scripts 

// create constants with node_modules imports 
const app = express();
const port = 9999;

// express use function for creating server  
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// getmapping requests 
app.get('/', (req, res) => {
  console.log('Welcome!');
  res.send('Welcome to the app!');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/fun', (req, res) => {
  res.send(fun());
});

// console output after app starts 
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});