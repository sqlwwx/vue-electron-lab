export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/photon-page',
    name: 'photon-page',
    component: require('components/PhotonPageView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
