<template>
<div>
    <header>
        <div class="nav">
            <a href="#">Betting</a>
            <a href="#">Livebet</a>
            <a class="tournamentsSelected" href="#">Casino</a>
            <a href="#">Lotto</a>
            <a href="#">Lucky S.6</a>
            <a href="#"><img src="./img/Group 171.png" alt="">&ensp;Virtuals</a>
            <a href="#">Promotions</a>
          </div>
          <div class="logo_div">
            <img class="logo" src="./img/logo.svg" alt="">
          </div>
          <div class="nav_right">
            <a href="#">Theme dark
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 10 8" fill="none">
                <path opacity="0.3" d="M9.10606 0.661314L10 1.68018L5 7.37891L5.05923e-08 1.68018L0.893939 0.661313L5 5.34118L9.10606 0.661314Z" fill="white"/>
                </svg></a>
            <a href="#">Decimal Odds
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 10 8" fill="none">
                    <path opacity="0.3" d="M9.10606 0.661314L10 1.68018L5 7.37891L5.05923e-08 1.68018L0.893939 0.661313L5 5.34118L9.10606 0.661314Z" fill="white"/>
                    </svg></a>
            <a href="#">Font size + / -</a>
            <a href="#">Settings</a>
            <a href="#">Need Help?</a>
            <a href="#"><img src="./img/Group 164.png" alt=""></a>
          </div>
    </header>
    <section class="header_section">
        <div class="register">
            <a class="bold" href="#">Register</a>
          </div>
          <div class="nav_middle bold">
            <a href="#">Slot Games</a>
            <a href="#">Live Games</a>
            <a href="#">Fast Games</a>
            <a class="tournamentsSelected" href="#">Tournaments</a>
          </div>
          <div class="login">
            <a v-if="count === 0" @click="log" class="bold" href="#">Login</a>
            <a v-if="count === 1" @click="log" class="bold" href="#">Logout</a>
          </div>
    </section>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'Header.scss';
</style>

<script type="application/javascript" src="./main">
</script>