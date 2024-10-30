export default function Post({params}) {
   
    let title = params.post.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1));
    title=title.join(" ");
    
    return (
    <h1>{title}</h1>
);
}