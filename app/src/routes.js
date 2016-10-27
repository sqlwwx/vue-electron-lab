export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/photon-page',
    name: 'photon-page',
    component: require('components/PhotonPageView'),
    children: [{
      path: 'qr-code',
      name: 'photon-page--qr-code',
      component: require('components/QrCodeView')
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
