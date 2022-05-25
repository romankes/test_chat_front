import { Environment } from './env/base'

const environment = process.env.NODE_ENV || 'development'

type TEnvironments = {
  development: Environment,
  production: Environment,
  test: Environment,
}

const environments: TEnvironments | any = {
  development: require('./env/development'),
  production: require('./env/production'),
  test: require('./env/test'),
}

export default environments[environment].default
