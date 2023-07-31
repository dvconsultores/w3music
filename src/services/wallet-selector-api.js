import Vue from 'vue'
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupCoin98Wallet } from "@near-wallet-selector/coin98-wallet";
import { setupModal } from "@near-wallet-selector/modal-ui";

export default function RamperApi() {
  setupWalletSelector({
    network: "testnet",
    modules: [
      setupNearWallet(),
      setupMyNearWallet(),
      setupHereWallet(),
      setupCoin98Wallet()
    ]
  }).then(async (res) => {

    const state = res.store.getState()
  
    res.wallet(state.selectedWalletId)
      .then(async(wallet) => {
        const accounts = await wallet.getAccounts();
        const item = {
          selector: res,
          wallet: wallet,
          getAccountId: () => accounts.length > 0 ? accounts[0].accountId : null,
          modal: setupModal(res, {
            contractId: "test.testnet",
          })
        }
    
        Vue.prototype.$selector = item
      })
      .catch(() => {
        const item = {
          selector: res,
          getAccountId: () => null,
          modal: setupModal(res, {
            contractId: "test.testnet",
          })
        }
    
        Vue.prototype.$selector = item
      })
    
  }).catch(() => {
    Vue.prototype.$selector = {}
  })
}
