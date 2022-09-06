<template>
  <div class="product">
    <h3>{{ detailsProduct.name }}</h3>

    <div class="sand-boxs">
      <div class="boxs">
        <img :src="detailsProduct.image" alt="pic" class="image" />
        <div class="text-box">
          <p><span>رنگ مانیتور : </span>{{ detailsProduct.details.color }}</p>
          <p><span>رم پردازنده : </span>{{ detailsProduct.details.RAM }}</p>
          <p>
            <span>سایز مانیتور : </span>{{ detailsProduct.details.size }}
            {{ detailsProduct.details.size_unit }}
          </p>
          <p class="price">{{ detailsProduct.price }} <span>تومان </span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailsProduct: this.$route.params.name,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/utility/variables.scss";

.product {
  height: auto !important;
  max-width: 1175px;
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 959px) {
    margin: 0 25px;
  }
  @media (min-width: 961px) and (max-width: 1263px) {
    max-width: 850px;
  }
  h3 {
    // ---
    margin-top: 61px;
    margin-bottom: 46px;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: right;
    // margin-bottom: 0;
    @media (min-width: 320px) and (max-width: 600px) {
      @include style-text(
        $color-secondray,
        $fontSize-secondray,
        $fontWeight-700
      );
      margin-top: 16px;

      margin-bottom: 14px;
    }
    @media (min-width: 601px) and (max-width: 960px) {
      @include style-text(
        $color-secondray,
        $fontSize-secondray + 2,
        $fontWeight-700
      );
      margin-bottom: 16px;
    }
    @media (min-width: 961px) and (max-width: 1919px) {
      @include style-text(
        $color-secondray,
        $fontSize-secondray + 6,
        $fontWeight-700
      );
    }
  }
  .sand-boxs {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
    margin-bottom: 16px;
    .boxs {
      list-style: none !important;
      border: 1px solid #c4c4c4;
      border-radius: 15px;
      width: 1175px;
      height: 351px;

      padding: 24px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 46px;
      &:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        cursor: pointer;
      }
      @media (min-width: 320px) and (max-width: 600px) {
        flex-direction: column;

        justify-content: center;
        padding: 16px;
        width: 269px;
        height: 319px;
        margin-bottom: 16px;
      }
      @media (min-width: 601px) and (max-width: 767px) {
   
        padding: 20px;
        width: 550px;
        height: 250px;
        margin-bottom: 16px;
      }
      @media (min-width: 768px) and (max-width: 959px) {
        padding: 20px;
        width: 715px;
        height: 250px;
        margin-bottom: 16px;
      }
      @media (min-width: 960px) and (max-width: 1263px) {
        width: 850px;
        height: 340px;
      }
      .image {
        width: 303px;
        height: 303px;
        object-fit: contain;
        @media (min-width: 320px) and (max-width: 600px) {
          width: 189px;
          height: 189px;
        }
        @media (min-width: 601px) and (max-width: 959px) {
          width: 220px;
          height: 220px;
        }
      }
      .text-box {
        margin-right: 96px !important;
        padding: 7px 0;
        width: 244px;
        height: 176px;
        overflow: hidden;
        text-align: right;
        @media (min-width: 320px) and (max-width: 600px) {
          margin-right: 0 !important;
        }
        @media (min-width: 601px) and (max-width: 959px) {
          width: 245px;
          height: 125px;
          margin-right: 66 !important;
        }
      
        p {
          color: #404041;
          font-size: 18px;
          font-weight: 400;
          line-height: 31px;
          letter-spacing: 0em;
          text-align: right;
          margin-bottom: 11px;

          @media (min-width: 320px) and (max-width: 600px) {
            text-align: center;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            margin-bottom: 0;
          }
          @media (min-width: 601px) and (max-width: 959px) {
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
            margin-bottom: 0;
          }
        }
        .price {
          font-size: 20px;
          font-weight: 700;
          @media (min-width: 320px) and (max-width: 600px) {
            font-size: 15px;
            font-weight: 500;
            line-height: 20px;
            margin-bottom: 12px;
          }
          @media (min-width: 601px) and (max-width: 959px) {
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            margin-bottom: 14px;
          }
        }
      }
    }
  }
}
</style>