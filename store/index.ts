import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Repositories } from '@/models/repositories'
import chunk from '@/utils/chunk'

export const state = () => ({
  loading: false as boolean,
  repos: [] as Array<{}>,
  reposTotal: 0 as number,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isLoading: (state) => state.loading,
  repos: (state) => state.repos,
  reposTotal: (state) => state.reposTotal,
  paginatedRepos: (state) => chunk(state.repos, 7),
}

export const mutations: MutationTree<RootState> = {
  SET_LOADING: (state, prop: boolean) => (state.loading = prop),
  CLEAR_LOADING: (state) => (state.loading = false),
  SET_REPOS: (state, repos: []) => (state.repos = repos),
  CLEAR_REPOS: (state) => (state.repos = []),
  SET_REPOS_TOTAL: (state, count: number) => (state.reposTotal = count),
  CLEAR_REPOS_TOTAL: (state) => (state.reposTotal = 0),
}

export const actions: ActionTree<RootState, RootState> = {
  async getRepos({ commit }, query: string) {
    commit('SET_LOADING', true)
    const res = await this.$github.getRepositories(query, null)
    const repos = new Repositories(res)

    commit('SET_REPOS', repos.list)
    commit('SET_REPOS_TOTAL', repos.count)
    commit('SET_LOADING', false)
  },
  clearStore({ commit }) {
    commit('CLEAR_LOADING')
    commit('CLEAR_REPOS')
    commit('CLEAR_REPOS_TOTAL')
  },
}
