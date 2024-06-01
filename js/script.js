const likes = document.querySelectorAll('#icon');

likes.forEach(function(like) {
  like.onclick = () => {
    like.classList.toggle('filled');
  }
});