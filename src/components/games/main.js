import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { eventBus } from "../../main";

import "swiper/css/swiper.css";

export default {
  name: "Games",

  props: {
    itemList: Number,
    left: String,
    right: String,
    infoProp: Array,
  },

  data() {
    return {
      gamesList: this.infoProp,
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 27,
        grabCursor: true,
        navigation: {
          nextEl: "#" + this.right,
          prevEl: "#" + this.left,
          disabledClass: "none",
        },
        watchOverflow: true,
      },
    };
  },

  created() {
    eventBus.$on("custom-event", () => {
      this.$forceUpdate();
    });
  },

  components: {
    Swiper,
    SwiperSlide,
  },
};
