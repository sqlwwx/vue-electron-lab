<template>
<div class="pane pane-sm sidebar">
  <nav class="nav-group">
    <h5 class="nav-group-title">Favorites</h5>
    <a class="nav-group-item active">
      <span class="icon icon-home"></span>
      connors
    </a>
    <span class="nav-group-item">
      <span class="icon icon-download"></span>
      Downloads
    </span>
    <span class="nav-group-item">
      <span class="icon icon-folder"></span>
      Documents
    </span>
    <span class="nav-group-item">
      <span class="icon icon-signal"></span>
      AirPlay
    </span>
    <span class="nav-group-item">
      <span class="icon icon-print"></span>
      Applications
    </span>
    <span class="nav-group-item">
      <span class="icon icon-cloud"></span>
      Desktop
    </span>
    <span class="nav-group-item">
      <span class="icon icon-cloud"></span>
      <router-link :to="$store.state.route.path + '/qr-code'">Qrcode</router-link>
    </span>
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
  <nav class="nav-group">
    <h5 class="nav-group-title">Devices</h5>
    <span class="nav-group-item">
      <span class="icon icon-drive"></span>
      Backup disk
    </span>
    <span class="nav-group-item">
      <span class="icon icon-drive"></span>
      Backup disk
    </span>
    <span class="nav-group-item">
      <span class="icon icon-drive"></span>
      Backup disk
    </span>
    <span class="nav-group-item">
      <span class="icon icon-drive"></span>
      Backup disk
    </span>
  </nav>
</div>
</template>
