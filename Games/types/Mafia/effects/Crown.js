const Effect = require("../Effect");

module.exports = class Crown extends Effect {
  constructor(lifespan, meetingName) {
    super("Crown");
    this.lifespan = lifespan || Infinity;
    this.meetingName = meetingName || "Village";
  }

  apply(player) {
    super.apply(player);

    if (player.role.meetings[this.meetingName]) {
      player.role.meetings[this.meetingName].voteWeight = Infinity;
    }
  }

  remove() {
    if (this.player.role.meetings[this.meetingName]) {
      this.player.role.meetings[this.meetingName].voteWeight = 1;
    }

    super.remove();
  }
};
