import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(
    'The date is',
    new Date(),
    'path:',
    req.path,
    'method:',
    req.method
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.get('/notes', (req, res) => {
  res.send('Here are my notes');
});

app.post('/notes/:noteId', (req, res) => {
  const noteId = req.params.noteId;
  res.send(`noteId: ${noteId}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
