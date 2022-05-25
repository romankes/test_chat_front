import { baseEnv, Environment } from './base'

const env = baseEnv()

const testEnv: Environment = {
  ...env,
  // override anything that gets added from base.
  IS_PRODUCTION: false,
  IS_DEVELOPMENT: true,
  IS_TESTING: true,
}

export default testEnv
