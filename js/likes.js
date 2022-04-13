// Добавление лайков

const button = document.querySelector('.star');
const likesNumber = document.querySelector('.icon-star');


button.onclick = function () {
  if (button.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  button.classList.toggle('added');
};

// Добавление комментриев

const commentsList = document.querySelector('.posts__list');
const form = document.querySelector('.posts__form');
const input = document.querySelector('.posts__field');

form.onsubmit = function (evt) {
  evt.preventDefault();
  const newComment = document.createElement('li')
  newComment.classList.add('posts__item');
  newComment.textContent = input.value;
  commentsList.append(newComment);
  input.value = '';
}
