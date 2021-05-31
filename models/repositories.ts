import { Repository } from './repository'

export class Repositories {
  list: Array<Repository>
  count: Number

  constructor(res: any) {
    this.list = res.data.data.search.edges.map(
      (edge: any) => new Repository(edge.node)
    )
    this.count = res.data.data.search.repositoryCount
  }
}
