export default `
query searchRepos($search_query: String!, $after: String) {
  search(query: $search_query, type: REPOSITORY, first: 70, after: $after) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          id
          updatedAt
          name
          description
          url
          diskUsage
          stargazerCount
          forkCount
          issues(states: OPEN) {
            totalCount
          }
          primaryLanguage {
            name
          }
          repositoryTopics(first: 6) {
            nodes {
              topic {
                name
              }
            }
          }
          owner {
            avatarUrl
            login
            url
          }
        }
      }
      cursor
    }
  }
}
`
