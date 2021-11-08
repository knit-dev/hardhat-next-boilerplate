module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("Greeter", {
    from: deployer,
    proxy: {
      methodName: "initialize",
      proxyContract: "OpenZeppelinTransparentProxy",
    },
    // gas: 4000000,
    args: ['Sample greeting'],
  });
};