Hardhat FundMe Frontend:

Welcome to the Hardhat FundMe Frontend project! This project is a simple web application that allows users to interact with a smart contract deployed on the Ethereum blockchain. Users can connect their MetaMask wallet, fund the contract with Ether, withdraw funds, and check their balance.

Table of Contents:
    Features
    Prerequisites
    Installation
    Usage
    How to Interact with the Contract
    

Features:
    Connect to MetaMask wallet
    Fund the smart contract with Ether
    Withdraw funds from the contract
    Check the balance of the contract

Prerequisites:
Before you begin, ensure you have met the following requirements:
    You have Node.js installed on your machine.
    You have Yarn installed (optional, but recommended).
    You have a MetaMask wallet set up and connected to the Ethereum network (e.g., Goerli testnet).


Installation
1.Clone the repository:

```
git clone https://github.com/yourusername/hardhat-fundme-frontend.git
cd hardhat-fundme-frontend
```

2.Install dependencies:

If you are using Yarn:

```
yarn install
Or if you prefer npm:
npm install
```
3.Set up your environment:

Make sure to update the constants.js file with your deployed contract address and ABI.

3.Usage
    1.Start the development server:

    You can use a simple HTTP server to serve the frontend files. If you have http-server installed globally, you can run:

    ```
    npx http-server
    ```
    Alternatively, you can use any other server of your choice.

    2.Open your browser:

    Navigate to http://localhost:8080 (or the port your server is running on) to access the application.

4.How to Interact with the Contract

    1.Connect to MetaMask:

    Click the "Connect" button to connect your MetaMask wallet. Ensure you are on the correct network (e.g., Goerli testnet).

    2.Fund the Contract:

    Enter the amount of Ether you want to fund the contract with in the input field.
    Click the "Fund" button to send the specified amount of Ether to the contract.
    
    3.Withdraw Funds:

    Click the "Withdraw" button to withdraw your funds from the contract.
    
    4.Check Balance:

    Click the "Get Balance" button to check the current balance of the contract.


