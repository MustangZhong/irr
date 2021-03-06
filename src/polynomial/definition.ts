import { RootFinderOptions, Root } from '../root-finder/definition'

export interface IPolynomial {
  calculate (x: number): number
  findRoot (options?: RootFinderOptions): Root
}
