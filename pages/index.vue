<template>
  <div class="container">
    <section-hero />

    <section-search />

    <section>
      <transition name="fade">
        <repo-list v-if="reposTotal && !loading" />
        <div v-else-if="loading" class="text-center">
          <b-spinner variant="primary" label="Spinning"></b-spinner>
        </div>
        <div v-else class="card-body text-center">
          <h5 class="card-title">No repos to show <span>🤷‍♂️</span></h5>
          <p class="card-text">Type something in the search box above</p>
        </div>
      </transition>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

import SectionHero from '~/components/SectionHero.vue'
import SectionSearch from '~/components/SectionSearch.vue'
import RepoList from '~/components/RepoList.vue'

export default Vue.extend({
  components: { SectionHero, SectionSearch, RepoList },

  computed: {
    ...mapGetters({ loading: 'isLoading', reposTotal: 'reposTotal' }),
  },

  beforeDestroy() {
    this.clearStore()
  },

  methods: {
    ...mapActions(['clearStore']),
  },
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
