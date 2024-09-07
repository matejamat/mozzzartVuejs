export default {
  name: "playerRankings",
  props: {
    itemList: Number,
    infoProp: Array
  },
  data() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    return {
      rankings: this.infoProp,

      itemHeight: 330,
    };
  },

  computed: {
    cssProps() {
      return {
        itemHeightProp: "height:" + this.itemHeight + "px",
      };
    },
    count() {
      return this.$store.getters.logState.count;
    },
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount === 1) {
        this.itemHeight = 527;
      } else {
        this.itemHeight = 330;
      }
    },
  },

  created() {
    if (this.$store.getters.logState.count === 1) {
      this.itemHeight = 527;
    } else {
      this.itemHeight = 330;
    }
  },
};
