const api = axios.create({
  withCredentials: true,
})

export const apiLoginUser = async (data) => {
  return await api.post('/api/login', data)
}

export const apiLogoutUser = async () => {
  return await api.get('/api/logout')
}

export const apiRefreshUser = async () => {
  return await api.get('/api/refresh')
}

// ----------------------------------------------------------------------------
// Axios interceptors
// ----------------------------------------------------------------------------
api.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const user = userStore.user

    if (user && user.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`
    }
    // Exclude creedentials for https requests
    // if (config.url.includes('https')) {
    //   config.withCredentials = false
    //   config.headers = {}
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const userStore = useUserStore()
    const user = userStore.user
    const originalConfig = error.config

    // ------------------------------------------------------------------------
    // For unauthorized requests with access and refresh token
    // ------------------------------------------------------------------------
    // if (
    //   error.response.status == 401 &&
    //   error.response.statusText === 'Unauthorized' &&
    //   user &&
    //   !originalConfig._retry &&
    //   originalConfig.url !== '/api/auth/signin' &&
    //   originalConfig.url !== '/api/auth/logout'
    // ) {
    //   originalConfig._retry = true
    //   try {
    //     const result = await axios.get('/api/auth/refresh', {
    //       withCredentials: true,
    //       headers: {
    //         Authorization: `Bearer ${user.refreshToken}`,
    //       },
    //     })
    //     user.accessToken = result.data.accessToken
    //     user.refreshToken = result.data.refreshToken

    //     return api.request(originalConfig)
    //   } catch (e) {
    //     userStore.resetUser()
    //     return Promise.reject(error)
    //   }
    // }
    // ------------------------------------------------------------------------

    // ------------------------------------------------------------------------
    // For unauthorized requests with only access token
    // ------------------------------------------------------------------------
    if (error.response.status == 401) {
      if (api.router?.currentRoute?.value?.path !== '/auth') {
        api?.router?.push({ path: '/auth' })
      }
      const userStore = useUserStore()
      userStore.resetUser()
      return Promise.reject(error)
    }
    // ------------------------------------------------------------------------
    return Promise.reject(error)
  },
)
// ----------------------------------------------------------------------------

export default api
