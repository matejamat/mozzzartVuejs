<template>
  <div class="gamesWidth">
    <p class="games_info">
      Tournament Games
      <span class="gradient_125">
        {{ gamesList[itemList].gamesList.length }}
      </span>
    </p>
    <div class="swiperDiv">
      <div class="swiper-button-prev" :id="left"></div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          v-for="(value, key, index) in gamesList[itemList].gamesList"
        >
          <div class="pic">
            <img v-bind:src="require(`${value.url}`)" alt="" srcset="" />
          </div>
          <p>{{ value.name }}</p>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next" :id="right"></div>
    </div>
  </div>
</template>

<script type="application/javascript" src="./main"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "Games.scss";
.swiper {
  height: auto;
  width: calc(100% - 94px);
  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 14px;
    width: auto;
    p {
      padding-top: 23px;
    }
  }
}
.swiper-button-prev,
.swiper-button-next {
  position: relative !important;
  background-color: rgba(0, 0, 0, 0.322);
  border-radius: 100%;
  height: 24px;
  width: 24px;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 10px;
  color: rgb(139, 139, 139);
  font-weight: 600;
}
.swiperDiv {
  display: flex;
  align-items: center;
}
</style>
