<template>
    <footer> <!-- skloni boju -->
        <div class="footer_wrapper">
        <p class="get_notified">Get notified</p>
        <p class="footer_text">Sign up for our mailing list for first-hand information about the latest tournaments we have prepared for<br />you!</p>
        <div class="subscribe">
            <input placeholder="E-mail" class="input" type="text">
            <button class="participate">Subscribe</button>
        </div>
        <div class="assistance">
            <img src="./contact.svg" alt="">
            &ensp;
            <p>
                Need assistance?
            </p>
            <span class="assistance_span">
                <p>
                    Call:&ensp;
                    <span class="yellow_number">0800 005 000</span>
                    &ensp;(08-21h)
                </p>
            </span>
        </div>
    </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'Footer.scss';
</style>
