import { Axios , Cancel , CancelToken , isCancel , spread } from 'axios';

import AuthorizationService from './authorization.js';
import EnvironmentService from "./environment.js";

class Api extends Axios {
  constructor (...args) {
    super(...args);
    this.defaults = {
      baseURL: EnvironmentService.CurrentAPI + '/ru/api/'
    };
    this.interceptors.request.use( request => {
      request.headers = AuthorizationService.getHeaders();
      return request;
    }, error => {
      console.error( 'REQUEST error -' , error );
      return Promise.reject(error);
    });
    this.interceptors.response.use( response => {
      return response;
    }, error => {
      console.error( 'RESPONSE error -' , error );
      return Promise.reject(error);
    });
  }
  Cancel () {
    return Cancel
  };
  CancelToken () {
    return CancelToken
  }
  isCancel () {
    return isCancel
  }
  spread () {
    return spread
  }
  all (promises) {
    return Promise.all(promises);
  }
}

const API = new Api();

export default API;
