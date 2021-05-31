<template>
  <section class="d-flex w-100 mb-4">
    <div>
      <b-form inline @submit.prevent="handleSearch">
        <b-input-group>
          <template #default>
            <label class="sr-only" for="search">Search</label>
            <search-icon />
            <b-form-input
              id="search"
              v-model="query"
              type="search"
              :class="{ 'is-invalid': error }"
              placeholder="Search..."
            ></b-form-input>
          </template>
          <template #append>
            <b-btn variant="outline-primary" @click.prevent="handleSearch">
              Search
            </b-btn>
          </template>
        </b-input-group>
        <span v-if="error" class="d-block invalid-feedback">
          {{ error }}
        </span>
      </b-form>
    </div>
    <div class="ml-auto">
      <b-form-select
        v-model="sortBy"
        :options="options"
        @change="handleSearch"
      ></b-form-select>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

import SearchIcon from '~/components/icons/Search.vue'

export default Vue.extend({
  components: { SearchIcon },

  data() {
    return {
      error: '',
      query: '',
      sortBy: 'stars',
      options: [
        { value: 'stars', text: 'Stars' },
        { value: 'forks', text: 'Forks' },
        { value: 'help-wanted-issues', text: 'Issues' },
        { value: 'updated', text: 'Updated' },
      ],
    }
  },

  methods: {
    ...mapActions(['getRepos']),

    validate(q: string) {
      if (q.length > 2) return true
      this.setError('🙅‍♂️ Enter at least 3 letters')
      return false
    },

    setError(e: string) {
      this.error = e
    },

    formatQuery(query: string, sortBy: string) {
      return `${query},sort:${sortBy}`
    },

    async handleSearch() {
      const { query, sortBy } = this
      if (this.validate(query)) {
        this.setError('')
        const formattedQuery = this.formatQuery(query, sortBy)
        await this.getRepos(formattedQuery)
      }
    },
  },
})
</script>

<style scoped>
.form-inline {
  position: relative;
}

.form-inline svg {
  position: absolute;
  z-index: 4;
  top: 9px;
  left: 10px;
  color: #6c757d;
}

.form-inline input {
  padding-left: 2rem !important;
  border-bottom-left-radius: 0.25rem !important;
  border-top-left-radius: 0.25rem !important;
}
</style>
