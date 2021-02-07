
// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'domain',
    message: "Nom de domaine du site concerné par ces mentions légales. ex : www.exemple.com"
  },
  {
    type: 'input',
    name: 'proprietaire',
    message: "Propriétaire du site (nom propre ou entreprise)* : "
  },
  {
    type: 'input',
    name: 'status',
    message: "Statut du propriétaire du site (SARL numéro siret) : "
  },
  {
    type: 'input',
    name: 'adresse',
    message: "Adresse postale du propriétaire* : "
  },
  {
    type: 'input',
    name: 'nomCreateur',
    message: "Nom du créateur du site* : "
  },
  {
    type: 'input',
    name: 'partiesPrenante',
    message: "Vous pouvez mentionner ici le nom de toutes les personnes ayant contribuées à la fabrication du site (photographe, rédacteur...) : "
  },
  {
    type: 'input',
    name: 'urlCreateur',
    message: "Url du créateur du site *, ex : http://www.exemple.com/ : "
  },
  {
    type: 'input',
    name: 'responsablePublication',
    message: "Nom du responsable de publication (personne en charge des mises a jour du contenu) * : "
  },
  {
    type: 'input',
    name: 'emailResponsablePublication',
    message: "Contact email ou telephone du responsable de publication * : "
  },
  {
    type: 'input',
    name: 'nomWebmaster',
    message: "Nom du WebMaster (personne en charge des modifications techniques)* :"
  },
  {
    type: 'input',
    name: 'emailTelephoneWebmaster',
    message: "Contact email ou telephone du WebMaster * : "
  },
  {
    type: 'input',
    name: 'hebergeurSiteWeb',
    message: "Hébergeur du site * : "
  },
  {
    type: 'input',
    name: 'adresseHebergeurSiteWeb',
    message: "Adresse postale de l'hébergeur * : "
  }
];
