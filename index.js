'strict mode';

document.addEventListener('DOMContentLoaded', function () {
  //burger menu
  const burgersBtn = document.querySelectorAll('.burger__btn');
  const menu = document.querySelector('.menu');

  const toggleMenu = () => {
    menu.classList.toggle('menu--active');

    burgersBtn.forEach((btn) => btn.classList.toggle('burger__btn--active'));
  };
  menu.addEventListener(
    'click',
    function (e) {
      if (e.target === e.currentTarget) {
        toggleMenu();
      }
    },
    false
  );

  burgersBtn.forEach((btn) => {
    btn.addEventListener('click', toggleMenu);
  });

  //play video
  const btn = document.querySelector('.video__btn-play');
  const video = document.querySelector('.video-player');

  btn.addEventListener('click', function () {
    btn.style.display = 'none';
    video.style.display = 'block';
  });
});
