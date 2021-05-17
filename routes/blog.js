const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const homeStartingContent =
  "In this journal, you can create and publish your own daily journals on subjects such as Web Development. Go to 'COMPOSE' to enter the Journal's Title and Content on the space provided and click 'Publish'. Your Journal will be visible in the 'Home' page.";

// Use the following for localhost
const bloging = mongoose.createConnection('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the following for Heroku
// const bloging = mongoose.createConnection(process.env.MONGODB_URI1, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const blogsSchema = {
  title: String,
  content: String,
};

const Blog = bloging.model('Blog', blogsSchema);

router.get('/blog', (req, res) => {
  Blog.find({}, (err, posts) => {
    res.render('blogpost/home', {
      homeContent: homeStartingContent,
      posts: posts,
    });
  });
});

router.get('/blog/about', (req, res) => {
  res.render('blogpost/about');
});

router.get('/blog/contact', (req, res) => {
  res.render('blogpost/contact');
});

router.get('/blog/compose', (req, res) => {
  res.render('blogpost/compose');
});
router.post('/blog/compose', (req, res) => {
  const blog = new Blog({
    title: req.body.postTitle,
    content: req.body.postBody,
  });
  blog.save((err) => {
    if (!err) {
      res.redirect('/blog');
    }
  });
});

router.get('/blog/posts/:newPost', (req, res) => {
  const requestedPostId = req.params.newPost;
  Blog.findOne({ _id: requestedPostId }, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.render('blogpost/posts', {
        postTitle: post.title,
        postBody: post.content,
      });
    }
  });
});

module.exports = router;