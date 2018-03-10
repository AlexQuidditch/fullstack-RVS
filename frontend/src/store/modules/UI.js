const state = {
  global: {
    isDark: false
  },
  toolbar: {
    clipped: false,
    drawer: true,
    rightDrawer: false
  }
};

const getters = {};

const actions = {};

const mutations = {
  setToolbarClip ( state , value ) {
    return state.toolbar.clipped = value
  },
  setToolbarRightDrawer ( state , value ) {
    return state.toolbar.rightDrawer = value
  },
  setToolbarDrawer ( state , value ) {
    return state.toolbar.drawer = value
  },
  setGlobalDark ( state , value ) {
    return state.global.isDark = value
  }
};

export default { state , getters , actions , mutations };
