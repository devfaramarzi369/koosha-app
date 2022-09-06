<template>
  <div>
    <footer class="footer">
      <div class="footer-wrap">
        <div class="footer-item">
          <div class="box-logoImage">
            <img src="@/static/images/cropped-logo-desc.png" alt="logo" />
          </div>
        </div>
        <div class="footer-item">
          <ul class="items">
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
        <div class="footer-item">
          <ul class="items">
            <li class="item">
              <router-link active-class="active" class="link-a" to="#" exact
                ><span>تلفن : </span>09123456789</router-link
              >
            </li>

            <li class="item">
              <router-link active-class="active" class="link-a" to="#" exact
                ><span>ایمیل : </span>abc@gmail.com</router-link
              >
            </li>
          </ul>
        </div>

        <div class="footer-item">
          <ul class="items social-media">
            <li class="item item-media">
              <router-link active-class="active" class="link-a" to="#" exact
                ><i class="bi bi-instagram icon-media"></i
              ></router-link>
            </li>

            <li class="item item-media">
              <router-link active-class="active" class="link-a" to="#" exact
                ><i class="bi bi-linkedin icon-media"></i>
              </router-link>
            </li>
            <li class="item item-media">
              <router-link active-class="active" class="link-a" to="#" exact
                ><i class="bi bi-whatsapp icon-media"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/utility/variables.scss";

.footer {
  height: 174px;
  width: 100%;
  background-color: $bgColor-footer;
  @media (min-width: 320px) and (max-width: 959px) {
    height: auto;
    padding: 16px 0;
  }
  .footer-wrap {
    width: 1175px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (min-width: 320px) and (max-width: 600px) {
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    @media (min-width: 601px) and (max-width: 769px) {
      width: 100%;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      
    }
    @media (min-width: 770px) and (max-width: 959px) {
      width: 100%;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 25px;
    }
    @media (min-width: 960px) and (max-width: 1263px) {
      width: 100%;
      max-width: 850px;
    }
    @media (min-width: 1264px) and (max-width: 1919px) {
      width: 100%;
      max-width: 1175px;
    }
  }
  .footer-item {
    min-width: 220px;
    @media (min-width: 320px) and (max-width: 600px) {
      width: 100%;
      max-width: 220px;
      min-width: auto;

      margin-bottom: 9px;
    }
    @media (min-width: 601px) and (max-width: 959px) {
      width: 100%;
      max-width: 180px;
      min-width: auto;

      margin-bottom: 25px;
    }
    @media (min-width: 960px) and (max-width: 1263px) {
      width: 210px !important;
      min-width: auto;
    }
    @media (min-width: 1264px) and (max-width: 1919px) {
      width: 220px !important;
      min-width: auto;
    }
    .box-logoImage {
      @media (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        height: 40px;
        text-align: center;
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
        @media (min-width: 320px) and (max-width: 600px) {
          width: 40px;
          height: 40px;
        }
        @media (min-width: 601px) and (max-width: 959px) {
          width: 45px;
          height: 45px;
        }
      }
    }
    .items {
      list-style: none;
      padding: 0;
      margin: 0;
      .item {
        @media (max-width: 600px) {
          text-align: center;
        }
        .link-a {
          color: #404041;
          text-decoration: none;
          font-size: 20px;
          font-weight: 500;
          line-height: 35px;
          letter-spacing: 0em;
          text-align: left;
          margin-bottom: 16px;
          @media (min-width: 320px) and (max-width: 600px) {
            font-size: 14px;
          }
          @media (min-width: 601px) and (max-width: 959px) {
            font-size: 15px;
          }
          &:hover {
            color: #0194da;
          }
          span {
            color: #0194da;
          }
        }
      }
    }
    .social-media {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media (min-width: 320px) and (max-width: 959px) {
        justify-content: space-evenly;
      }
      .item-media {
        margin-right: 30px;
        @media (min-width: 320px) and (max-width: 959px) {
          margin-right: 0;
        }
        .icon-media {
          color: #0194da;
          font-size: 33px;
          @media (min-width: 320px) and (max-width: 959px) {
            font-size: 25px;
          }
        }
      }
    }
  }
}
</style>