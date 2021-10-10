import app from './app';

const DEFAULT_PORT = 3000;

const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
  console.log("Server running on port " + port);
});
