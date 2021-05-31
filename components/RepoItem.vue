<template>
  <b-card class="w-full mb-4" no-body>
    <a :href="repo.url" target="_blank" rel="noopener noreferrer">
      <b-card-header class="d-md-flex pt-4 px-md-5">
        <div>
          <h4 class="card-title">{{ repo.name }}</h4>
          <div class="d-flex card-subtitle text-muted mb-3 mb-md-0">
            <span v-if="repo.lang" class="align-icon mr-2">
              <language-icon />
              {{ repo.lang }}
            </span>
            <b-avatar
              size="sm"
              class="mx-1"
              badge-variant="white"
              :src="repo.owner.avatar"
            ></b-avatar>
            <b-link
              :href="repo.owner.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ repo.owner.username }}
            </b-link>
          </div>
        </div>
        <div class="ml-auto d-flex">
          <span class="align-icon">
            <star-icon />
            {{ repo.stars | kFilter }}
          </span>
          <span class="align-icon ml-3">
            <fork-icon />
            {{ repo.forks | kFilter }}
          </span>
          <span class="align-icon ml-3">
            <issue-icon />
            {{ repo.issues | kFilter }}
          </span>
        </div>
      </b-card-header>

      <b-card-body class="py-4 px-md-5">
        <b-card-text
          v-if="!repo.description && !!repo.topics"
          class="font-italic"
        >
          No description, website, or topics provided.
        </b-card-text>

        <b-card-text>{{ repo.description }}</b-card-text>

        <b-card-text class="">
          <span v-if="!!repo.topics">
            <b-badge
              v-for="(topic, index) in repo.topics.slice(0, 6)"
              :key="index"
              :style="{ 'background-color': bColors[index] }"
              class="mr-1"
            >
              # {{ topic }}
            </b-badge>
          </span>
        </b-card-text>
      </b-card-body>
    </a>
  </b-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import LanguageIcon from '~/components/icons/Language.vue'
import StarIcon from '~/components/icons/Star.vue'
import ForkIcon from '~/components/icons/Fork.vue'
import IssueIcon from '~/components/icons/Issue.vue'

export default Vue.extend({
  components: { LanguageIcon, StarIcon, ForkIcon, IssueIcon },

  filters: {
    kFilter(num: number) {
      return num > 999 ? (num / 1000).toFixed(1) + 'k' : num
    },
  },

  props: {
    repo: {
      type: Object,
      default: () => ({}),
      required: true,
    } as PropOptions<{}>,
  },

  data: () => ({
    bColors: ['#F87171', '#FBBF24', '#10B981', '#6366F1', '#8B5CF6', '#EC4899'],
  }),
})
</script>

<style scoped>
.card > a {
  color: inherit;
  text-decoration: none;
}
.card:hover {
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.align-icon {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.align-icon svg {
  margin-right: 0.25rem !important;
  width: 1.25rem;
  height: 1.25rem;
}
</style>
