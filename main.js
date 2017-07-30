var _ = require('lodash');

module.exports.loop = function () {
	if (Game.creeps.length < 1) {
		console.log("creating creep")
		var creepName = Game.spawns["Spawn1"].createCreep([MOVE, WORK, CARRY], "creep0");
		console.log(creepName);
		console.log();
	} else {
		console.log(Game.creeps["creep0"]);
	}
};
