<template>
  <div class="content_1_wrapper">
    <div class="info">
      <p class="prize">{{ info[itemList].prize }}</p>
      <p class="white">{{ info[itemList].name }}</p>
      <p class="beginsText" :class="{ begins: live || finished }">Begins in</p>
      <div class="live" v-if="live || startIn">
        <p v-if="live" class="red_live">LIVE</p>
        <div class="time">
          <div>
            <p class="gradient bold">
              {{ days }}
            </p>
            <P class="live_small">DAYS</P>
          </div>
          <p class="dots">:</p>
          <div>
            <p class="gradient bold">{{ hours }}</p>
            <P class="live_small">HOURS</P>
          </div>
          <p class="dots">:</p>
          <div>
            <p class="gradient bold">{{ minutes }}</p>
            <P class="live_small">MINS</P>
          </div>
          <p class="dots">:</p>
          <div>
            <p class="gradient bold">{{ seconds }}</p>
            <P class="live_small">SECS</P>
          </div>
        </div>
      </div>

      <div class="live" v-if="finished">
        <p>{{dayS}}.{{monthS}}. - {{dayF}}.{{monthF}}. <span class="green">Completed</span></p>
      </div>
    </div>
    <div>
      <button
        v-if="readMore"
        @click="readMoreBtn"
        class="read_more"
      >
        Read more
        <!-- <router-link to="/readMore">Read more</router-link> -->
      </button>
      <button v-if="live || startIn" class="participate">Participate</button>
    </div>
  </div>
</template>

<script type="application/javascript" src="./main"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "GameInfo.scss";
</style>
