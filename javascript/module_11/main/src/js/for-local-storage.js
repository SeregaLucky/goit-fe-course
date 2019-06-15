import storage from './storage';

const refs = {
  body: document.querySelector('body'),
  buttonTheme: document.querySelector('button[data-action="theme-switch"]'),
  iconInButton: document.querySelector('.material-icons'),
};

refs.buttonTheme.addEventListener('click', changeTheme);

const settingsNow = storage.load('settings'); // Достаю с локал сториджа
if (settingsNow) {
  refs.body.classList.add(settingsNow.themeNow);
  refs.iconInButton.textContent = settingsNow.icon;
}

// При нажатии на кнопку эта функция срабатывает
function changeTheme() {
  const isFinddarkTheme = document.querySelector('.theme-dark');

  if (isFinddarkTheme) {
    const settings = {
      icon: 'brightness_3',
      themeNow: 'theme-light',
      themePrev: 'theme-dark',
    };

    changeBackgroundTheme(settings);
  } else {
    const settings = {
      icon: 'wb_sunny',
      themeNow: 'theme-dark',
      themePrev: 'theme-light',
    };

    changeBackgroundTheme(settings);
  }
}

// Меняет на нужную тему и вносим ее в локал сторидж
function changeBackgroundTheme(settings) {
  refs.body.classList.remove(settings.themePrev);
  refs.body.classList.add(settings.themeNow);

  refs.iconInButton.textContent = settings.icon;

  storage.save('settings', settings); // Записть в локал сторидж
}
