import { Meteor } from 'meteor/meteor';
import {Bereens} from './../imports/api/bereens';
import {Themes} from './../imports/api/theme';
import {Stands} from './../imports/api/stands';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('Server one');
  /*Bereens.insert({
  	nom: "abalo",
  	prenom:'eleve'
  });*/
  /*Theme.insert({
  	titre: "Un sauveur pour l'humanité"
  });*/
  console.log(Stands.find().fetch());
});
