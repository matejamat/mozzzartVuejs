<template>
  <div>
    <div v-if="count === 1" class="list_rankings">
      <div class="player_rankings">
        <p>Player Rankings</p>
      </div>
      <div class="shadow"></div>
      <div :style="cssProps.itemHeightProp" class="list_rankings_div">
        <div
          v-for="(value, key, index) in rankings[itemList].rankings"
          class="list_item"
        >
          <div class="list_number">
            <p>{{ value.rank }}</p>
            <p>{{ value.name }}</p>
          </div>
          <p>{{ value.number }}</p>
          <p class="green">{{ value.prize }}</p>
        </div>
      </div>
    </div>
    <div v-if="count === 0" class="list_rankings">
      <div :style="cssProps.itemHeightProp" class="login_div">
        <img src="./img/info.svg" alt="" />
        <p class="loginHeader">Player Rankings</p>
        <div>
          <p>Players ranking list is availiable for registered</p>
          <p>users only, please Log in or Register for full access.</p>
        </div>
        <button class="participate">Login</button>
        <p>Have no account? Register</p>
      </div>
    </div>
  </div>
</template>

<script type="application/javascript" src="./main"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "List.scss";
</style>
