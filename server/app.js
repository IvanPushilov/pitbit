const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const path = require('path');
const indexRouter = require('./routes/index.routes');

const { verifyAccessToken } = require('./middleware/verifyToken');
const app = express();

const PORT = process.env.PORT || 4000;
app.use(cookieParser());
app.use(verifyAccessToken);
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
