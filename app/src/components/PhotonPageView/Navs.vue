<template>
<div class="pane pane-sm sidebar">
  <nav class="nav-group">
    <h5 class="nav-group-title">Favorites</h5>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/qr-code">
      <span class="icon icon-home"></span>
      Qrcode
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/404">
      <span class="icon icon-drive"></span>
      404
    </router-link>
  </nav>

  <nav class="nav-group">
    <h5 class="nav-group-title">Photon</h5>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/bars">
      <span class="icon icon-home"></span>
      Bars
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/buttons">
      <span class="icon icon-drive"></span>
      <a>Buttons</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/button-groups">
      <span class="icon icon-drive"></span>
      <a>ButtonsGroups</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/forms">
      <span class="icon icon-drive"></span>
      <a>Forms</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/icons">
      <span class="icon icon-drive"></span>
      <a>Icons</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/list">
      <span class="icon icon-drive"></span>
      <a>Lists</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/navs">
      <span class="icon icon-drive"></span>
      <a>Navs</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/tables">
      <span class="icon icon-drive"></span>
      <a>Tables</a>
    </router-link>
  </nav>

  <nav class="nav-group">
    <h5 class="nav-group-title">Tags</h5>
    <span class="nav-group-item" href="#">
      <span class="icon icon-record" style="color:#fc605b"></span>
      Red
    </span>
    <span class="nav-group-item" href="#">
      <span class="icon icon-record" style="color:#fdbc40"></span>
      Orange
    </span>
    <span class="nav-group-item" href="#">
      <span class="icon icon-record" style="color:#34c84a"></span>
      Green
    </span>
    <span class="nav-group-item" href="#">
      <span class="icon icon-record" style="color:#57acf5"></span>
      Blue
    </span>
  </nav>
</div>
</template>
<style scoped>
a {
  text-decoration: none;
  color:#000;
}
</style>
