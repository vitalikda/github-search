<template>
  <div>
    <div class="my-3 text-left text-monospace">
      Found {{ reposTotal | filterNum }} repositories <span>🙌</span>
    </div>
    <repo-item v-for="repo in items" :key="repo.id" :repo="repo" />
    <div class="mt-3 d-flex justify-content-between">
      <b-btn
        class="align-icon"
        variant="link"
        size="sm"
        :disabled="page <= 1"
        @click="prevPage"
      >
        <chevron-left-icon class="left" />Previous
      </b-btn>
      <b-btn variant="link" size="sm" disabled> Page {{ page }} </b-btn>
      <b-btn
        :disabled="page >= repos.length"
        class="align-icon"
        variant="link"
        size="sm"
        @click="nextPage"
      >
        Next<chevron-left-icon class="right" />
      </b-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

import ChevronLeftIcon from '~/components/icons/ChevronLeft.vue'
import RepoItem from '~/components/RepoItem.vue'

export default Vue.extend({
  components: { ChevronLeftIcon, RepoItem },

  filters: {
    filterNum(number: number) {
      return new Intl.NumberFormat().format(number)
    },
  },

  data: () => ({
    page: 1,
    items: [],
  }),

  computed: {
    ...mapGetters(['reposTotal', 'repos', 'paginatedRepos']),
  },

  watch: {
    repos: {
      handler() {
        this.items = this.paginatedRepos[0]
      },
      immediate: true,
    },
    page: {
      handler(newPage) {
        this.items = this.paginatedRepos[newPage - 1]
      },
      immediate: true,
    },
  },

  methods: {
    prevPage() {
      if (this.page > 1) this.page -= 1
    },

    nextPage() {
      if (this.page < this.repos.length) this.page += 1
    },
  },
})
</script>

<style scoped>
.align-icon {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  text-decoration: none;
}
.align-icon svg {
  width: 0.9rem;
  height: 0.9rem;
}
.align-icon svg.left {
  margin-right: 0.25rem !important;
}
.align-icon svg.right {
  margin-left: 0.25rem !important;
  transform: rotate(180deg);
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>
