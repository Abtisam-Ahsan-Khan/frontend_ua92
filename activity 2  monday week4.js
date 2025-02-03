const blogPlatform = {
    posts: [],

    addBlogPost: function(title, author, content, tags) {
        const newPost = {
            title: title,
            author: author,
            content: content,
            tags: tags,
            published: true
        };
        this.posts.push(newPost);
        console.log(`Blog post "${title}" added successfully.`);
    },

    displayBlogPosts: function() {
        console.log("All Blog Posts:");
        this.posts.forEach(post => {
            console.log(`Title: ${post.title}\nAuthor: ${post.author}\nTags: ${post.tags.join(", ")}\n`);
        });
    },

    searchBlogPost: function(title) {
        const foundPost = this.posts.find(post => post.title.toLowerCase() === title.toLowerCase());
        if (foundPost) {
            console.log(`Title: ${foundPost.title}\nAuthor: ${foundPost.author}\nContent: ${foundPost.content}\nTags: ${foundPost.tags.join(", ")}`);
        } else {
            console.log("Blog post not found.");
        }
    }
};

// Adding initial blog post
blogPlatform.addBlogPost(
    "Introduction to JavaScript", 
    "John Doe", 
    "JavaScript is a powerful programming language used for web development.", 
    ["JavaScript", "Web Development"]
);

// Display all blog posts
blogPlatform.displayBlogPosts();

// Search for a blog post
blogPlatform.searchBlogPost("Introduction to JavaScript");
