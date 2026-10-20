/* Protege os módulos quando hospedados no mesmo domínio do portal. */
(() => {
  document.documentElement.style.visibility = 'hidden';
  const cfg = window.PCE_FIREBASE_CONFIG;
  if (!cfg || !cfg.projectId || cfg.projectId === "COLE_O_PROJECT_ID") {
    document.documentElement.style.visibility = "visible";
    document.body.innerHTML = "<main style=\"font:16px system-ui;padding:32px\"><h1>Firebase ainda não configurado</h1><p>Preencha o arquivo firebase-config.js com a configuração do novo projeto.</p></main>";
    return;
  }
  if (!firebase.apps.length) firebase.initializeApp(cfg);
  firebase.auth().onAuthStateChanged(user => {
    if (user) document.documentElement.style.visibility = 'visible';
    else location.replace('../index.html');
  });
})();
