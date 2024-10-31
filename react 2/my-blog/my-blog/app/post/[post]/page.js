export default function Post({params}) {
    console.log(params.post);
    let title = params.post.split("-");
    title =title.join (" ").toUpperCase();
    return (
      <h1>{title}</h1>
    );
  }
  