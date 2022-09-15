import React, { useEffect } from "react"

import { useMoralis } from "react-moralis"

export default function ManualHeader() {
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
    useMoralis()

  useEffect(() => {
    if (isWeb3Enabled) return
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
        enableWeb3()
      }
    }
    // enableWeb3()
  }, [isWeb3Enabled])

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`账户已更改为${account}`)
      if (account == null) {
        window.localStorage.removeItem("connected")
        deactivateWeb3()
        console.log("断开连接")
      }
    })
  }, [])

  return (
    <div>
      {account ? (
        <div>
          已连接 {account.slice(0, 6)}...{account.slice(account.length - 4)}
        </div>
      ) : (
        <button
          disabled={isWeb3EnableLoading}
          onClick={async () => {
            await enableWeb3()
            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "inject")
            }
          }}
        >
          Connect
        </button>
      )}
    </div>
  )
}
