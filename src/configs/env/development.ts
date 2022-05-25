import { baseEnv, Environment } from './base'

const env = baseEnv()

const developmentEnv: Environment = {
  ...env,
  IS_PRODUCTION: false,
  IS_DEVELOPMENT: true,
}

export default developmentEnv
