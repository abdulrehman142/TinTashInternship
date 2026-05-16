const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const sequelize = require('./db');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(cors());

// Sign Up
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const exists = await User.findOne({ where: { email } });
    if (exists) return res.status(400).json({ message: 'Email already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const user = await User.create({
      username,
      email,
      password: hashed,
      verified: false,
      verificationToken
    });

    // In production, send email with this link
    const verificationUrl = `http://localhost:5173/verify?token=${verificationToken}`;
    res.status(201).json({
      message: 'User created. Please verify your email.',
      verificationUrl
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Signup error', error: err.message });
  }
});

// Verification endpoint
app.get('/verify', async (req, res) => {
  const { token } = req.query;
  if (!token) return res.status(400).json({ message: 'Missing token' });

  const user = await User.findOne({ where: { verificationToken: token } });
  if (!user) return res.status(400).json({ message: 'Invalid token' });

  user.verified = true;
  user.verificationToken = null;
  await user.save();

  res.json({ message: 'Email verified! You can now log in.' });
});

// Update sign in to check verified
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    if (!user.verified) return res.status(403).json({ message: 'Please verify your email before logging in.' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ message: 'Sign in successful', user: { id: user.id, username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Signin error', error: err.message });
  }
});

// Example protected route (frontend can redirect here after sign in)
app.get('/dashboard', async (req, res) => {
  // In production, use authentication middleware (JWT, etc.)
  res.json({ message: 'Welcome to your dashboard!' });
});

// Health check route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Sync DB and start server
sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));});