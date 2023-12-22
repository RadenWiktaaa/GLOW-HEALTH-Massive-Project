const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;
const userRouter = require('./routes/usersProfile')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', (req, res, next) => {
  console.log("Terjadi request di path : ", req.path)
  next();
})

app.use('/api/usersProfile', userRouter);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});