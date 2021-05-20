const posts = document.querySelectorAll('.postsGrid');

for (let post of posts) {
    post.addEventListener("click", function () {
        const postId = post.getAttribute("id");

        document.querySelector('.modalOverlay').classList.add('active');
        document.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`
    })
}

function closeModal() {
    document.querySelector("iframe").removeAttribute
    document.querySelector('.modalOverlay').classList.remove('active');
}

function maximizeModal() {
    const maximize = document.querySelector('.modal')
    const minimize = document.querySelector('.maximize')

    if (maximize.contains(minimize) == true) {
        document.querySelector('.modal').addEventListener("click", () => {
            document.querySelector('.modal').classList.remove('maximize')
        })
    } else if (maximize.contains(minimize) == false) {
        document.querySelector('.modal').addEventListener("click", () => {
            document.querySelector('.modal').classList.add('maximize')
        })
    }
}

