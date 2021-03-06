import { Polynomial } from '../polynomial/polynomial'
import { RootFinderOptions, DEFAULT_ROOT_FINDER_OPTIONS } from '../root-finder/definition'

export function irr (
  values: number[],
  options: RootFinderOptions = DEFAULT_ROOT_FINDER_OPTIONS,
): number {
  const polynomial = new Polynomial(values)
  const root = polynomial.findRoot(options)

  if (!root.converged) {
    return NaN
  }

  return root.value - 1
}
