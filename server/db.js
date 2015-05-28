var Sequelize = require("sequelize");
//no password
var sequelize = new Sequelize('database', 'root', '', {
	host:'localhost',
	dialect: 'sqlite',

	//not sure exactly what this does, copying config documentation
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},

	storage: './db/db.sqlite'
});

// these define the schema for our tables
var User = sequelize.define('user', {

}); 

UserLeague = sequelize.define('user_league', {

}); 

UserRoster = sequelize.define('user_roster', {

}); 

League = sequelize.define('league', {

}); 

LeagueCharacter = sequelize.define('league_character', {

}); 

LeagueEvent = sequelize.define('league_event', {

}); 

CharacterEvent = sequelize.define('character_event', {

}); 

//define the relationships between the tables here

//Basically check if tables exists, if not, creates it
User.sync();
UserLeague.sync();
UserRoster.sync();
League.sync();
LeagueCharacter.sync();
LeagueEvent.sync();
CharacterEvent.sync();

/*export so any part of application that interacts with the database 
can simply require this file and call db.User, db.UserRoster etc etc */
exports.User = User;
exports.UserLeague = UserLeague;
exports.UserRoster = UserRoster;
exports.League = League;
exports.LeagueCharacter = LeagueCharacter;
exports.LeagueEvent = LeagueEvent;
exports.CharacterEvent = CharacterEvent;


