export default async function Post({ params }) {
  const data = await params;
  console.log(data);
  const title = data.post.split("=");


  return <h1>{title}</h1>;

}
