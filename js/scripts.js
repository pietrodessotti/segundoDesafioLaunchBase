const posts = document.querySelectorAll('.postsGrid');

for (let post of posts) {
    post.addEventListener("click", function () {
        const postId = post.getAttribute("id");

        document.querySelector('.modalOverlay').classList.add('active');
        document.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`
    })
}

function closeModal() {
    for (let post of posts) {
        document.querySelector("iframe").removeAttribute
        document.querySelector('.modalOverlay').classList.remove('active');
    }
}