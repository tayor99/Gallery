const data = [
  {
    image: `https://i0.wp.com/justanimehype.com/wp-content/uploads/2021/11/Gojo-Satoru-from-Jujutsu-Kaisen.jpg?resize=728%2C409&ssl=1`,
    character: `Gojo`,
  },
  {
    image: `https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/03/eren-yeager-titan-form.jpg?q=50&fit=crop&w=740&dpr=1.5`,
    character: `Eren`,
  },
  {
    image: `https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/5-Naruto.jpg?q=50&fit=crop&w=740&dpr=1.5`,
    character: `Naruto`,
  },
  {
    image: `https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/muzan-demon-slayer.jpg?q=50&fit=crop&w=740&dpr=1.5`,
    character: `Muzan`,
  },
  {
    image: `https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/10/7-One-Punch-Man.jpg?q=50&fit=crop&w=740&dpr=1.5`,
    character: `Saitama`,
  },
  {
    image: `https://imgix.ranker.com/user_node_img/50129/1002576196/original/1002576196-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650`,
    character: `Rengoku`,
  },
  {
    image: `https://imgix.ranker.com/user_node_img/68/1343066/original/kakashi-hatake-photo-u21?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650`,
    character: `Kakashi`,
  },
  {
    image: `https://imgix.ranker.com/user_node_img/50104/1002067882/original/1002067882-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650`,
    character: `Nezuko`,
  },
  {
    image: `https://i.pinimg.com/originals/ff/03/ea/ff03ea864fcbc88f91fb7a32dc981581.jpg`,
    character: `Itachi`,
  },
];

const overAll = document.querySelector('.body-container');
const searchBar = document.querySelector('.search-bar');
const button = document.querySelector('.input-button');
console.log(searchBar);
console.log(searchBar.value);

window.addEventListener('DOMContentLoaded', function () {
  data.forEach((item) => {
    const div1 = document.createElement('div');
    overAll.appendChild(div1);
    div1.classList.add('child-container');
    const image = document.createElement('img');
    image.src = item.image;
    const h2 = document.createElement('h2');
    h2.innerText = item.character;
    div1.appendChild(h2);
    div1.appendChild(image);
  });
  console.log(overAll);
});
button.addEventListener('click', () => {
  const childItem = overAll.children;
  for (let i = 0; i < childItem.length; i++) {
    const element = childItem[i];
    if (element.children[0].innerHTML !== searchBar.value) {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }
});
