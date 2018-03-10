const productionApiURL = '';
const developmentApiURL = '';

const productionWebSocketURL = '';
const developmentWebSocketURL = '';

class Environment {
  constructor () {
    this.development = 'development';
    this.production = 'production';
  };
  get isDevelopment () {
    return process.env.NODE_ENV === this.development
  };
  get isProduction () {
    return process.env.NODE_ENV === this.production
  };
  get CurrentAPI () {
    return this.CurrentEnvironmentApi
  };
  get CurrentWebSocket () {
    return this.CurrentEnvironmentWebSocket
  };
  get CurrentEnvironmentApi () {
    return this.isProduction ? productionApiURL : developmentApiURL
  };
  get CurrentEnvironmentWebSocket () {
    return this.isProduction ? productionWebSocketURL : developmentWebSocketURL
  }
};

const EnvironmentService = new Environment();

export default EnvironmentService;
