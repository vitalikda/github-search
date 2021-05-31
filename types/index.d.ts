import { NuxtAxiosInstance } from '@nuxtjs/axios'

interface GitHabApi {
  getRepositories<T = any>(
    searchQuery: string,
    cursor: string | null
  ): Promise<T>
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
    $github: GitHabApi
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance
    $github: GitHabApi
  }

  interface Context {
    $axios: NuxtAxiosInstance
    $github: GitHabApi
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $axios: NuxtAxiosInstance
    $github: GitHabApi
  }
}
