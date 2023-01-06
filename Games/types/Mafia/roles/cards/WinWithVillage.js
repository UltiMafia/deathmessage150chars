const Card = require("../../Card");

module.exports = class WinWithVillage extends Card {

	constructor(role) {
		super(role);

		this.winCheck = {
			priority: 0,
			check: function (counts, winners, aliveCount) {
				if (counts["Village"] == aliveCount && aliveCount > 0)
					winners.addPlayer(this.player, "Village");
			}
		};
	}

}
