import List from "@/components/playerRankings/List.vue";
import { eventBus } from "../../main";
export default {
  name: "Header",
  components: {
    List,
  },

  methods: {
    log(e) {
      // sending the event
      eventBus.$emit("custom-event");
      this.$store.dispatch("log");
    },
  },

  computed: {
    count() {
      return this.$store.getters.logState.count;
    },
  },
};
