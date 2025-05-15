document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.loginForm');
  const loginInput = document.querySelector('.login');
  const passwordInput = document.querySelector('.password');
  const errorNotification = document.querySelector('.notification1');
  const successNotification = document.querySelector('.notification2')
  const secureSection = document.querySelector('.secure');
  const deconect = document.querySelector('.deconection')

  // Identifiants codés en dur
  const CORRECT_LOGIN = 'admin';
  const CORRECT_PASSWORD = '1234';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const login = loginInput.value.trim();
    const password = passwordInput.value;

    if (!login || !password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Vérification des identifiants
    if (login === CORRECT_LOGIN && password === CORRECT_PASSWORD) {
      form.classList.add('form-hidden');
      secureSection.classList.remove('hidden');
      errorNotification.classList.add('hidden');
    } else {
      errorNotification.classList.remove('hidden');
      passwordInput.value = '';
      setTimeout(() => {
        errorNotification.classList.add('hidden');
      }, 2000);
      passwordInput.focus()
    }
  });
  deconect.addEventListener ('click', (e) => {
  e.preventDefault()
  form.classList.remove('form-hidden');
  secureSection.classList.add('hidden');
  successNotification.classList.remove('hidden')
  setTimeout(() => {
  successNotification.classList.add('hidden');
  }, 2000);
  })
});
