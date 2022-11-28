import { ethers } from "ethers";
import STTcoin from "../contracts/StetriTest.json";
import contract_address from "../contracts/contract-address.json";

const NETWORK_ID = '5';


export const Transfer = async (to) => {
  if (window.ethereum.networkVersion === NETWORK_ID) {
    //send SST
    const node = contract_address.url
    const provider = new ethers.providers.JsonRpcBatchProvider(node)
    const private_key = contract_address.private_key
    const wallet = new ethers.Wallet(private_key, provider)
    const tokenaddress = contract_address.StetriTest
    const sstani = STTcoin.abi
    const sender = "0x27ae32af2e3A20a2AeFE7E4adef78C1884AcC2db"



  }
  alert("please switch to Georli testnet!")
}
