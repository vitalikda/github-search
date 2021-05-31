import type { Plugin } from '@nuxt/types'
import type { NuxtAxiosInstance } from '@nuxtjs/axios'
import queries from '@/utils/queries'

const github = (axios: NuxtAxiosInstance) => ({
  getRepositories: (searchQuery: string, cursor: string | null) =>
    axios({
      data: {
        query: queries.searchRepositories,
        variables: {
          search_query: searchQuery,
          after: cursor,
        },
      },
    }),
})

const githubPlugin: Plugin = ({ $axios }, inject) => {
  const axios = $axios.create({
    method: 'POST',
    baseURL: 'https://api.github.com/graphql',
    headers: {
      Accept: "'application/vnd.github.mercy-preview+json'",
      'Content-Type': 'application/json',
      Authorization: 'token ' + process.env.GITHUB_API_TOKEN,
    },
  })
  inject('github', github(axios))
}

export default githubPlugin
