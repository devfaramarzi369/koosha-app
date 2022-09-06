<template>
  <div class="about-us">
    <h1>درباره ما</h1>
    <p>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
      هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
      .حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/utility/variables.scss";

.about-us {
  height: auto !important;
  max-width: 1175px;
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 960px) {
    margin: 0 25px;
  }
  @media (min-width: 961px) and (max-width: 1263px) {
      max-width: 850px;

  }
  h1 {

    @include style-text($color-secondray, $fontSize-title, $fontWeight-700);
    line-height: 83px;
    letter-spacing: 0em;
    text-align: right;
    margin-bottom: 0;
    @media (min-width: 320px) and (max-width: 600px) {
      @include style-text(
        $color-secondray,
        $fontSize-title - 20,
        $fontWeight-700
      );
    }
    @media (min-width: 601px) and (max-width: 960px) {
      @include style-text(
        $color-secondray,
        $fontSize-title - 15,
        $fontWeight-700
      );
    }
    @media (min-width: 961px) and (max-width: 1919px) {
      @include style-text(
        $color-secondray,
        $fontSize-title - 10,
        $fontWeight-700
      );
    }
  }
  p {
    @include style-text($color-secondray, $fontSize-secondray, $fontWeight-400);
    line-height: 41px;
    letter-spacing: 0em;
    text-align: justify;
    text-justify: inter-word;
    @media (min-width: 320px) and (max-width: 600px) {
      @include style-text($color-secondray, $fontSize-primary, $fontWeight-400);
    }
    @media (min-width: 601px) and (max-width: 960px) {
      @include style-text($color-secondray, $fontSize-secondray, $fontWeight-400);
    }
    
  }
}
</style>