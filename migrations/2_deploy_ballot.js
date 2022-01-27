var Ballot = artifacts.require("./Ballot.sol");

module.exports = function(deployer) {
  deployer.deploy(Ballot, ["Nick", "Rama", "Jose"].map(x => web3.utils.asciiToHex(x)));
};