<template>
  <div>
    <div class="bg-primary">
      <div class="container">
        <div class="ad-block row d-flex justify-content-center align-items-center">
          <div class="col-10">
            <ul class="d-flex justify-content-around list-unstyled p-0 m-0">
              <li class="d-flex align-items-center">
                <div class="ad-icon"><i class="fas fa-truck text-secondary"></i></div>
                <div class="ad-text ml-3">
                  <div class="ad-title text-secondary font-weight-bolder">免運費</div>
                  <div class="ad-description text-secondary font-weight-bolder">消費滿 $1000 免運費</div>
                </div>
              </li>
              <li class="d-flex align-items-center">
                <div class="ad-icon"><i class="fas fa-gift text-secondary"></i></div>
                <div class="ad-text ml-3">
                  <div class="ad-title text-secondary font-weight-bolder">加碼送</div>
                  <div class="ad-description text-secondary font-weight-bolder">每筆訂單皆附贈史奴比公仔一隻</div>
                </div>
              </li>
              <li class="d-flex align-items-center">
                <div class="ad-icon"><i class="fas fa-dollar-sign text-secondary"></i></div>
                <div class="ad-text ml-3">
                  <div class="ad-title text-secondary font-weight-bolder">多元支付</div>
                  <div class="ad-description text-secondary font-weight-bolder">官網提供多種支付方式</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-secondary">
      <div class="container">
          <div class="footer row d-flex justify-content-center align-items-center">
            <div class="col-10 d-flex justify-content-between align-items-center">
              <div class="footer-text d-flex justify-content-start align-items-center">
                <a class="mr-3 p-0" href="#"><img src="../../assets/images/logo.png" alt="" style="width: 100%;"></a>
                <span class="copyright text-primary">Copyright © 2022 Louise Huang All Rights Reserved</span>
              </div>
              <ul class="navbar-nav px-3 d-flex flex-row">
                <li class="nav-item mr-4">
                  <a class="nav-link text-primary" href="#">Product</a>
                </li>
                <li class="nav-item mr-4">
                  <a class="nav-link text-primary" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ad-block {
  height: 160px;
  .ad-icon {
    font-size: 50px;
  }
  .ad-title {
    font-size: 24px;
  }
  .ad-description {
    font-size: 14px;
  }
}
.footer {
  height: 70px;
  .footer-text a {
    width: 20%;
  }
  .copyright {
    font-size: 12px;
  }
}
</style>
