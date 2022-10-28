module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Whitelist deployment");
  console.log("Deployer address: ");
  console.log(deployer);
  await deploy("Whitelist", {
    from: deployer,
    args: [10],
    log: true,
  });
};

module.exports.tags = ["Whitelist"];
