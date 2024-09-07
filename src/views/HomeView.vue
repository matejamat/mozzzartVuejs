<template>
  <div class="home" :key="load">
    <SectionOne :key="load2"/>
    <SectionTwo :key="load3"/>
  </div>
</template>

<script>
import SectionOne from "@/components/sectionOne/SectionOne.vue";
import SectionTwo from "@/components/sectionTwo/SectionTwo.vue";

import axios from "axios";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    SectionOne,
    SectionTwo,
  },
  data() {
    return {
      load: 1,
      load2: 999,
      load3: 9999,
    };
  },
  methods: {
    async getAnswer() {
      const { data } = await axios.get("data.json");

      this.$store.commit("push", {
        amount: data.info,
      });
    },
  },
  mounted() {
    this.getAnswer();
  },

  computed: {
    check() {
      return [this.$store.getters.logState.info];
    },
    check2() {
      return [this.$store.getters.logState.item];
    },
    check3() {
      return [this.$store.getters.logState.item2];
    },
  },
  watch: {
    check(newCount) {
      this.load++;
    },
    check2(newCount) {
      this.load2++;
    },
    check3(newCount) {
      this.load3++;
    },
  },
};
</script>

<style scoped>
.home {
  margin: 5px;
}
@media screen and (max-width: 999px) {
  .home {
    margin: 0px;
  }
}
</style>
