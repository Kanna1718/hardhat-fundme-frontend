# Hardhat FundMe Frontend

Welcome to the **Hardhat FundMe Frontend** project! This project is a simple web application that allows users to interact with a smart contract deployed on the Ethereum blockchain. Users can connect their MetaMask wallet, fund the contract with Ether, withdraw funds, and check the contract's balance.

---

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [How to Interact with the Contract](#how-to-interact-with-the-contract)

---

## Features
- Connect to MetaMask wallet.
- Fund the smart contract with Ether.
- Withdraw funds from the contract.
- Check the balance of the contract.

---

## Prerequisites
Before you begin, ensure you have the following:
- **Node.js** installed on your machine.
- **Yarn** installed (optional but recommended).
- A **MetaMask wallet** set up and connected to the Ethereum network (e.g., Goerli testnet).

---

## Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/hardhat-fundme-frontend.git
    cd hardhat-fundme-frontend
    ```

2. **Install dependencies**:
    - Using Yarn:
      ```bash
      yarn install
      ```
    - Or using npm:
      ```bash
      npm install
      ```

3. **Set up your environment**:
    - Update the `constants.js` file with your **deployed contract address** and **ABI**.

---

## Usage
1. **Start the development server**:
    - If you have `http-server` installed globally, run:
      ```bash
      npx http-server
      ```
    - Alternatively, use any other server of your choice.

2. **Open your browser**:
    - Navigate to `http://localhost:8080` (or the port your server is running on) to access the application.

---

## How to Interact with the Contract

1. **Connect to MetaMask**:
    - Click the **"Connect"** button to connect your MetaMask wallet.
    - Ensure you are on the correct network (e.g., Goerli testnet).

2. **Fund the Contract**:
    - Enter the amount of Ether you want to fund the contract with in the input field.
    - Click the **"Fund"** button to send the specified amount of Ether to the contract.

3. **Withdraw Funds**:
    - Click the **"Withdraw"** button to withdraw your funds from the contract.

4. **Check Balance**:
    - Click the **"Get Balance"** button to check the current balance of the contract.

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

---

## Contributing
Contributions are welcome! If you'd like to improve this project, please fork the repository, create a feature branch, and submit a pull request.

---

## Author
Created by **[Your Name]**. For questions or suggestions, feel free to reach out.

---

### Enjoy using the Hardhat FundMe Frontend! 🚀



