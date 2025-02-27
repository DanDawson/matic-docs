/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  introduction: [
    "home/new-to-polygon",
    {
      type: "category",
      label: "Blockchain Basics",
      items: [
        "home/blockchain-basics/blockchain",
        "home/blockchain-basics/blockchain-types",
        "home/blockchain-basics/consensus-mechanism",
        "home/blockchain-basics/ethereum",
        "home/blockchain-basics/polygon",
        "home/blockchain-basics/solidity",
        "home/blockchain-basics/transactions",
        "home/blockchain-basics/gas",
        "home/blockchain-basics/accounts",
        "home/blockchain-basics/sidechain",
        "home/blockchain-basics/import-account-to-metamask",
      ],
    },
    "home/architecture/polygon-architecture",
    "home/architecture/security-models",
    "home/faq",
  ],
  development: [
    "develop/getting-started",
    {
      type: "category",
      label: "Deploying on Polygon",
      items: ["develop/remix", "develop/truffle", "develop/hardhat"],
    },
    {
      type: "category",
      label: "Network Details",
      items: [
        "develop/network-details/network",
        "develop/network-details/mapped-tokens",
        "develop/network-details/gas-token",
        "develop/network-details/genesis-contracts",
        "integrate/full-node-deployment",
      ],
    },
    {
      type: "category",
      label: "Tools",
      items: [
        {
          type: "link",
          label: "Polygon Faucet",
          href: "https://faucet.polygon.technology/",
        },
        // {
        //   type: "link",
        //   label: "RPC Health",
        //   href: "https://status.matic.today",
        // },
        // {
        //   type: "link",
        //   label: "Checkpoint Status",
        //   href: "https://status.matic.today/#/checkpoints",
        // },
        "develop/tools/polygon-gas-station",
        
      ],
    },
    {
      type: "category",
      label: "Configure Polygon on Wallets",
      items: [
        {
          type: "category",
          label: "Metamask",
          items: [
            "develop/metamask/hello",
            "develop/metamask/config-polygon-on-metamask",
            "develop/metamask/custom-tokens",
            "develop/metamask/multiple-accounts",
          ],
        },
        {
          type: "category",
          label: "Wallet Link",
          items: [
            "develop/metamask/config-polygon-on-wallet-link",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Wallets",
      items: [
        "develop/wallets/getting-started",
        {
          type: "category",
          label: "Arkane",
          items: [
            "develop/wallets/arkane/intro",
            "develop/wallets/arkane/create-wallet",
            "develop/wallets/arkane/network",
            "develop/wallets/arkane/custom-tokens",
            "develop/wallets/arkane/support",
          ],
        },
        "develop/wallets/fortmatic",
        "develop/wallets/metamask",
        "develop/wallets/portis",
        "develop/wallets/torus",
        "develop/wallets/walletconnect",
        {
          type: "category",
          label: "Polygon Web Wallet",
          items: [
            "develop/wallets/polygon-web-wallet/web-wallet-v2-guide",
            "develop/wallets/polygon-web-wallet/deposit-eth-dai-on-polygon",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Ethereum ↔ Polygon",
      items: [
        "develop/ethereum-polygon/getting-started",
        {
          type: "category",
          label: "PoS Bridge",
          items: [
            "develop/ethereum-polygon/pos/getting-started",
            {
              type: "category",
              label: "Using SDK",
              items: [
                "develop/ethereum-polygon/pos/using-sdk/getting-started",
                "develop/ethereum-polygon/pos/using-sdk/eth",
                "develop/ethereum-polygon/pos/using-sdk/erc20",
                "develop/ethereum-polygon/pos/using-sdk/erc721",
                "develop/ethereum-polygon/pos/using-sdk/erc1155",
              ],
            },
            {
              type: "category",
              label: "Calling Contracts",
              items: [
                "develop/ethereum-polygon/pos/calling-contracts/ether",
                "develop/ethereum-polygon/pos/calling-contracts/erc20",
                "develop/ethereum-polygon/pos/calling-contracts/erc721",
                "develop/ethereum-polygon/pos/calling-contracts/erc1155",
              ],
            },
            "develop/ethereum-polygon/pos/deposit-withdraw-event-pos",
            "develop/ethereum-polygon/pos/deployment",
            "develop/ethereum-polygon/pos/mapping-assets",
          ],
        },
        {
          type: "category",
          label: "Plasma Bridge",
          items: [
            "develop/ethereum-polygon/plasma/getting-started",
            "develop/ethereum-polygon/plasma/eth",
            "develop/ethereum-polygon/plasma/erc20",
            "develop/ethereum-polygon/plasma/erc721",
            "develop/ethereum-polygon/plasma/deposit-withdraw-event-plasma",
            "develop/ethereum-polygon/plasma/mapping-assets",
          ],
        },
        {
          type: "category",
          label:"Tools",
          items: ["develop/ethereum-polygon/tools/widget"],
        },
        "develop/ethereum-polygon/submit-mapping-request",
        "develop/ethereum-polygon/mintable-assets",
      ],
    },
    {
      type: "category",
      label: "L1 ↔ L2 Communication",
      items: [
        "develop/l1-l2-communication/state-transfer",
        "develop/l1-l2-communication/fx-portal",
      ],
    },
    {
      type: "category",
      label: "Meta Transactions",
      items: [
        "develop/metatransactions/getting-started",
        "develop/metatransactions/metatransactions-biconomy",
        "develop/metatransactions/metatransactions-gsn",
        "develop/metatransactions/network-agnostics",
      ],
    },
    {
      type: "category",
      label: "Oracles",
      items: [
        "develop/oracles/getting-started",
        "develop/oracles/optimisticoracle",
        "develop/oracles/chainlink",
        "develop/oracles/razor",
        "develop/oracles/bandchain",
        "develop/oracles/bandstandarddataset",
      ],
    },
    "develop/fiat-on-ramp",
    {
      type: "category",
      label: "Indexing Services",
      items: [
        "develop/graph",
        {
          type: "link",
          label: "Covalent",
          href: "https://www.covalenthq.com/docs/api/",
        },
      ],
    },
    

    {
      type: "category",
      label: "Tutorials",
      items: ["develop/pos-using-metamask", "develop/plasma-using-metamask", "develop/nft-tutorial"],
    },
    {
      type: "category",
      label: "Advanced",
      items: [
        "develop/advanced/calling-plasma-contracts",
        "develop/advanced/swap-assets",
        "develop/advanced/custom-restrictions",
      ],
    },
    {
      type: "category",
      label: "Architecture",
      items: [
        "contribute/polygon-architecture",
        {
          type: "category",
          label: "Heimdall",
          items: [
            "contribute/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              items: [
                "contribute/heimdall/encoder",
                "contribute/heimdall/transactions",
                "contribute/heimdall/stdtx",
                "contribute/heimdall/types",
                "contribute/heimdall/validators",
                "contribute/heimdall/checkpoint",
                "contribute/heimdall/validator-key-management",
                "contribute/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              items: [
                "contribute/heimdall/modules/auth",
                "contribute/heimdall/modules/bank",
                "contribute/heimdall/modules/governance",
                "contribute/heimdall/modules/staking",
                "contribute/heimdall/modules/checkpoint",
                "contribute/heimdall/modules/bor",
                "contribute/heimdall/modules/topup",
                "contribute/heimdall/modules/clerk",
                "contribute/heimdall/modules/chainmanager",
              ],
            },
            "contribute/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          items: [
            "contribute/bor/overview",
            "contribute/bor/bor",
            "contribute/bor/core_concepts",
            "contribute/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          items: [
            "contribute/contracts/stakingmanager",
            "contribute/contracts/delegation",
            {
              type: "category",
              label: "Plasma Contracts",
              items: [
                "contribute/contracts/plasma_contracts/account_based_plasma",
                "contribute/contracts/plasma_contracts/predicates",
                "contribute/contracts/plasma_contracts/important-contracts",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "State Sync",
          items: [
            "contribute/state-sync/state-sync",
            "contribute/state-sync/how-state-sync-works",
          ],
        },
        "home/architecture/security-models",
      ],
    },
  ],
  Integrate: [
    "integrate/quickstart",
    {
      type: "category",
      label: "Network Information",
      items: [
        "integrate/network",
        {
          type: "category",
          label: "Network Details",
          items: [
            "integrate/network-detail",
            {
              type: "link",
              label: "Polygon-Mainnet",
              href: "https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json",
            },
            {
              type: "link",
              label: "Mumbai",
              href: "https://static.matic.network/network/testnet/mumbai/index.json",
            },
          ],
        },
        {
          type: "link",
          label: "Polygon Faucet",
          href: "https://faucet.polygon.technology/",
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      items: ["integrate/full-node-deployment", "integrate/full-node-binaries"],
    },
  ],
  Validate: [
    "validate/polygon-overview",
    {
      type: "category",
      label: "Polygon Basics",
      items: [
        "validate/polygon-basics/what-is-polygon",
        "validate/polygon-basics/who-is-validator",
        "validate/polygon-basics/who-is-delegator",
        "validate/polygon-basics/what-is-proof-of-stake",
        "validate/polygon-basics/economics",
      ],
    },
    {
      type: "category",
      label: "Validator Overview",
      items: [
        "validate/validator/introduction",
        "validate/validator/architecture",
        "validate/validator/responsibilities",
        {
          type: "category",
          label: "Core Components",
          items: [
            "validate/validator/core-components/heimdall-chain",
            "validate/validator/core-components/bor-chain",
            "validate/validator/core-components/checkpoint-mechanism",
            "validate/validator/core-components/proposer-producer-selection",
            "validate/validator/core-components/key-management",
            // "validate/validator/bridge",
            "validate/validator/core-components/staking",
            "validate/validator/core-components/delegation",
            "validate/validator/core-components/derivatives",
            "validate/validator/core-components/proposer-bonus",
            "validate/validator/core-components/transaction-fees",
            "validate/validator/core-components/state-sync-mechanism",
          ],
        },
      ],
    },
    "validate/delegate",
    "validate/delegator-faq",
    // "validate/port_management",
    {
      type: "category",
      label: "Validate",
      items: [
        "validate/validate/getting-started",
        "validate/validate/core-components",
        "validate/validate/validator-responsibilities",
        "validate/validate/validator-node-system-requirements",
        "validate/validate/run-validator-ansible",
        "validate/validate/run-validator-binaries",
        "validate/validate/install-gcp",
        "validate/validate/validator-staking-operations",
        "validate/validate/replace-validator",
        "validate/validate/change-signer-address",
        "validate/validate/validator-commission-operations",
      ],
    },
    "validate/validator-faq",
    "validate/general-faq",
    "validate/bug-bounty-program",
    "validate/reporting-issues",
    "validate/rewards",
    "validate/glossary",
  ],
  Contributors: [
    "contribute/orientation",
    "contribute/community-maintainers",
    "validate/bug-bounty-program",
    {
      type: "category",
      label: "Architecture",
      items: [
        "contribute/polygon-architecture",
        {
          type: "category",
          label: "Heimdall",
          items: [
            "contribute/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              items: [
                "contribute/heimdall/encoder",
                "contribute/heimdall/transactions",
                "contribute/heimdall/stdtx",
                "contribute/heimdall/types",
                "contribute/heimdall/validators",
                "contribute/heimdall/checkpoint",
                "contribute/heimdall/validator-key-management",
                "contribute/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              items: [
                "contribute/heimdall/modules/auth",
                "contribute/heimdall/modules/bank",
                "contribute/heimdall/modules/governance",
                "contribute/heimdall/modules/staking",
                "contribute/heimdall/modules/checkpoint",
                "contribute/heimdall/modules/bor",
                "contribute/heimdall/modules/topup",
                "contribute/heimdall/modules/clerk",
                "contribute/heimdall/modules/chainmanager",
              ],
            },
            "contribute/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          items: [
            "contribute/bor/overview",
            "contribute/bor/bor",
            "contribute/bor/core_concepts",
            "contribute/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          items: [
            "contribute/contracts/stakingmanager",
            "contribute/contracts/delegation",
            {
              type: "category",
              label: "Plasma Contracts",
              items: [
                "contribute/contracts/plasma_contracts/account_based_plasma",
                "contribute/contracts/plasma_contracts/predicates",
                "contribute/contracts/plasma_contracts/important-contracts",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "State Sync",
          items: [
            "contribute/state-sync/state-sync",
            "contribute/state-sync/how-state-sync-works",
          ],
        },

        "home/architecture/security-models",
      ],
    },
  ],
  faq: [
    "faq/technical-faqs",
    // "faq/delegator-faq",
    "faq/commit-chain-multisigs",
    "faq/staking-faq",
    // "faq/staking-tutorials",
    "faq/wallet-bridge-faq",
    "faq/consensys-framework",
    "faq/widget-faq",
  ],
};
