# GitHub Search

<img src="./static/octocat-search.png" atl="octocat-search" wight="125" height="125" />

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Project walk through

1. Prettify layout 🦄
   - Style cards
   - Add icons
   - Add animations
1. Implement GitHub Rest API
   - Add plugin
   - Declare types
1. Add loading state to show spinner when make fetch calls
1. Add getters to share state between pages and components
1. Add search and sorting features
1. Add **topics** (repo's hashtags) to each repo object to display in its card
1. Learn about GitHub API limits 🤓
   - Search request gives only 30 repositories
   - Each API request type has hourly limit without Authentication (60 requests per hour)
   - Topics (mentioned above) have to be fetch separately for each repo: 1 call -> 30 repos, 30 calls -> topics 😔
1. Switch to GitHub GraphQL API 🚀
   - I don't think `nuxt/apollo` plugin is needed here
   - It took me a while to figure out how to implement sorting feature (I didn't find anythings in documentation). It actually pretty simple: `${search_query},sort:{sort_key}`
   - GitHub GraphQL and REST outputs different results - [looks like a known issue](https://github.community/t/graphql-search-query-format/13784)
1. Add GitHub API Token in env file:
   - I've tried a new approach using [runtime config](https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config), but couldn't make it work
   - Instead installed dotenv and added token the old way
1. Add a separate plugin for GraphQL calls
   - Query is in separate file for better readability
1. Set up pagination (view only)
1. Split code into reusable components
1. Add models
1. Ended up drawing a pretty search icon with Octocat in Figma at the end (see above and in browser's tab 😉)

> Project done in 2,5 days.

## TODO

1. Customize Bootstrap theme (prevent "another Bootstrap site" feeling)
1. Add API wrapper (github token is exposed atm)
1. Add tests 😅
1. Add lazy loading for pagination
   - Load next batch of repos when close to last page
   - Use cursor key in the last repo
1. Detect and inform user of API calls limit (rate info is in response headers)

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
