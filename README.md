TO get this running
First run 
npx hardhat compile

Next npx hardhat test

npx hardhat run scripts/deploy.js

In order to deploy the smart contract on the testnet, run 
npx hardhat run scripts/deploy.js --network goerli

You will then receive the smart contract address that is to be used in the front end code
(Or you could use the existing address that will show you the status of my contract that is ongoing on the testnet

#Note that code for 'lock-react' is in Master branch
