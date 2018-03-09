function returnPost() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}` + '\n' + `Content: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let base = super.toString();
            base += '\n' + `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                base += '\nComments:\n';
                let comments = this.comments.map(c => ` * ${c}`);
                base += comments.join('\n');
            }
            return base;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let result = returnPost();

// let post = new result.Post("Post", "Content");
// console.log(post.toString());

let scm = new result.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good Post")
scm.addComment("Very Good Post")
scm.addComment("Wow!")

console.log(scm.toString())