import React from 'react'
import {useConnection,useWallet} from "@solana/wallet-adapter-react"
import { connect } from 'mongoose'
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
export const Airdrop = () => {

  const wallet=useWallet()
  const {connection}=useConnection()
  
  async function sendAirDrop(){
    const amount=document.getElementById("publickey").value
    await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
   alert('ol')
  }

  return (
    <div>
    <input id="publickey" type="text" placeholder='account'></input>
    <button  onClick={sendAirDrop}>send airdrop</button>
    
    </div>
  )
}
