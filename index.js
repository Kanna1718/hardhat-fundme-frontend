import { ethers, TransactionReceipt } from "./ethers-6.13.4.esm.min.js"
import {abi,contractaddress} from "./constants.js"


const connectbutton=document.getElementById("connectbutton")
const fundbutton=document.getElementById("fund")
const bal=document.getElementById("balance")
const withdrawbutton=document.getElementById("withdraw")
withdrawbutton.onclick=withdraw
bal.onclick=getbalanlce
connectbutton.onclick=connect
fundbutton.onclick=fund


async function connect() {
    if(typeof window.ethereum!="undefined"){
        await ethereum.request({method:"eth_requestAccounts"})
        console.log("Connected to metamask")
        connectbutton.innerHTML="connected to metamask"
    }
    else{
        connectbutton.innerHTML="not connected to metamask"
    }
}
async function withdraw() {
    if(typeof window.ethereum!="undefined"){
        const provider=new ethers.BrowserProvider(window.ethereum)
        await provider.send('eth_requestAccounts', [])
        const signer= await provider.getSigner()
        const recipient = signer.address;
        const contract=new ethers.Contract(contractaddress,abi,signer)

        
        try{
            console.log("withdrawing........")
            document.getElementById("status").textContent = "withdrawing ETH.....";
            const transaction=await contract.cheaperWithdraw()
            //await transaction.waitForTransaction(1)
            await listentx(transaction,provider)
             document.getElementById("transaction").textContent="withdraw has been completed"
        }
        catch(error){
            console.log(error);
        }
    }
}
async function fund() {
    const ethamount=document.getElementById("value").value
    if(typeof window.ethereum!="undefined"){
        
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractaddress, abi, signer);
        try{
            console.log("sending.....Eth")
            document.getElementById("status").textContent = "sending ETH ...";
        const transactionResponse = await contract.fund({value: ethers.parseEther(ethamount.toString())});
        await listentx(transactionResponse,provider)
         document.getElementById("transaction").textContent="Sending ETH has been completed"
        console.log("done")
        }
        catch(error){
            console.log(error)
        }
    }
}
function listentx(transactionResponse,provider){
    console.log(`mining ${transactionResponse.hash}`)
    return new Promise((resolve,reject)=>{
        provider.once(transactionResponse.hash,async (transactionReceipt)=>{
            const txHash = transactionResponse.hash;
            const receipt = await provider.waitForTransaction(txHash, 1);
            const confirmations = await transactionReceipt.confirmations();
            console.log(`Completed with ${confirmations} confirmations`);
            resolve()
        })
    })
}
async function getbalanlce(){
    if(typeof window.ethereum!="undefined"){
        const provider = new ethers.BrowserProvider(window.ethereum);
        const balance=await provider.getBalance(contractaddress,"latest")
        const value=formatEtherManually(balance)
        console.log(value)
        document.getElementById("status").textContent = value +" ETH";
    }
}
function formatEtherManually(weiValue) {
    // Convert wei to Ether manually
    return (parseFloat(weiValue) / Math.pow(10, 18)).toString();
}
