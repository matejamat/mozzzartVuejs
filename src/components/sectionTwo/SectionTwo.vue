<template>
  <section class="section_2">
    <div class="body_header">
      <div class="nav">
        <p class="bold">Completed Tournaments</p>
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
    <div class="section_2_main">
      <div class="main_content_2">
        <div class="gamesInfo">
          <GamesInfo :itemList="item" :infoProp="arr" :readMore="true" />
        </div>

        <Games
          :left="'left2'"
          :right="'right2'"
          :itemList="item"
          :infoProp="arr"
        />
      </div>
      <List :itemList="item" :infoProp="arr" />
    </div>
  </section>
</template>

<script type="application/javascript" src="./main"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "SectionTwo.scss";
</style>
