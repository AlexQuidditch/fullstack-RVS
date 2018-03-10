class Authorization {
  setState (data) {
    return window.sessionStorage.setItem( 'auth' , JSON.stringify(data) )
  };
  removeState () {
    return window.sessionStorage.removeItem('auth')
  };
  getHeaders () {
    return JSON.parse(window.sessionStorage.getItem('auth'))
  };
  invalidateState (options) {
    const invalidateEvent = new CustomEvent('invalidateAuthState', { 'detail': options });
    return document.dispatchEvent(invalidateEvent);
  }
};

const AuthorizationService = new Authorization();

export default AuthorizationService;
