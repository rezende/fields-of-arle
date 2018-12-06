import farmersInn from '../farmersInn'

const state = args => ({
  G: {
    action: 'farmersInn',
    players: {
      0: {
        land: [
          [{ contents: [], type: 'grain' }, { contents: [], type: 'flax' }],
        ],
      },
    },
  },
  ctx: {
    currentPlayer: '0',
  },
  args,
})

describe('Farmers Inn', () => {
  it('clears the action', () => {
    const src = state([{ locs: [] }])
    const dst = farmersInn(src)
    expect(dst.action).toBeNull()
  })

  it('converts fields to forest', () => {
    const src = state([{ locs: [[0, 0]] }])
    const dst = farmersInn(src)
    expect(dst.players[0].land[0][0]).toMatchObject({
      contents: [],
      type: 'forest',
    })
  })
})
