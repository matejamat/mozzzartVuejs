import List from "@/components/playerRankings/List.vue";
import Games from "@/components/games/Games.vue";
import GamesInfo from "@/components/gameInfo/GameInfo.vue";

export default {
  name: "SectionOne",
  components: {
    List,
    Games,
    GamesInfo,
  },
  data() {
    return {
      item: this.$store.getters.logState.item,
      info: this.$store.getters.logState.info,
    };
  },

  methods: {
    handleClickRight(e) {
      if (this.item < this.arr.length-1) {
        this.$store.dispatch("itemPlus");
      }
    },
    handleClickLeft(e) {
      if (this.item > 0) {
        this.$store.dispatch("itemMinus");
      }
    },
    handleClickItem(key) {
      this.$store.commit("itemNumber", {
        amount: key,
      });
    },
  },
  computed: {
    count() {
      return this.$store.getters.logState.count;
    },
    arr() {
      return this.info.filter(checkInfo);
      function checkInfo(x) {
        if (new Date() < Date.parse(x.dateFinish)) {
          return x;
        }
      }
    },
  },
};
