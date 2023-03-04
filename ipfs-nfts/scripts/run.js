const main = async() => {
    const nftContractFactory = await hre.ethers.getContractFactory('Web3Mint');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log('Contract depoyed to:', nftContract.address);

    let txn = await nftContract.mintIpfsNFT(
        "poker",
        "bafybeibewfzz7w7lhm33k2rmdrk3vdvi5hfrp6ol5vhklzzepfoac37lry"
    );

    await txn.wait();

    let returnedTokenUri = await nftContract.tokenURI(0);
    console.log('tokenURI:', returnedTokenUri);
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