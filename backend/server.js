const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const bannerRoutes = require('./routes/bannerRoutes');
const sequelize = require('./models/Banner').sequelize;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', bannerRoutes);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on port 5000');
  });
});
