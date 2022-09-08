function loadcomments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displaycomments(data));
}

function displaycomments(comments) {
  const newcomments = document.getElementById("comments-list");
  for (const comment of comments) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comments");
    console.log(comment);
    commentDiv.innerHTML = `
      <h4> email-${comment.email}</h4>
      <h2> post id:${comment.id}</h5>
      <h3>body:${comment.body}</h3>
    
      `;
    newcomments.appendChild(commentDiv);
  }
}

loadcomments();
