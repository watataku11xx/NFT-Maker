const main = async() => {
    const nftContractFactory = await hre.ethers.getContractFactory('Web3Mint');
    const nftCntract = await nftContractFactory.deploy();
    await nftCntract.deployed();
    console.log('Contract depoyed to:', nftCntract.address);

    let txn = await nftCntract.makeAnEpicNFT();
    await txn.wait();
    txn = await nftCntract.makeAnEpicNFT();
    await txn.wait();
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch (error){
        console.log(error);
        process.exit(1);
    }
};
runMain();