import { expect } from 'chai'
import { RootFinderFactory } from '../../src/root-finder/factory'
import { RootFinderMethod } from '../../src/root-finder/definition'
import { BisectionRootFinder } from '../../src/root-finder/bisection'
import { NewtonRootFinder } from '../../src/root-finder/newton'

describe('RootFinderFactory', () => {
  const factory = new RootFinderFactory({})

  describe('#make', () => {
    const cases: [RootFinderMethod, any][] = [
      [RootFinderMethod.Bisection, BisectionRootFinder],
      [RootFinderMethod.Newton, NewtonRootFinder],
    ]

    cases.forEach(([method, Class]) => {
      it(`RootFinderMethod.${method} -> ${Class.name}`, () => {
        const instance = factory.make(method)

        expect(instance).to.be.instanceOf(Class)
      })
    })
  })
})
