# Site CAP EVOLUTION — mise en ligne sur Vercel

Site statique (HTML + CSS + JS), aucune installation ni build nécessaire.

## Contenu du dossier
- `index.html` : la page du site
- `style.css` : ajustements pour mobile
- `script.js` : formulaire de contact (ouvre la messagerie vers CAPEVOLUTION26@outlook.fr)
- `favicon.svg` : icône de l'onglet
- `vercel.json` : configuration Vercel

## Méthode 1 — En ligne de commande
1. Créez un compte gratuit sur https://vercel.com
2. Installez l'outil : `npm i -g vercel` (nécessite Node.js)
3. Dans ce dossier, tapez : `vercel` puis répondez aux questions (Enter à chaque fois)
4. Pour la version définitive : `vercel --prod`

## Méthode 2 — Avec GitHub (recommandée pour les mises à jour)
1. Créez un dépôt sur https://github.com et envoyez-y tous les fichiers de ce dossier
2. Sur Vercel : **Add New → Project → Import** votre dépôt
3. Framework Preset : **Other** — laissez Build Command et Output Directory vides
4. Cliquez sur **Deploy**. Chaque modification poussée sur GitHub met le site à jour.

## Nom de domaine
Dans Vercel : **Project → Settings → Domains**, ajoutez votre domaine (ex. cap-evolution.fr)
et suivez les instructions DNS chez votre registrar.

## Formulaire de contact
Le formulaire ouvre la messagerie du visiteur avec la demande pré-remplie.
Pour recevoir les demandes directement sans passer par la messagerie du visiteur,
vous pouvez brancher un service comme Formspree ou Web3Forms (gratuit) :
remplacez `<form id="contact-form" ...>` par l'action fournie par ce service
et supprimez la ligne `<script src="script.js"></script>`.

## À ajouter plus tard
- Numéro de téléphone
- Mentions légales (obligatoires) et politique de confidentialité
- Certification Qualiopi si vous l'avez
