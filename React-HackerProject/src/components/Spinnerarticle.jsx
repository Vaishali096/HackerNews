export default function Spinnerarticle({ post }) {
    console.log(post);
    return (
      <div>
        <h1>{post.title}</h1> |<p>by: {post.author}</p>
        <p>points: {post.points}</p>
      </div>
    );
  }