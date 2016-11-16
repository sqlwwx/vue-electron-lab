export default [
  {
    path: '/',
    name: 'landing-page',
    redirect: '/photon-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/config',
    name: 'config',
    component: require('components/ConfigView')
  },
  {
    path: '/photon-page',
    name: 'photon-page',
    component: require('components/PhotonPageView'),
    children: [{
      path: 'qr-code',
      component: require('components/QrCodeView')
    }, {
      path: 'plantuml',
      component: require('components/PlantumlView')
    }, {
      path: 'video-player',
      component: require('components/VideoPlayerView')
    }, {
      path: 'bars',
      component: require('components/PhotonViews/Bars')
    }, {
      path: 'buttons',
      component: require('components/PhotonViews/Buttons')
    }, {
      path: 'button-groups',
      component: require('components/PhotonViews/ButtonsGroups')
    }, {
      path: 'forms',
      component: require('components/PhotonViews/Forms')
    }, {
      path: 'icons',
      component: require('components/PhotonViews/Icons')
    }, {
      path: 'list',
      component: require('components/PhotonViews/List')
    }, {
      path: 'navs',
      component: require('components/PhotonViews/Navs')
    }, {
      path: 'tables',
      component: require('components/PhotonViews/Tables')
    }, {
      path: '*',
      name: '404',
      component: require('components/PhotonPageView/404')
    }]
  },
  {
    path: '*',
    redirect: '/'
  }
]
