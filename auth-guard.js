/* Protege os módulos quando hospedados no mesmo domínio do portal. */
(() => {
  document.documentElement.style.visibility = 'hidden';
  const cfg = {
    apiKey: "AIzaSyBADDrVhqgEKWcP51quHWp5Qk3eBIh_64o",
    authDomain: "reserva-de-veiculos-71157.firebaseapp.com",
    databaseURL: "https://reserva-de-veiculos-71157-default-rtdb.firebaseio.com",
    projectId: "reserva-de-veiculos-71157",
    storageBucket: "reserva-de-veiculos-71157.firebasestorage.app",
    messagingSenderId: "709523825486",
    appId: "1:709523825486:web:e992a9142cf2404eabb41f"
  };
  if (!firebase.apps.length) firebase.initializeApp(cfg);
  firebase.auth().onAuthStateChanged(user => {
    if (user) document.documentElement.style.visibility = 'visible';
    else location.replace('../index.html');
  });
})();
