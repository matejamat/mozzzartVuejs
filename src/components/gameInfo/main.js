export default {
  name: "GameInfo",

  props: {
    // msg: String
    itemList: Number,
    infoProp: Array,
    readMore: Boolean,
  },

  data() {
    return {
      info: this.infoProp,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
      isEnded: 1,
      endDate: Date.parse(this.infoProp[this.itemList].dateFinish),
      startDate: Date.parse(this.infoProp[this.itemList].dateStart),
      live: 0,
      startIn: 0,
      finished: 0,
      monthF: new Date(this.infoProp[this.itemList].dateFinish).getMonth() + 1,
      dayF: this.infoProp[this.itemList].dateFinish.substring(0,this.infoProp[this.itemList].dateFinish.indexOf(" ")),
      monthS: new Date(this.infoProp[this.itemList].dateStart).getMonth() + 1,
      dayS: this.infoProp[this.itemList].dateStart.substring(0,this.infoProp[this.itemList].dateFinish.indexOf(" ")),
    };
  },

  methods: {
    updateRemaining(distance) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    },
    readMoreBtn(e) {
      this.$store.commit("itemReadMore", {
        amount: this.infoProp[this.itemList].id,
      });
      this.$router.push("readMore");
    },

    tick() {
      const currentTime = new Date();
      const distance = Math.max(this.endDate - currentTime, 0);
      this.updateRemaining(distance);

      if (distance === 0) {
        clearInterval(this.timer);
        this.isEnded = true;
      }
    },
  },
  mounted() {
    this.tick();
    this.timer = setInterval(this.tick.bind(this), 1000);
    if (this.endDate - new Date() > 0 && this.startDate - new Date() < 0) {
      this.live = 1;
      this.startIn = 0;
      this.finished = 0;
    }
    if (this.startDate - new Date() > 0) {
      this.live = 0;
      this.startIn = 1;
      this.finished = 0;
    }
    if (this.endDate - new Date() < 0) {
      this.live = 0;
      this.startIn = 0;
      this.finished = 1;
    }
  },

  destroy() {
    clearInterval(this.timer);
  },
};
