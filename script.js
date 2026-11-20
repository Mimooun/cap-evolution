// Formulaire de contact : ouvre la messagerie du visiteur avec la demande pré-remplie
// vers CAPEVOLUTION26@outlook.fr (aucun serveur nécessaire).
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var DEST = 'CAPEVOLUTION26@outlook.fr';
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var sujet = 'Demande de formation - ' + (d.get('formation') || '');
    var corps =
      'Nom et prénom : ' + (d.get('nom') || '') + '\n' +
      'Téléphone : ' + (d.get('telephone') || '') + '\n' +
      'E-mail : ' + (d.get('email') || '') + '\n' +
      'Formation : ' + (d.get('formation') || '') + '\n\n' +
      (d.get('message') || '');
    window.location.href = 'mailto:' + DEST +
      '?subject=' + encodeURIComponent(sujet) +
      '&body=' + encodeURIComponent(corps);
    if (!form.querySelector('.form-ok')) {
      var p = document.createElement('p');
      p.className = 'form-ok';
      p.textContent = 'Votre messagerie va s’ouvrir avec votre demande. Il ne reste qu’à cliquer sur Envoyer.';
      form.appendChild(p);
    }
  });
})();
