const Ballot = artifacts.require('./Ballot.sol')

contract('Ballot', (accounts) => {
  before(async () => {
    this.ballot = await Ballot.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.ballot.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('check winning proposal', async () => {
    await this.ballot.vote(0)
    const winnigProposal = await this.ballot.winningProposal()
    assert.equal(winnigProposal.toNumber(), 0)
  })
})