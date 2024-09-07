import List from "@/components/playerRankings/List.vue";
import Games from "@/components/games/Games.vue";
import GamesInfo from "@/components/gameInfo/GameInfo.vue";

export default {
  name: "SectionTwo",
  components: {
    List,
    Games,
    GamesInfo,
  },

  data() {
    return {
      item: this.$store.getters.logState.item2,
      info: this.$store.getters.logState.info,
    };
  },

  methods: {
    handleClickRight(e) {
      if (this.item < this.arr.length - 1) {
        this.$store.dispatch("itemPlus2");
      }
    },
    handleClickLeft(e) {
      if (this.item > 0) {
        this.$store.dispatch("itemMinus2");
      }
    },
  },
  computed: {
    arr() {
      return this.info.filter(checkInfo);
      function checkInfo(x) {
        if (new Date() > Date.parse(x.dateFinish)) {
          return x;
        }
      }
    },
  },
};
