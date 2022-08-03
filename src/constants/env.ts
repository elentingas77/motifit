export const prodUrl = 'https://someapp.com'
export const devUrl = 'http://localhost:8081'

const ENV = {
  dev: {
    title: 'development',
    apiUrl: devUrl,
  },
  staging: {
    title: 'staging',
    apiUrl: prodUrl,
  },
  prod: {
    title: 'production',
    apiUrl: prodUrl,
  },
}

function getEnvVars(env = ''): Environment {
  if (env.indexOf('staging') !== -1) return ENV.staging
  if (env.indexOf('prod') !== -1) return ENV.prod
  return ENV.dev
}

export default getEnvVars()

interface Environment {
  title: string
  apiUrl: string
}
