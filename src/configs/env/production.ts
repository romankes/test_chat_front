import { baseEnv, Environment } from './base'

const env = baseEnv()

const productionEnv: Environment = {
  ...env,
  // override anything that gets added from base.
}

export default productionEnv
