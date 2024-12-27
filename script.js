function addComment() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        const commentsSection = document.querySelector('.comments');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <h4>${name}</h4>
            <p>${message}</p>
        `;
        commentsSection.appendChild(newComment);

        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in both fields.');
    }
}
