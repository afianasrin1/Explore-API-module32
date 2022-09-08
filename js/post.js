function loadposts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayposts(data));
}

function displayposts(posts) {
  const newPosts = document.getElementById("container-posts");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    console.log(post);
    postDiv.innerHTML = `
    <h4> user-${post.userId}</h4>
    <h2> post id:${post.id}</h5>
    <h3> post:${post.title}</h3>
  
    `;
    newPosts.appendChild(postDiv);
  }
}

loadposts();
