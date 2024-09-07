<template>
  <section class="section_1">
    <div class="showDesktop">
      <div class="nav">
        <a
          v-for="(value, key, index) in arr"
          href="#"
          @click="handleClickItem(key)"
          v-bind:class="{ selected: key === item }"
        >
          {{ value.name }}
        </a>
      </div>
      <div class="arrow_btns">
        <button @click="handleClickLeft" class="left_btn">
          <img src="./img/chevron-left.png" alt="" srcset="" />
        </button>
        <button @click="handleClickRight" class="right_btn">
          <img src="./img/chevron-right.png" alt="" srcset="" />
        </button>
      </div>
    </div>

    <div class="showMobile">
      <div class="navMobile">
        <p>{{ arr[item].name }}</p>
        <div>
          <button
            v-for="(value, key, index) in arr"
            href="#"
            @click="handleClickItem(key)"
            v-bind:class="{ selectedMobile: key === item }"
          ></button>
        </div>
      </div>
      <div class="arrow_btns">
        <button @click="handleClickLeft" class="left_btn">
          <img src="./img/chevron-left.png" alt="" srcset="" />
        </button>
        <button @click="handleClickRight" class="right_btn">
          <img src="./img/chevron-right.png" alt="" srcset="" />
        </button>
      </div>
    </div>

    <div v-bind:class="{ active: count }" class="section_1_main">
      <div class="gamesInfo">
        <GamesInfo :itemList="item" :infoProp="arr" :readMore="true" />
      </div>

      <div class="gamesList">
        <Games
          :left="'left1'"
          :right="'right1'"
          :itemList="item"
          :infoProp="arr"
        />
      </div>

      <div class="rankList">
        <List :itemList="item" :infoProp="arr" />
      </div>
    </div>
  </section>
</template>

<script type="application/javascript" src="./main"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "SectionOne.scss";
</style>
