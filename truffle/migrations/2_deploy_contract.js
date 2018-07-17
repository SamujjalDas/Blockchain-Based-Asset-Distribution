var bicycle = artifacts.require("./bicycle.sol");

module.exports = function(deployer) {
  deployer.deploy(bicycle);
};
