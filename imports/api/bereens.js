import {Mongo} from 'meteor/mongo';

export const Bereens = new Mongo.Collection('bereens');

/*
Nom
Prénoms
Genre
e-mail
Quartier
Adresse Précise
Canal d'information
si !sda {
	Nom point focal, 
	Tel point focal,
	Adresse Point Focal,
	Heure inscription
	Date inscription
}
*/