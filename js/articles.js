const articlesData = [
  {
    imgUrl: 'img/article1.jpg',
    imgAlt: 'Иллюстрация к статье',
    title: 'ЗАЧЕМ РАЗВИВАТЬ ЭМОЦИОНАЛЬНЫЙ ИНТЕЛЛЕКТ?',
    text: 'Без развитого эмоционального интеллекта (ЭИ) вы серьезно проигрываете тем у кого с ним всё в порядке. Нарциссы тратят массу усилий на то чтобы не испытывать непереносимое чувства стыда. Шизоидам чувства и эмоции чужды, особенно переживания других. Депрессивные не могут избавиться от бесконечного чувства вины. Истерички в постоянной неудовлетворенности — «им ТАК не нравится, а как нравится не знают». Невротики...',
    linkHref: 'article1.html',
    linkText: 'Читать далее...',
    date: '14 марта 2022',
    dateTime: '2022-03-14'
  },
  {
    imgUrl: 'img/article2.jpg',
    imgAlt: 'Иллюстрация к статье',
    title: 'ВЫ УМЕЕТЕ ГОВОРИТЬ «НЕТ»?',
    text: 'Вы должны уметь говорить «нет»! Об этом постоянно твердят психологи и не только. Но тут возникает главная загвоздка — сказать нет несложно, основная проблема справиться с чувством вины, которое потом всецело охватывает. Если у вас проблема с границами, а близкие и окружающие регулярно их взламывают, например... Если у вас проблема с границами, а близкие и окружающие регулярно их взламывают, например: подвези ночью в аэропорт; посиди с моим ребёнком...',
    linkHref: 'article2.html',
    linkText: 'Читать далее...',
    date: '10 февраля 2022',
    dateTime: '2022-02-10'
  },
  {
    imgUrl: 'img/article3.jpg',
    imgAlt: 'Иллюстрация к статье',
    title: 'МЕНЯ ПОСТОЯННО ВСЕ КРИТИКУЮТ',
    text: 'Зашла я к подруге на кофе. — Аня, у тебя скатерть изнаночной стороной лежит.   — Вот Оксана, мы три дня за этим столом обедали! Настоящие подруги ко мне на кофе заходили и всех моя скатерть устраивала. Только тебе, внимательная ты наша, не нравится.  — Я же не сказала, что у тебя пятна в на скатерти — их нет. А изнанка есть...',
    linkHref: 'article3.html',
    linkText: 'Читать далее...',
    date: '17 января 2022',
    dateTime: '2022-01-17'
  },
  {
    imgUrl: 'img/article4.jpg',
    imgAlt: 'Иллюстрация к статье',
    title: 'ОНЛАЙН ГРАНИЦЫ',
    text: 'В продолжение темы личных границ… Мобильная связь и соцсети активно изменяют наше личное пространство, постепенно делая его доступным для окружающих. До появления сотовых телефонов всё было просто. Ты мог не брать трубку, не перезванивать и не оправдываться, что не перезвонил. Ты элементарно не знал, кто тебе звонил. А дозвониться можно было только, если абонент находился дома, при этом если он не был в ванной или ещё где-нибудь, и слышал ваш звонок...',
    linkHref: 'article4.html',
    linkText: 'Читать далее...',
    date: '20 декабря 2021',
    dateTime: '2021-12-20'
  }
];

const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  };
  return element;
};

const renderArticles = function (data) {
  const article = makeElement('li', 'articles__item');
  const img = makeElement('img', 'articles__img');
  img.src = data.imgUrl;
  img.alt = data.imgAlt;
  article.appendChild(img);

  const content = makeElement('div', 'articles__content');
  article.appendChild(content);

  const title = makeElement('h2', 'subtitle', data.title);
  title.classList.add('articles__subtitle');
  content.appendChild(title);

  const wrapperSpan = makeElement('div', 'articles__span');
  content.appendChild(wrapperSpan);

  const date = makeElement('span', 'icon-clock');
  date.classList.add('articles__clock');
  wrapperSpan.appendChild(date);

  const time = makeElement('time', 'articles__time', data.date);
  time.dateTime = data.dateTime;
  wrapperSpan.appendChild(time);

  const button = makeElement('button', 'star');
  wrapperSpan.appendChild(button);

  const star = makeElement('span', 'icon-star');  
  button.appendChild(star);

  const paragraph = makeElement('p', 'articles__text', data.text);
  content.appendChild(paragraph);

  const link = makeElement('a', 'articles__link', data.linkText);
  link.href = data.linkHref;
  content.appendChild(link);
  
  return article;  
};

const articleList = document.querySelector('.articles__list');

for (let i = 0; i < articlesData.length; i++) {
  const articleItem = renderArticles(articlesData[i]);
  articleList.appendChild(articleItem);
}

const buttons = document.querySelectorAll('.star');
const likesNumber = document.querySelectorAll('.icon-star');

for (let i = 0; i < buttons.length; i++ ) {  
  buttons[i].onclick = function () {
    if (buttons[i].classList.contains('added')) {
      likesNumber[i].textContent--;
    } else {
      likesNumber[i].textContent++;
    }
    buttons[i].classList.toggle('added');
  };
}; 
