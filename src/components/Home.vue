<template>
  <div class="home">
    <h1>خانه</h1>
    <ul class="sand-boxs">
      <li
        @click="showProduct(product)"
        class="boxs"
        v-for="product in products"
        :key="product.name"
      >
        <img :src="product.image" alt="pic" class="image" />
        <div class="text-box">
          <p>{{ product.name }}</p>
        </div>
        <p class="price">{{ product.price }} <span>تومان </span></p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  async created() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      const url = "http://81.29.251.180:2345/products.json";
      await axios
        .get(url)
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
    showProduct(product) {
     
      this.$router.push({ name: "showProduct", params: { name: product } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/utility/variables.scss";

.home {
  height: auto !important;
  max-width: 1175px;
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 959px) {
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
  .sand-boxs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    @media (min-width: 320px) and (max-width: 600px) {
      flex-direction: column;
      flex-wrap: unset;
    }
    @media (min-width: 601px) and (max-width: 959px) {
      justify-content: space-evenly;
    }
    .boxs {
      border: 1px solid #c4c4c4;
      border-radius: 15px;
      width: 283px;
      height: 365px;

      // margin: 21px;
      margin-bottom: 21px;

      padding: 24px 37px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
       &:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        cursor: pointer;
      }
      @media (min-width: 320px) and (max-width: 600px) {
        justify-content: center;
        padding: 16px;
        width: 187px;
        height: 266px;
      }
      @media (min-width: 601px) and (max-width: 959px) {
        justify-content: center;
        padding: 20px;
        width: 260px;
        height: 330px;
      }
      @media (min-width: 960px) and (max-width: 1263px) {
        width: 269px;
      }
      .image {
        width: 210px;
        height: 210px;
        object-fit: contain;
        @media (min-width: 320px) and (max-width: 600px) {
          width: 138px;
          height: auto;
        }
        @media (min-width: 601px) and (max-width: 959px) {
          width: 180px;
          height: auto;
        }
      }
      .text-box {
        width: 200px;
        height: 56px;
        margin: 0 0 1em 0;
        overflow: hidden;
        @media (min-width: 320px) and (max-width: 600px) {
          width: 138px;
          height: 63px;
          margin-bottom: 0;
        }
        @media (min-width: 601px) and (max-width: 959px) {
          width: 180px;
          height: 66px;
          margin-bottom: 0;
        }

        p {
          font-size: 16px;
          font-weight: 500;
          line-height: 28px;
          letter-spacing: 0em;
          text-align: center;
          margin-bottom: 16px;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          @media (min-width: 320px) and (max-width: 600px) {
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            margin-bottom: 0;
          }
          @media (min-width: 601px) and (max-width: 959px) {
            font-size: 14px;
            font-weight: 400;
            line-height: 26px;
            margin-bottom: 0;
          }
        }
      }

      .price {
        font-size: 20px;
        font-weight: 700;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        @media (min-width: 320px) and (max-width: 600px) {
          font-size: 13px;
          font-weight: 500;
          line-height: 20px;
          margin-bottom: 12px;
        }
        @media (min-width: 601px) and (max-width: 959px) {
          font-size: 15px;
          font-weight: 500;
          line-height: 24px;
          margin-bottom: 14px;
        }
      }
    }
  }
}
</style>