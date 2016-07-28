export default function (router) {
  router.map({
    'home': {
      component (resolve) {
        require(['./pages/msgcenter/msgcenter'], resolve)
      }
    },
    'salemgr': {
      component (resolve) {
        require(['./pages/salemgr/salemgr'], resolve)
      }
    },
    'qutation': {
      component (resolve) {
        require(['./pages/salemgr/qutation'], resolve)
      }
    },
    'qutationedit': {
      component (resolve) {
        require(['./pages/salemgr/qutationedit'], resolve)
      }
    }
  })
  //  router.redirect({
  //  '/': '/home',
  //  '*': '/home'
  //  })
}

