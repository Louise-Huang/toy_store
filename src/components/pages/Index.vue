<template>
  <div>
    <!-- banner -->
    <div class="banner"></div>
    <!-- home-items -->
    <div class="home-items">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="item-text-box col col-lg-5 d-flex justify-content-center align-items-center">
            <div class="item-text">
              <p class="card-title">Buzz 巴斯光年</p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, obcaecati iusto! Quasi ea sed, sint beatae laborum iusto placeat perferendis ab in id dolor maxime hic deleniti adipisci reprehenderit dolores.
              <p class="item-link"><a href="">查看更多</a></p>
            </div>
          </div>
          <div class="item-img item-img1 col-5"></div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="item-img item-img2 col-5"></div>
          <div class="item-text-box col-5 d-flex justify-content-center align-items-center">
            <div class="item-text">
              <p class="card-title">Woody 胡迪</p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aspernatur dolorem tempore eligendi, deleniti neque earum facere nihil, a, corrupti officia nulla consequuntur necessitatibus labore.
              <p class="item-link"><a href="">查看更多</a></p>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="item-text-box col-5 d-flex justify-content-center align-items-center">
            <div class="item-text">
              <p class="card-title">Pinocchio 小木偶</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet, quam ullam voluptatum eos veniam beatae temporibus! Dignissimos, sequi suscipit magni eveniet aspernatur eligendi alias laboriosam, debitis nostrum consectetur similique facilis quam quisquam. Voluptatem, expedita?
              <p class="item-link"><a href="">查看更多</a></p>
            </div>
          </div>
          <div class="item-img item-img3 col-5"></div>
        </div>
      </div>
    </div>
    <!-- home-products -->
    <div class="home-products d-flex justify-content-center">
      <ul class="d-flex">
        <li>
          <a href="">
            <div class="product-img product-img1"></div>
            <p class="product-title mt-1 mb-0">Minion 小小兵</p>
            <p class="product-subtitle mb-2">BANDAI</p>
            <p class="product-price mb-0">NT$1,380</p>
          </a>
        </li>
        <li>
          <a href="">
            <div class="product-img product-img2"></div>
            <p class="product-title mt-1 mb-0">Batman Bath Duck</p>
            <p class="product-subtitle mb-2">BANDAI</p>
            <p class="product-price mb-0">NT$1,580</p>
          </a>
        </li>
        <li>
          <a href="">
            <div class="product-img product-img3">
              <div class="sold-out-bg"></div>
              <div class="sold-out-text">Sold out</div>
            </div>
            <p class="product-title mt-1 mb-0">Astro Boy Kaws 聯名款</p>
            <p class="product-subtitle mb-2">BANDAI</p>
            <p class="product-price mb-0">NT$1,580</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- news -->
    <div class="news">
      <div class="container">
        <div class="news-header text-center mb-4">TOY STORY NEWS</div>
        <div class="row d-flex justify-content-center">
          <div class="col-5 pl-0">
            <a href="">
              <div class="news-block news-bg1">
                <div class="news-bg"></div>
                <div class="news-text-block d-flex flex-column justify-content-end align-items-start h-100 px-3">
                  <p class="news-hashtag mb-0">#展覽 #鋼彈</p>
                  <p class="news-title">PREMIUM BANDAI Online Showroom 現已開幕！</p>
                  <p class="news-text mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut exercitationem alias quod tempora dolor perferendis eum reiciendis praesentium molestias.</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-5 pr-0">
            <a href="">
              <div class="news-block news-bg2">
                <div class="news-bg"></div>
                <div class="news-text-block d-flex flex-column justify-content-end align-items-start h-100 px-3">
                  <p class="news-hashtag mb-0">#KAWS #聯名</p>
                  <p class="news-title">強強聯手！KAWS × The North Face 合作系列即將登場！</p>
                  <p class="news-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam temporibus aliquid sequi iure mollitia aut possimus culpa quibusdam, magni eveniet!</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  margin-top: 56px;
  height: 600px;
  background: url('../../assets/images/lego_banner.jpg') center center no-repeat;
  background-size: cover;
}
.home-items {
  margin-top: 60px;
  margin-bottom: 60px;
  .item-img, .item-text-box {
    height: 500px;
    border-radius: 1.25rem;
  }
  .item-text-box {
    padding-left: 90px;
    padding-right: 90px;
    .card-title {
      font-size: 32px;
      line-height: 48px;
      font-weight: bold;
    }
    .item-link {
      margin-top: 16px;
      a {
        font-size: 14px;
        color: #AC8A46;
      }
    }
  }
  .item-img1 {
    background: url('../../assets/images/buzz.jpg') 0 center no-repeat;
    background-size: cover;
  }
  .item-img2 {
    background: url('../../assets/images/woody1.jpg') center center no-repeat;
    background-size: cover;
  }
  .item-img3 {
    background: url('../../assets/images/pinocchio.jpg') 90% center no-repeat;
    background-size: cover;
  }
}
.home-products {
  background-color: #ded9d2;
  padding-top: 40px;
  padding-bottom: 40px;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
      a {
        color: #555;
        display: inline-block;
        text-decoration: none;
      }
      .product-title {
        font-size: 24px;
        line-height: 36px;
        font-weight: 600;
      }
      .product-subtitle, .product-price {
        font-size: 16px;
        line-height: 24px;
        font-weight: 300;
      }
    }
    .product-img {
      width: 298px;
      height: 400px;
      border-radius: 0.5rem;
      position: relative;
      .sold-out-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 24px;
        line-height: 36px;
        font-weight: 600;
        color: #fff;
      }
      .sold-out-bg {
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.3;
        border-radius: 0.5rem;
      }
    }
    .product-img1 {
      background: url('../../assets/images/minion2.jpg') right no-repeat;
      background-size: cover;
    }
    .product-img2 {
      background: url('../../assets/images/duck.jpg') center no-repeat;
      background-size: cover;
    }
    .product-img3 {
      background: url('../../assets/images/kaws1.jpg') 100% no-repeat;
      background-size: cover;
    }
  }
}
.news {
  padding-top: 40px;
  padding-bottom: 40px;
  .news-header {
    font-size: 32px;
    color: #A93B20;
    font-weight: 700;
  }
  .news-block {
    height: 300px;
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;
    .news-bg {
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.15;
      border-radius: 0.5rem;
    }
    .news-text-block {
      color: #fff;
      font-weight: 600;
      position: absolute;
      bottom: 0;
      left: 0;
      .news-title {
        font-size: 24px;
        margin-bottom: 10px;
      }
      .news-text {
        height: 0;
        transition: height .5s;
        transition-duration: .5s;
        &:before {
          content: '';
          display: block;
          width: 0;
          height: 5px;
          margin-bottom: 10px;
          background-color: #fff;
          transition: width .5s .3s;
          transition-duration: .5s;
        }
      }
      .news-hashtag, .news-text {
        font-size: 16px;
      }
    }
    &:hover {
      .news-text {
        height: 35%;
        &::before {
          width: 40%;
        }
      }
    }
  }
  .news-bg1 {
    background: url('../../assets/images/gundam3.jpg') right no-repeat;
    background-size: cover;
  }
  .news-bg2 {
    background: url('../../assets/images/kaws2.jpg') right no-repeat;
    background-size: cover;
  }
}
</style>
