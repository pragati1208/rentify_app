const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MongoDB connection
mongoose.connect('mongodb+srv://0812pragati:0pS4sULa3ppoXAKW@cluster0.rvogjei.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User schema
const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phoneNo: String,
});

const User = mongoose.model('User', UserSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Hello...');
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { firstname, lastname, email, phoneNo } = req.body;
  const user = new User({ firstname, lastname, email, phoneNo });

  user.save()
    .then(() => {
      res.send({ message: 'Saved Success' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: 'Server Error', error: err.message });
    });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { firstname } = req.body;
  
  User.findOne({ firstname })
    .then((user) => {
      if (user) {
        res.send({ message: 'Login Success' });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: 'Server Error', error: err.message });
    });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
