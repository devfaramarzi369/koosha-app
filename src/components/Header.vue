<template>
  <div>
    <header class="header">
      <nav>
        <div class="wrap">
          <div class="box-logoImage">
            <img src="@/static/images/cropped-logo-desc.png" alt="logo" />
          </div>

          <ul class="items">
            <i class="bi bi-x i"></i>

            <li class="item">
              <router-link active-class="active" class="link-a" to="/" exact
                >خانه</router-link
              >
            </li>

            <li class="item">
              <router-link
                active-class="active"
                class="link-a"
                to="/aboutus"
                exact
                >درباره ما</router-link
              >
            </li>
         
          </ul>
        </div>
        <!--  hambergur-menu  -->
        <div class="hambergur-menu">
          <i class="bi bi-list i" v-on:click="menu()"></i>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    menu() {
      // let i = 0
      let selectItems = (c) => document.querySelector(c);

      selectItems(".hambergur-menu").addEventListener("click", () => {
        selectItems(".items").classList.add("active");
      });

      selectItems(".i").addEventListener("click", () => {
        selectItems(".items").classList.remove("active");
      });

      window.addEventListener("click", (c) => {
        if (
          !selectItems(".hambergur-menu").contains(c.target)
          // &&!selectItems('.items').contains(c.target)
        ) {
          selectItems(".items").classList.remove("active");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/utility/variables.scss";

.header {
  background-color: $bgColor-header;
  border-bottom: $border-bottom-nav;
  width: 100%;
  margin: 0 auto;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    height: 65px;

    @media (min-width: 320px) and (max-width: 959px) {
      background-color: #f2f2ff !important;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding: 0 25px;
    }

    @media (min-width: 960px) and (max-width: 1263px) {
      max-width: 850px;
      height: 65px;
    }
    @media (min-width: 1264px) and (max-width: 1919px) {
      height: 75px;
      width: 1175px;
    }
    @media (min-width: 1920px) {
      height: 103px;
      width: 1440px;
    }
    .wrap {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 100%;
      height: 100%;
      @media (max-width: 960px) {
        width: 50%;
        justify-content: flex-end;
      }

      .box-logoImage {
        @media (min-width: 320px) and (max-width: 600px) {
          width: 40px;
          height: 40px;
        }
        @media (min-width: 601px) and (max-width: 959px) {
          width: 45px;
          height: 45px;
        }
        @media (min-width: 960px) and (max-width: 1263px) {
          width: 55px;
          height: 55px;
        }
        @media (min-width: 1264px) and (max-width: 1919px) {
          width: 60px;
          height: 60px;
        }
        @media (min-width: 1920px) {
          width: 68px;
          height: 68px;
        }
        img {
          width: 100%;
          object-fit: cover !important;
        }
      }

      .items {
        display: flex;
        justify-content: start;
        padding: 0 !important;
        margin-bottom: 0 !important;
        @media (min-width: 320px) and (max-width: 959px) {
          background-color: #bbc8d6;
          height: 100vh;
          width: 50%;
          max-width: 200px;
          transition: right 600ms ease-in-out;
          padding: 7px 25px !important;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
          position: relative;
          position: fixed;
          z-index: 1000;
          top: 0;
          right: -22rem;
          &.active {
            right: 0;
          }
        }
        @media (min-width: 959px) and (max-width: 1919px) {
          margin-right: 15px;
        }
        @media (min-width: 1920px) {
          margin-right: 64px;
        }
        .i {
          display: none;
          @media (min-width: 320px) and (max-width: 959px) {
            display: inline-block;

            color: $color-nav;
            margin-bottom: 11px;
          }
          @media (min-width: 320px) and (max-width: 600px) {
            font-size: 1.8rem;
          }

          @media (min-width: 601px) and (max-width: 959px) {
            font-size: 2.4rem;
          }
        }
        .item {
          min-width: 121px;
          min-height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-left: 2px solid $color-border-left;
          &:last-child {
            border-left: 1px solid transparent !important;
          }
          @media (min-width: 320px) and (max-width: 959px) {
            justify-content: flex-start;
            text-align: center;
            width: 100%;
            border-left-width: 0 !important;
            &.nav-inSlef {
              background-color: #8181a0;
              padding: 0;
            }
          }
          .link-a.active {
            color: #0194da !important;
          }
          .link-a {
       
            min-width: 90px;
            width: max-content;
            text-align: center;
            text-decoration: none !important;
            &:hover {
              color: #0194da !important;
            }
            @media (min-width: 320px) and (max-width: 959px) {
              padding: 7px;
              text-align: right;
            }
            @media (min-width: 320px) and (max-width: 359px) {
              @include style-text(
                $color-nav,
                $fontSize-nav-mob - 2,
                $fontWeight-400
              );
            }
            @media (min-width: 360px) and (max-width: 767px) {
              @include style-text(
                $color-nav,
                $fontSize-nav-mob,
                $fontWeight-400
              );
            }

            @media (min-width: 768px) and (max-width: 959px) {
              @include style-text(
                $color-nav,
                $fontSize-nav-des + 2,
                $fontWeight-400
              );
            }
            @media (min-width: 960px) and (max-width: 1919px) {
              @include style-text(
                $color-nav,
                $fontSize-nav-des - 2,
                $fontWeight-500
              );
            }

            @media (min-width: 1920px) {
              @include style-text(
                $color-nav,
                $fontSize-nav-des,
                $fontWeight-700
              );
            }
          }
        }
      }
    }

    .hambergur-menu {
      display: none;
      @media (min-width: 320px) and (max-width: 959px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .i {
        color: $color-nav;
        @media (min-width: 320px) and (max-width: 600px) {
          font-size: 2.5rem;
        }
        @media (min-width: 601px) and (max-width: 959px) {
          font-size: 2.8rem;
        }
      }
    }
  }
}

.nav-inSlef {
  display: inline-block;
  background-color: #444040 !important;
  border-radius: 40px;
  padding: 0.1rem 3.3rem;
}
</style>
