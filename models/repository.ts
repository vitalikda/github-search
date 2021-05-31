import { Owner } from './owner'

export class Repository {
  id: string
  name: string
  url: string
  description: string | null
  lang: string | null
  owner: Owner
  size: number
  stars: number
  forks: number
  issues: number
  topics: Array<String> = []
  updatedAt: Date

  constructor(node: any) {
    this.id = node.id
    this.name = node.name
    this.description = node.description
    this.url = node.url
    this.lang = node.primaryLanguage?.name
    this.owner = new Owner(
      node.owner.login,
      node.owner.url,
      node.owner.avatarUrl
    )
    this.size = node.diskUsage
    this.stars = node.stargazerCount
    this.forks = node.forkCount
    this.issues = node.issues.totalCount
    this.topics = node.repositoryTopics.nodes.map(
      (node: any) => node.topic.name
    )
    this.updatedAt = new Date(node.updatedAt)
  }
}
