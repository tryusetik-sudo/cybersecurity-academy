const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/home'));
app.use('/courses', require('./routes/courses'));
app.use('/paths', require('./routes/paths'));
app.use('/challenges', require('./routes/challenges'));
app.use('/certifications', require('./routes/certifications'));
app.use('/instructors', require('./routes/instructors'));

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔒 Cybersecurity Academy running on port ${PORT}`);
});
