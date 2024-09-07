<template>
    <div class="readMore">
      <button @click="$router.push('/')" class="read_more">  BACK</button>
      <div class="gamesInfo">
        <GamesInfo :itemList="item" :infoProp="info" :readMore="false" />
      </div>

      <div class="gamesList">
        <Games
          :left="'left1'"
          :right="'right1'"
          :itemList="item"
          :infoProp="info"
        />
      </div>
      <div class="info">
        <div class="text">
          <p>
            To take part in the tournament, click on the button "Participate"
            before making bets. The next step is qualification: 10 rounds from
            real balance. Choose any tournament game and play the stated amount
            of rounds in real money game mode. The counter in the widget will
            tell you how many qualification rounds left. After qualification is
            passed, each of your €1 of wins for the real balance bets will bring
            you a 1 point score. The more wins you get, the higher is your place
            in the tournament table. Good luck!
          </p>
          <p>
            To take part in the tournament, click on the button "Participate"
            before making bets. The next step is qualification: 10 rounds from
            real balance. Choose any tournament game and play the stated amount
            of rounds in real money game mode. The counter in the widget will
            tell you how many qualification rounds left.
          </p>
          <p>
            To take part in the tournament, click on the button "Participate"
            before making bets. The next step is qualification: 10 rounds from
            real balance.
          </p>
        </div>
        <div class="rankList">
          <List :itemList="item" :infoProp="info" />
        </div>
      </div>
    </div>
</template>

<script>
import List from "@/components/playerRankings/List.vue";
import Games from "@/components/games/Games.vue";
import GamesInfo from "@/components/gameInfo/GameInfo.vue";

// @ is an alias to /src

export default {
  name: "readMore",
  components: {
    List,
    Games,
    GamesInfo,
  },
  data() {
    return {
      item: this.$store.getters.logState.itemRead,
      info: this.$store.getters.logState.info,
    };
  },
};
</script>

<style scoped>
* {
  color: rgb(139, 139, 139);
  font-weight: 600;
}
.info {
  display: flex;
  flex-direction: row;
}
.text{
  padding: 15px;
}
.readMore {
  background-image: url(../components/sectionOne/img/dt.png);
  background-color: #313540;
  background-position: top; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: auto auto; /* Resize the background image to cover the entire container */
  margin: 5px;
  padding: 0 20%;
}
.read_more {
  border: none;
  background-color: transparent;
  color: rgb(230, 230, 230);
  padding: 13px 51px;
  font-size: 18px;
}
.read_more:hover {
cursor: pointer;
}
</style>
