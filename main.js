/* main.js - Complex JavaScript Code */

// This code is a complex implementation of a social media application.
// It includes various features such as user authentication, post creation,
// comment handling, and user profile management.

// Constants
const MAX_BIO_LENGTH = 150;
const MAX_POST_LENGTH = 280;

// User Class
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.bio = "";
    this.posts = [];
  }

  updateBio(newBio) {
    if (newBio.length <= MAX_BIO_LENGTH) {
      this.bio = newBio;
      console.log(`${this.username}'s bio updated successfully.`);
    } else {
      console.log(`Bio exceeds the maximum length of ${MAX_BIO_LENGTH}.`);
    }
  }

  createPost(text) {
    if (text.length <= MAX_POST_LENGTH) {
      const post = new Post(this.username, text);
      this.posts.push(post);
      console.log(`${this.username} created a new post.`);
    } else {
      console.log(`Post exceeds the maximum length of ${MAX_POST_LENGTH}.`);
    }
  }

  static authenticate(username, password) {
    // Authenticate user with a backend API or database
    console.log(`Authenticating user '${username}'...`);
    // TODO: Implement authentication logic
  }
}

// Post Class
class Post {
  constructor(author, text) {
    this.author = author;
    this.text = text;
    this.comments = [];
  }

  addComment(author, text) {
    const comment = new Comment(author, text);
    this.comments.push(comment);
    console.log(`${author} commented on ${this.author}'s post.`);
  }
}

// Comment Class
class Comment {
  constructor(author, text) {
    this.author = author;
    this.text = text;
  }
}

// Usage Example
const johnDoe = new User("johnDoe", "pass123", "john@example.com");
User.authenticate("johnDoe", "pass123");

johnDoe.updateBio("Software Engineer | Coffee Lover");
johnDoe.createPost("Hello World!");
johnDoe.createPost("Another post!");
johnDoe.posts[0].addComment("janeSmith", "Nice post!");

console.log(johnDoe);
console.log(johnDoe.posts[0]);