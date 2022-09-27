const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Yarr", "Frosty", "Lolz"], // Names
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROH34K3tEXx1VcnAs8pjPoV8lQykoVVVNHjz6C1d4RMOhY9d-mtnWu3J8oHW4Q8inFCC0&usqp=CAU", // Images
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGir2Q_7MEqR5OC4K9ToLQJmx4ckewTk8xngScz5z88wcT3jJQed1vv0tIVF5lNJWsHs&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtI7mMFHpsFAY31dA1E7ZBKXJTMuoNwFUraQ&usqp=CAU",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    "Sensei",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffzcDJqkPuX-cIladVsVTwUpltH3KF1cxJg&usqp=CAU",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
