require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/3_4sMB_WFMI0EprZnRSrpeLYX10ADF1L',
      accounts: ['b1c07d74838125147abff2dea5516da965d4d18cb05c40432fb16a9b28c2a37d'],
    },
  },
};
