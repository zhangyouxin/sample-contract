require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/m4j5pGq0I-_03e6DlKKHoYmCbponJb4P`,
      accounts: [`0xed52775b4e01290849f68368c173fcb8d10d065912f64b38f21bb7c947f04280`],
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/KKFUoe88hCjyAFXx7QXQ4rpR4w0eZO_7`,
      accounts: [`0xed52775b4e01290849f68368c173fcb8d10d065912f64b38f21bb7c947f04280`],
    },
    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: ['0xf92dec09f40e183c8fd9db1d4e1627253d357f773c56e037c907a288272f2ec9']
    }
  },
};

