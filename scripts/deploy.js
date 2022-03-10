async function main() {
    // loading our  compiled smart contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const hello_world = await HelloWorld.deploy("Hello World");
    // Initial message to be deployed
    console.log(`Smart contract has been deployed to ${hello_world.address}`);
}


main()
.then(() => process.exit(0))
.catch(() => {
    console.error(error);
    process.exit(1)
});