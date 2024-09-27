import { useState } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import { Airdrop } from './component/Airdrop.jsx';

function App() {
  

  return (
    
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/gnPqgj4E0NnQ6gD1S_DITJx_Wdwp7L8O"}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
            <WalletMultiButton />
            <WalletDisconnectButton />
            { /* Your app's components go here, nested within the context providers. */ }
            <Airdrop></Airdrop>
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
    
  )
}

export default App
