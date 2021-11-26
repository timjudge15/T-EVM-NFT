//Minting Moai Script
var provider = "https://mainnet.telos.net/evm";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ",result);
});

function reciept(txHash){
  alert('Transaction is being processed!');
  console.log('in reciept')
  console.log(txHash)
  console.log(typeof(txHash))
  web3.eth.getTransactionReceipt(txHash).then(function(data){
    let transaction = data;
    let logs = data.logs;
    console.log(logs);
    console.log(web3.utils.hexToNumber(logs[0].topics[3]));
  });
}

const contract = {
    "_format": "hh-sol-artifact-1",
    "contractName": "Moai",
    "sourceName": "contracts/moai.sol",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "baseExtension",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "cost",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "maxMintAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "maxSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_mintAmount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bool",
            "name": "_state",
            "type": "bool"
          }
        ],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "paused",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "removeWhitelistUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_newBaseExtension",
            "type": "string"
          }
        ],
        "name": "setBaseExtension",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_newBaseURI",
            "type": "string"
          }
        ],
        "name": "setBaseURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_newCost",
            "type": "uint256"
          }
        ],
        "name": "setCost",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_newmaxMintAmount",
            "type": "uint256"
          }
        ],
        "name": "setmaxMintAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "str",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "walletOfOwner",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "whitelistUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "whitelisted",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040526040518060400160405280600581526020017f2e6a736f6e000000000000000000000000000000000000000000000000000000815250600c90805190602001906200005192919062000ed2565b50666a94d74f430000600d55612710600e556014600f556000601060006101000a81548160ff0219169083151502179055503480156200009057600080fd5b506040518060400160405280600481526020017f4d6f6169000000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4f41490000000000000000000000000000000000000000000000000000000081525081600090805190602001906200011592919062000ed2565b5080600190805190602001906200012e92919062000ed2565b5050506000620001436200022560201b60201c565b905080600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506200020c60405180608001604052806051815260200162005a41605191396200022d60201b60201c565b6200021f336003620002d860201b60201c565b6200158f565b600033905090565b6200023d6200022560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620002636200044760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620002bc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002b3906200129a565b60405180910390fd5b80600b9080519060200190620002d492919062000ed2565b5050565b6000620002ea6200047160201b60201c565b9050601060009054906101000a900460ff16156200030757600080fd5b600082116200031557600080fd5b600f548211156200032557600080fd5b600e548282620003369190620012e9565b11156200034257600080fd5b620003526200044760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614620003fd5760011515601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514620003fc5781600d54620003ee919062001346565b341015620003fb57600080fd5b5b5b6000600190505b82811162000441576200042b8482846200041f9190620012e9565b6200047e60201b60201c565b80806200043890620014b8565b91505062000404565b50505050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600880549050905090565b620004a0828260405180602001604052806000815250620004a460201b60201c565b5050565b620004b683836200051260201b60201c565b620004cb6000848484620006f860201b60201c565b6200050d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005049062001212565b60405180910390fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000585576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200057c9062001278565b60405180910390fd5b6200059681620008b260201b60201c565b15620005d9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005d09062001234565b60405180910390fd5b620005ed600083836200091e60201b60201c565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200063f9190620012e9565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000620007268473ffffffffffffffffffffffffffffffffffffffff1662000a6560201b62001eb81760201c565b15620008a5578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02620007586200022560201b60201c565b8786866040518563ffffffff1660e01b81526004016200077c9493929190620011be565b602060405180830381600087803b1580156200079757600080fd5b505af1925050508015620007cb57506040513d601f19601f82011682018060405250810190620007c8919062000f99565b60015b62000854573d8060008114620007fe576040519150601f19603f3d011682016040523d82523d6000602084013e62000803565b606091505b506000815114156200084c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008439062001212565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050620008aa565b600190505b949350505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6200093683838362000a7860201b62001ecb1760201c565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141562000983576200097d8162000a7d60201b60201c565b620009cb565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614620009ca57620009c9838262000ac660201b60201c565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000a185762000a128162000c4360201b60201c565b62000a60565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161462000a5f5762000a5e828262000d8b60201b60201c565b5b5b505050565b600080823b905060008111915050919050565b505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b6000600162000ae08462000e1760201b620014dc1760201c565b62000aec9190620013a7565b905060006007600084815260200190815260200160002054905081811462000bd2576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b6000600160088054905062000c599190620013a7565b905060006009600084815260200190815260200160002054905060006008838154811062000cb0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050806008838154811062000cf9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508160096000838152602001908152602001600020819055506009600085815260200190815260200160002060009055600880548062000d6f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600062000da38362000e1760201b620014dc1760201c565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000e8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000e829062001256565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b82805462000ee09062001482565b90600052602060002090601f01602090048101928262000f04576000855562000f50565b82601f1062000f1f57805160ff191683800117855562000f50565b8280016001018555821562000f50579182015b8281111562000f4f57825182559160200191906001019062000f32565b5b50905062000f5f919062000f63565b5090565b5b8082111562000f7e57600081600090555060010162000f64565b5090565b60008151905062000f938162001575565b92915050565b60006020828403121562000fac57600080fd5b600062000fbc8482850162000f82565b91505092915050565b62000fd081620013e2565b82525050565b600062000fe382620012bc565b62000fef8185620012c7565b9350620010018185602086016200144c565b6200100c8162001564565b840191505092915050565b600062001026603283620012d8565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b60006200108e601c83620012d8565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b6000620010d0602a83620012d8565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b600062001138602083620012d8565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b60006200117a602083620012d8565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b620011b88162001442565b82525050565b6000608082019050620011d5600083018762000fc5565b620011e4602083018662000fc5565b620011f36040830185620011ad565b818103606083015262001207818462000fd6565b905095945050505050565b600060208201905081810360008301526200122d8162001017565b9050919050565b600060208201905081810360008301526200124f816200107f565b9050919050565b600060208201905081810360008301526200127181620010c1565b9050919050565b60006020820190508181036000830152620012938162001129565b9050919050565b60006020820190508181036000830152620012b5816200116b565b9050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000620012f68262001442565b9150620013038362001442565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200133b576200133a62001506565b5b828201905092915050565b6000620013538262001442565b9150620013608362001442565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200139c576200139b62001506565b5b828202905092915050565b6000620013b48262001442565b9150620013c18362001442565b925082821015620013d757620013d662001506565b5b828203905092915050565b6000620013ef8262001422565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156200146c5780820151818401526020810190506200144f565b838111156200147c576000848401525b50505050565b600060028204905060018216806200149b57607f821691505b60208210811415620014b257620014b162001535565b5b50919050565b6000620014c58262001442565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415620014fb57620014fa62001506565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b6200158081620013f6565b81146200158c57600080fd5b50565b6144a2806200159f6000396000f3fe60806040526004361061021a5760003560e01c806355f804b311610123578063a22cb465116100ab578063d5abeb011161006f578063d5abeb01146107b5578063d936547e146107e0578063da3ef23f1461081d578063e985e9c514610846578063f2fde38b146108835761021a565b8063a22cb465146106d0578063b88d4fde146106f9578063c15bae8414610722578063c66828621461074d578063c87b56dd146107785761021a565b806370a08231116100f257806370a08231146105fd578063715018a61461063a5780637f00c7a6146106515780638da5cb5b1461067a57806395d89b41146106a55761021a565b806355f804b3146105415780635c975abb1461056a5780636352211e146105955780636c0360eb146105d25761021a565b80632f745c59116101a657806342842e0e1161017557806342842e0e1461044c578063438b63001461047557806344a0d68a146104b25780634a4c560d146104db5780634f6ccce7146105045761021a565b80632f745c59146103c057806330cc7ae0146103fd5780633ccfd60b1461042657806340c10f19146104305761021a565b8063095ea7b3116101ed578063095ea7b3146102ed57806313faede61461031657806318160ddd14610341578063239c70ae1461036c57806323b872dd146103975761021a565b806301ffc9a71461021f57806302329a291461025c57806306fdde0314610285578063081812fc146102b0575b600080fd5b34801561022b57600080fd5b5061024660048036038101906102419190613334565b6108ac565b6040516102539190613d12565b60405180910390f35b34801561026857600080fd5b50610283600480360381019061027e919061330b565b610926565b005b34801561029157600080fd5b5061029a6109bf565b6040516102a79190613d2d565b60405180910390f35b3480156102bc57600080fd5b506102d760048036038101906102d291906133c7565b610a51565b6040516102e49190613c89565b60405180910390f35b3480156102f957600080fd5b50610314600480360381019061030f91906132cf565b610ad6565b005b34801561032257600080fd5b5061032b610bee565b6040516103389190613f8f565b60405180910390f35b34801561034d57600080fd5b50610356610bf4565b6040516103639190613f8f565b60405180910390f35b34801561037857600080fd5b50610381610c01565b60405161038e9190613f8f565b60405180910390f35b3480156103a357600080fd5b506103be60048036038101906103b991906131c9565b610c07565b005b3480156103cc57600080fd5b506103e760048036038101906103e291906132cf565b610c67565b6040516103f49190613f8f565b60405180910390f35b34801561040957600080fd5b50610424600480360381019061041f9190613164565b610d0c565b005b61042e610de3565b005b61044a600480360381019061044591906132cf565b610e9f565b005b34801561045857600080fd5b50610473600480360381019061046e91906131c9565b610fe5565b005b34801561048157600080fd5b5061049c60048036038101906104979190613164565b611005565b6040516104a99190613cf0565b60405180910390f35b3480156104be57600080fd5b506104d960048036038101906104d491906133c7565b6110ff565b005b3480156104e757600080fd5b5061050260048036038101906104fd9190613164565b611185565b005b34801561051057600080fd5b5061052b600480360381019061052691906133c7565b61125c565b6040516105389190613f8f565b60405180910390f35b34801561054d57600080fd5b5061056860048036038101906105639190613386565b6112f3565b005b34801561057657600080fd5b5061057f611389565b60405161058c9190613d12565b60405180910390f35b3480156105a157600080fd5b506105bc60048036038101906105b791906133c7565b61139c565b6040516105c99190613c89565b60405180910390f35b3480156105de57600080fd5b506105e761144e565b6040516105f49190613d2d565b60405180910390f35b34801561060957600080fd5b50610624600480360381019061061f9190613164565b6114dc565b6040516106319190613f8f565b60405180910390f35b34801561064657600080fd5b5061064f611594565b005b34801561065d57600080fd5b50610678600480360381019061067391906133c7565b6116d1565b005b34801561068657600080fd5b5061068f611757565b60405161069c9190613c89565b60405180910390f35b3480156106b157600080fd5b506106ba611781565b6040516106c79190613d2d565b60405180910390f35b3480156106dc57600080fd5b506106f760048036038101906106f29190613293565b611813565b005b34801561070557600080fd5b50610720600480360381019061071b9190613218565b611994565b005b34801561072e57600080fd5b506107376119f6565b6040516107449190613d2d565b60405180910390f35b34801561075957600080fd5b50610762611a84565b60405161076f9190613d2d565b60405180910390f35b34801561078457600080fd5b5061079f600480360381019061079a91906133c7565b611b12565b6040516107ac9190613d2d565b60405180910390f35b3480156107c157600080fd5b506107ca611bbc565b6040516107d79190613f8f565b60405180910390f35b3480156107ec57600080fd5b5061080760048036038101906108029190613164565b611bc2565b6040516108149190613d12565b60405180910390f35b34801561082957600080fd5b50610844600480360381019061083f9190613386565b611be2565b005b34801561085257600080fd5b5061086d6004803603810190610868919061318d565b611c78565b60405161087a9190613d12565b60405180910390f35b34801561088f57600080fd5b506108aa60048036038101906108a59190613164565b611d0c565b005b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061091f575061091e82611ed0565b5b9050919050565b61092e611fb2565b73ffffffffffffffffffffffffffffffffffffffff1661094c611757565b73ffffffffffffffffffffffffffffffffffffffff16146109a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099990613ecf565b60405180910390fd5b80601060006101000a81548160ff02191690831515021790555050565b6060600080546109ce90614297565b80601f01602080910402602001604051908101604052809291908181526020018280546109fa90614297565b8015610a475780601f10610a1c57610100808354040283529160200191610a47565b820191906000526020600020905b815481529060010190602001808311610a2a57829003601f168201915b5050505050905090565b6000610a5c82611fba565b610a9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9290613eaf565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610ae18261139c565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4990613f2f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610b71611fb2565b73ffffffffffffffffffffffffffffffffffffffff161480610ba05750610b9f81610b9a611fb2565b611c78565b5b610bdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd690613e2f565b60405180910390fd5b610be98383612026565b505050565b600d5481565b6000600880549050905090565b600f5481565b610c18610c12611fb2565b826120df565b610c57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4e90613f4f565b60405180910390fd5b610c628383836121bd565b505050565b6000610c72836114dc565b8210610cb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610caa90613d4f565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b610d14611fb2565b73ffffffffffffffffffffffffffffffffffffffff16610d32611757565b73ffffffffffffffffffffffffffffffffffffffff1614610d88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7f90613ecf565b60405180910390fd5b6000601160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b610deb611fb2565b73ffffffffffffffffffffffffffffffffffffffff16610e09611757565b73ffffffffffffffffffffffffffffffffffffffff1614610e5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5690613ecf565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050610e9d57600080fd5b565b6000610ea9610bf4565b9050601060009054906101000a900460ff1615610ec557600080fd5b60008211610ed257600080fd5b600f54821115610ee157600080fd5b600e548282610ef091906140cc565b1115610efb57600080fd5b610f03611757565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fa95760011515601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610fa85781600d54610f9b9190614153565b341015610fa757600080fd5b5b5b6000600190505b828111610fdf57610fcc848284610fc791906140cc565b612419565b8080610fd7906142c9565b915050610fb0565b50505050565b61100083838360405180602001604052806000815250611994565b505050565b60606000611012836114dc565b905060008167ffffffffffffffff811115611056577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156110845781602001602082028036833780820191505090505b50905060005b828110156110f45761109c8582610c67565b8282815181106110d5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080806110ec906142c9565b91505061108a565b508092505050919050565b611107611fb2565b73ffffffffffffffffffffffffffffffffffffffff16611125611757565b73ffffffffffffffffffffffffffffffffffffffff161461117b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117290613ecf565b60405180910390fd5b80600d8190555050565b61118d611fb2565b73ffffffffffffffffffffffffffffffffffffffff166111ab611757565b73ffffffffffffffffffffffffffffffffffffffff1614611201576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f890613ecf565b60405180910390fd5b6001601160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000611266610bf4565b82106112a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129e90613f6f565b60405180910390fd5b600882815481106112e1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b6112fb611fb2565b73ffffffffffffffffffffffffffffffffffffffff16611319611757565b73ffffffffffffffffffffffffffffffffffffffff161461136f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136690613ecf565b60405180910390fd5b80600b9080519060200190611385929190612f88565b5050565b601060009054906101000a900460ff1681565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611445576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143c90613e6f565b60405180910390fd5b80915050919050565b600b805461145b90614297565b80601f016020809104026020016040519081016040528092919081815260200182805461148790614297565b80156114d45780601f106114a9576101008083540402835291602001916114d4565b820191906000526020600020905b8154815290600101906020018083116114b757829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561154d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154490613e4f565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61159c611fb2565b73ffffffffffffffffffffffffffffffffffffffff166115ba611757565b73ffffffffffffffffffffffffffffffffffffffff1614611610576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160790613ecf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6116d9611fb2565b73ffffffffffffffffffffffffffffffffffffffff166116f7611757565b73ffffffffffffffffffffffffffffffffffffffff161461174d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174490613ecf565b60405180910390fd5b80600f8190555050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461179090614297565b80601f01602080910402602001604051908101604052809291908181526020018280546117bc90614297565b80156118095780601f106117de57610100808354040283529160200191611809565b820191906000526020600020905b8154815290600101906020018083116117ec57829003601f168201915b5050505050905090565b61181b611fb2565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611889576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188090613def565b60405180910390fd5b8060056000611896611fb2565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611943611fb2565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516119889190613d12565b60405180910390a35050565b6119a561199f611fb2565b836120df565b6119e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119db90613f4f565b60405180910390fd5b6119f084848484612437565b50505050565b60128054611a0390614297565b80601f0160208091040260200160405190810160405280929190818152602001828054611a2f90614297565b8015611a7c5780601f10611a5157610100808354040283529160200191611a7c565b820191906000526020600020905b815481529060010190602001808311611a5f57829003601f168201915b505050505081565b600c8054611a9190614297565b80601f0160208091040260200160405190810160405280929190818152602001828054611abd90614297565b8015611b0a5780601f10611adf57610100808354040283529160200191611b0a565b820191906000526020600020905b815481529060010190602001808311611aed57829003601f168201915b505050505081565b6060611b1d82611fba565b611b5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5390613f0f565b60405180910390fd5b6000611b66612493565b90506000815111611b865760405180602001604052806000815250611bb4565b80611b9084612525565b600c604051602001611ba493929190613c58565b6040516020818303038152906040525b915050919050565b600e5481565b60116020528060005260406000206000915054906101000a900460ff1681565b611bea611fb2565b73ffffffffffffffffffffffffffffffffffffffff16611c08611757565b73ffffffffffffffffffffffffffffffffffffffff1614611c5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5590613ecf565b60405180910390fd5b80600c9080519060200190611c74929190612f88565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611d14611fb2565b73ffffffffffffffffffffffffffffffffffffffff16611d32611757565b73ffffffffffffffffffffffffffffffffffffffff1614611d88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7f90613ecf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611df8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611def90613d8f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080823b905060008111915050919050565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611f9b57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611fab5750611faa826126d2565b5b9050919050565b600033905090565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166120998361139c565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006120ea82611fba565b612129576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161212090613e0f565b60405180910390fd5b60006121348361139c565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806121a357508373ffffffffffffffffffffffffffffffffffffffff1661218b84610a51565b73ffffffffffffffffffffffffffffffffffffffff16145b806121b457506121b38185611c78565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166121dd8261139c565b73ffffffffffffffffffffffffffffffffffffffff1614612233576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161222a90613eef565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156122a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161229a90613dcf565b60405180910390fd5b6122ae83838361273c565b6122b9600082612026565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461230991906141ad565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461236091906140cc565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b612433828260405180602001604052806000815250612850565b5050565b6124428484846121bd565b61244e848484846128ab565b61248d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161248490613d6f565b60405180910390fd5b50505050565b6060600b80546124a290614297565b80601f01602080910402602001604051908101604052809291908181526020018280546124ce90614297565b801561251b5780601f106124f05761010080835404028352916020019161251b565b820191906000526020600020905b8154815290600101906020018083116124fe57829003601f168201915b5050505050905090565b6060600082141561256d576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506126cd565b600082905060005b6000821461259f578080612588906142c9565b915050600a826125989190614122565b9150612575565b60008167ffffffffffffffff8111156125e1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156126135781602001600182028036833780820191505090505b5090505b600085146126c65760018261262c91906141ad565b9150600a8561263b9190614312565b603061264791906140cc565b60f81b818381518110612683577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856126bf9190614122565b9450612617565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b612747838383611ecb565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561278a5761278581612a42565b6127c9565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146127c8576127c78382612a8b565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561280c5761280781612bf8565b61284b565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461284a576128498282612d3b565b5b5b505050565b61285a8383612dba565b61286760008484846128ab565b6128a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161289d90613d6f565b60405180910390fd5b505050565b60006128cc8473ffffffffffffffffffffffffffffffffffffffff16611eb8565b15612a35578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026128f5611fb2565b8786866040518563ffffffff1660e01b81526004016129179493929190613ca4565b602060405180830381600087803b15801561293157600080fd5b505af192505050801561296257506040513d601f19601f8201168201806040525081019061295f919061335d565b60015b6129e5573d8060008114612992576040519150601f19603f3d011682016040523d82523d6000602084013e612997565b606091505b506000815114156129dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129d490613d6f565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612a3a565b600190505b949350505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001612a98846114dc565b612aa291906141ad565b9050600060076000848152602001908152602001600020549050818114612b87576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600880549050612c0c91906141ad565b9050600060096000848152602001908152602001600020549050600060088381548110612c62577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508060088381548110612caa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020018190555081600960008381526020019081526020016000208190555060096000858152602001908152602001600020600090556008805480612d1f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000612d46836114dc565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612e2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e2190613e8f565b60405180910390fd5b612e3381611fba565b15612e73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e6a90613daf565b60405180910390fd5b612e7f6000838361273c565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612ecf91906140cc565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b828054612f9490614297565b90600052602060002090601f016020900481019282612fb65760008555612ffd565b82601f10612fcf57805160ff1916838001178555612ffd565b82800160010185558215612ffd579182015b82811115612ffc578251825591602001919060010190612fe1565b5b50905061300a919061300e565b5090565b5b8082111561302757600081600090555060010161300f565b5090565b600061303e61303984613fdb565b613faa565b90508281526020810184848401111561305657600080fd5b613061848285614255565b509392505050565b600061307c6130778461400b565b613faa565b90508281526020810184848401111561309457600080fd5b61309f848285614255565b509392505050565b6000813590506130b681614410565b92915050565b6000813590506130cb81614427565b92915050565b6000813590506130e08161443e565b92915050565b6000815190506130f58161443e565b92915050565b600082601f83011261310c57600080fd5b813561311c84826020860161302b565b91505092915050565b600082601f83011261313657600080fd5b8135613146848260208601613069565b91505092915050565b60008135905061315e81614455565b92915050565b60006020828403121561317657600080fd5b6000613184848285016130a7565b91505092915050565b600080604083850312156131a057600080fd5b60006131ae858286016130a7565b92505060206131bf858286016130a7565b9150509250929050565b6000806000606084860312156131de57600080fd5b60006131ec868287016130a7565b93505060206131fd868287016130a7565b925050604061320e8682870161314f565b9150509250925092565b6000806000806080858703121561322e57600080fd5b600061323c878288016130a7565b945050602061324d878288016130a7565b935050604061325e8782880161314f565b925050606085013567ffffffffffffffff81111561327b57600080fd5b613287878288016130fb565b91505092959194509250565b600080604083850312156132a657600080fd5b60006132b4858286016130a7565b92505060206132c5858286016130bc565b9150509250929050565b600080604083850312156132e257600080fd5b60006132f0858286016130a7565b92505060206133018582860161314f565b9150509250929050565b60006020828403121561331d57600080fd5b600061332b848285016130bc565b91505092915050565b60006020828403121561334657600080fd5b6000613354848285016130d1565b91505092915050565b60006020828403121561336f57600080fd5b600061337d848285016130e6565b91505092915050565b60006020828403121561339857600080fd5b600082013567ffffffffffffffff8111156133b257600080fd5b6133be84828501613125565b91505092915050565b6000602082840312156133d957600080fd5b60006133e78482850161314f565b91505092915050565b60006133fc8383613c3a565b60208301905092915050565b613411816141e1565b82525050565b600061342282614060565b61342c818561408e565b93506134378361403b565b8060005b8381101561346857815161344f88826133f0565b975061345a83614081565b92505060018101905061343b565b5085935050505092915050565b61347e816141f3565b82525050565b600061348f8261406b565b613499818561409f565b93506134a9818560208601614264565b6134b2816143ff565b840191505092915050565b60006134c882614076565b6134d281856140b0565b93506134e2818560208601614264565b6134eb816143ff565b840191505092915050565b600061350182614076565b61350b81856140c1565b935061351b818560208601614264565b80840191505092915050565b6000815461353481614297565b61353e81866140c1565b94506001821660008114613559576001811461356a5761359d565b60ff1983168652818601935061359d565b6135738561404b565b60005b8381101561359557815481890152600182019150602081019050613576565b838801955050505b50505092915050565b60006135b3602b836140b0565b91507f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008301527f74206f6620626f756e64730000000000000000000000000000000000000000006020830152604082019050919050565b60006136196032836140b0565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b600061367f6026836140b0565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006136e5601c836140b0565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b60006137256024836140b0565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061378b6019836140b0565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b60006137cb602c836140b0565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b60006138316038836140b0565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b6000613897602a836140b0565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b60006138fd6029836140b0565b91507f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008301527f656e7420746f6b656e00000000000000000000000000000000000000000000006020830152604082019050919050565b60006139636020836140b0565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b60006139a3602c836140b0565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b6000613a096020836140b0565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000613a496029836140b0565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000613aaf602f836140b0565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b6000613b156021836140b0565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613b7b6031836140b0565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b6000613be1602c836140b0565b91507f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008301527f7574206f6620626f756e647300000000000000000000000000000000000000006020830152604082019050919050565b613c438161424b565b82525050565b613c528161424b565b82525050565b6000613c6482866134f6565b9150613c7082856134f6565b9150613c7c8284613527565b9150819050949350505050565b6000602082019050613c9e6000830184613408565b92915050565b6000608082019050613cb96000830187613408565b613cc66020830186613408565b613cd36040830185613c49565b8181036060830152613ce58184613484565b905095945050505050565b60006020820190508181036000830152613d0a8184613417565b905092915050565b6000602082019050613d276000830184613475565b92915050565b60006020820190508181036000830152613d4781846134bd565b905092915050565b60006020820190508181036000830152613d68816135a6565b9050919050565b60006020820190508181036000830152613d888161360c565b9050919050565b60006020820190508181036000830152613da881613672565b9050919050565b60006020820190508181036000830152613dc8816136d8565b9050919050565b60006020820190508181036000830152613de881613718565b9050919050565b60006020820190508181036000830152613e088161377e565b9050919050565b60006020820190508181036000830152613e28816137be565b9050919050565b60006020820190508181036000830152613e4881613824565b9050919050565b60006020820190508181036000830152613e688161388a565b9050919050565b60006020820190508181036000830152613e88816138f0565b9050919050565b60006020820190508181036000830152613ea881613956565b9050919050565b60006020820190508181036000830152613ec881613996565b9050919050565b60006020820190508181036000830152613ee8816139fc565b9050919050565b60006020820190508181036000830152613f0881613a3c565b9050919050565b60006020820190508181036000830152613f2881613aa2565b9050919050565b60006020820190508181036000830152613f4881613b08565b9050919050565b60006020820190508181036000830152613f6881613b6e565b9050919050565b60006020820190508181036000830152613f8881613bd4565b9050919050565b6000602082019050613fa46000830184613c49565b92915050565b6000604051905081810181811067ffffffffffffffff82111715613fd157613fd06143d0565b5b8060405250919050565b600067ffffffffffffffff821115613ff657613ff56143d0565b5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff821115614026576140256143d0565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006140d78261424b565b91506140e28361424b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561411757614116614343565b5b828201905092915050565b600061412d8261424b565b91506141388361424b565b92508261414857614147614372565b5b828204905092915050565b600061415e8261424b565b91506141698361424b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156141a2576141a1614343565b5b828202905092915050565b60006141b88261424b565b91506141c38361424b565b9250828210156141d6576141d5614343565b5b828203905092915050565b60006141ec8261422b565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015614282578082015181840152602081019050614267565b83811115614291576000848401525b50505050565b600060028204905060018216806142af57607f821691505b602082108114156142c3576142c26143a1565b5b50919050565b60006142d48261424b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561430757614306614343565b5b600182019050919050565b600061431d8261424b565b91506143288361424b565b92508261433857614337614372565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b614419816141e1565b811461442457600080fd5b50565b614430816141f3565b811461443b57600080fd5b50565b614447816141ff565b811461445257600080fd5b50565b61445e8161424b565b811461446957600080fd5b5056fea264697066735822122073375bdf3126d7b338b17e5603b7ca6ffd216a728b75a6a625f20fb01d59389264736f6c6343000800003368747470733a2f2f676174657761792e70696e6174612e636c6f75642f697066732f516d52525857626654694b70565841337933615734376d6d617871684239346f315958654d6f445a35657a5077422f",
    "deployedBytecode": "0x60806040526004361061021a5760003560e01c806355f804b311610123578063a22cb465116100ab578063d5abeb011161006f578063d5abeb01146107b5578063d936547e146107e0578063da3ef23f1461081d578063e985e9c514610846578063f2fde38b146108835761021a565b8063a22cb465146106d0578063b88d4fde146106f9578063c15bae8414610722578063c66828621461074d578063c87b56dd146107785761021a565b806370a08231116100f257806370a08231146105fd578063715018a61461063a5780637f00c7a6146106515780638da5cb5b1461067a57806395d89b41146106a55761021a565b806355f804b3146105415780635c975abb1461056a5780636352211e146105955780636c0360eb146105d25761021a565b80632f745c59116101a657806342842e0e1161017557806342842e0e1461044c578063438b63001461047557806344a0d68a146104b25780634a4c560d146104db5780634f6ccce7146105045761021a565b80632f745c59146103c057806330cc7ae0146103fd5780633ccfd60b1461042657806340c10f19146104305761021a565b8063095ea7b3116101ed578063095ea7b3146102ed57806313faede61461031657806318160ddd14610341578063239c70ae1461036c57806323b872dd146103975761021a565b806301ffc9a71461021f57806302329a291461025c57806306fdde0314610285578063081812fc146102b0575b600080fd5b34801561022b57600080fd5b5061024660048036038101906102419190613334565b6108ac565b6040516102539190613d12565b60405180910390f35b34801561026857600080fd5b50610283600480360381019061027e919061330b565b610926565b005b34801561029157600080fd5b5061029a6109bf565b6040516102a79190613d2d565b60405180910390f35b3480156102bc57600080fd5b506102d760048036038101906102d291906133c7565b610a51565b6040516102e49190613c89565b60405180910390f35b3480156102f957600080fd5b50610314600480360381019061030f91906132cf565b610ad6565b005b34801561032257600080fd5b5061032b610bee565b6040516103389190613f8f565b60405180910390f35b34801561034d57600080fd5b50610356610bf4565b6040516103639190613f8f565b60405180910390f35b34801561037857600080fd5b50610381610c01565b60405161038e9190613f8f565b60405180910390f35b3480156103a357600080fd5b506103be60048036038101906103b991906131c9565b610c07565b005b3480156103cc57600080fd5b506103e760048036038101906103e291906132cf565b610c67565b6040516103f49190613f8f565b60405180910390f35b34801561040957600080fd5b50610424600480360381019061041f9190613164565b610d0c565b005b61042e610de3565b005b61044a600480360381019061044591906132cf565b610e9f565b005b34801561045857600080fd5b50610473600480360381019061046e91906131c9565b610fe5565b005b34801561048157600080fd5b5061049c60048036038101906104979190613164565b611005565b6040516104a99190613cf0565b60405180910390f35b3480156104be57600080fd5b506104d960048036038101906104d491906133c7565b6110ff565b005b3480156104e757600080fd5b5061050260048036038101906104fd9190613164565b611185565b005b34801561051057600080fd5b5061052b600480360381019061052691906133c7565b61125c565b6040516105389190613f8f565b60405180910390f35b34801561054d57600080fd5b5061056860048036038101906105639190613386565b6112f3565b005b34801561057657600080fd5b5061057f611389565b60405161058c9190613d12565b60405180910390f35b3480156105a157600080fd5b506105bc60048036038101906105b791906133c7565b61139c565b6040516105c99190613c89565b60405180910390f35b3480156105de57600080fd5b506105e761144e565b6040516105f49190613d2d565b60405180910390f35b34801561060957600080fd5b50610624600480360381019061061f9190613164565b6114dc565b6040516106319190613f8f565b60405180910390f35b34801561064657600080fd5b5061064f611594565b005b34801561065d57600080fd5b50610678600480360381019061067391906133c7565b6116d1565b005b34801561068657600080fd5b5061068f611757565b60405161069c9190613c89565b60405180910390f35b3480156106b157600080fd5b506106ba611781565b6040516106c79190613d2d565b60405180910390f35b3480156106dc57600080fd5b506106f760048036038101906106f29190613293565b611813565b005b34801561070557600080fd5b50610720600480360381019061071b9190613218565b611994565b005b34801561072e57600080fd5b506107376119f6565b6040516107449190613d2d565b60405180910390f35b34801561075957600080fd5b50610762611a84565b60405161076f9190613d2d565b60405180910390f35b34801561078457600080fd5b5061079f600480360381019061079a91906133c7565b611b12565b6040516107ac9190613d2d565b60405180910390f35b3480156107c157600080fd5b506107ca611bbc565b6040516107d79190613f8f565b60405180910390f35b3480156107ec57600080fd5b5061080760048036038101906108029190613164565b611bc2565b6040516108149190613d12565b60405180910390f35b34801561082957600080fd5b50610844600480360381019061083f9190613386565b611be2565b005b34801561085257600080fd5b5061086d6004803603810190610868919061318d565b611c78565b60405161087a9190613d12565b60405180910390f35b34801561088f57600080fd5b506108aa60048036038101906108a59190613164565b611d0c565b005b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061091f575061091e82611ed0565b5b9050919050565b61092e611fb2565b73ffffffffffffffffffffffffffffffffffffffff1661094c611757565b73ffffffffffffffffffffffffffffffffffffffff16146109a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099990613ecf565b60405180910390fd5b80601060006101000a81548160ff02191690831515021790555050565b6060600080546109ce90614297565b80601f01602080910402602001604051908101604052809291908181526020018280546109fa90614297565b8015610a475780601f10610a1c57610100808354040283529160200191610a47565b820191906000526020600020905b815481529060010190602001808311610a2a57829003601f168201915b5050505050905090565b6000610a5c82611fba565b610a9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9290613eaf565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610ae18261139c565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4990613f2f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610b71611fb2565b73ffffffffffffffffffffffffffffffffffffffff161480610ba05750610b9f81610b9a611fb2565b611c78565b5b610bdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd690613e2f565b60405180910390fd5b610be98383612026565b505050565b600d5481565b6000600880549050905090565b600f5481565b610c18610c12611fb2565b826120df565b610c57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4e90613f4f565b60405180910390fd5b610c628383836121bd565b505050565b6000610c72836114dc565b8210610cb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610caa90613d4f565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b610d14611fb2565b73ffffffffffffffffffffffffffffffffffffffff16610d32611757565b73ffffffffffffffffffffffffffffffffffffffff1614610d88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7f90613ecf565b60405180910390fd5b6000601160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b610deb611fb2565b73ffffffffffffffffffffffffffffffffffffffff16610e09611757565b73ffffffffffffffffffffffffffffffffffffffff1614610e5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5690613ecf565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050610e9d57600080fd5b565b6000610ea9610bf4565b9050601060009054906101000a900460ff1615610ec557600080fd5b60008211610ed257600080fd5b600f54821115610ee157600080fd5b600e548282610ef091906140cc565b1115610efb57600080fd5b610f03611757565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fa95760011515601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610fa85781600d54610f9b9190614153565b341015610fa757600080fd5b5b5b6000600190505b828111610fdf57610fcc848284610fc791906140cc565b612419565b8080610fd7906142c9565b915050610fb0565b50505050565b61100083838360405180602001604052806000815250611994565b505050565b60606000611012836114dc565b905060008167ffffffffffffffff811115611056577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156110845781602001602082028036833780820191505090505b50905060005b828110156110f45761109c8582610c67565b8282815181106110d5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080806110ec906142c9565b91505061108a565b508092505050919050565b611107611fb2565b73ffffffffffffffffffffffffffffffffffffffff16611125611757565b73ffffffffffffffffffffffffffffffffffffffff161461117b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117290613ecf565b60405180910390fd5b80600d8190555050565b61118d611fb2565b73ffffffffffffffffffffffffffffffffffffffff166111ab611757565b73ffffffffffffffffffffffffffffffffffffffff1614611201576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f890613ecf565b60405180910390fd5b6001601160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000611266610bf4565b82106112a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129e90613f6f565b60405180910390fd5b600882815481106112e1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b6112fb611fb2565b73ffffffffffffffffffffffffffffffffffffffff16611319611757565b73ffffffffffffffffffffffffffffffffffffffff161461136f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136690613ecf565b60405180910390fd5b80600b9080519060200190611385929190612f88565b5050565b601060009054906101000a900460ff1681565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611445576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143c90613e6f565b60405180910390fd5b80915050919050565b600b805461145b90614297565b80601f016020809104026020016040519081016040528092919081815260200182805461148790614297565b80156114d45780601f106114a9576101008083540402835291602001916114d4565b820191906000526020600020905b8154815290600101906020018083116114b757829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561154d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154490613e4f565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61159c611fb2565b73ffffffffffffffffffffffffffffffffffffffff166115ba611757565b73ffffffffffffffffffffffffffffffffffffffff1614611610576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160790613ecf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6116d9611fb2565b73ffffffffffffffffffffffffffffffffffffffff166116f7611757565b73ffffffffffffffffffffffffffffffffffffffff161461174d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174490613ecf565b60405180910390fd5b80600f8190555050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461179090614297565b80601f01602080910402602001604051908101604052809291908181526020018280546117bc90614297565b80156118095780601f106117de57610100808354040283529160200191611809565b820191906000526020600020905b8154815290600101906020018083116117ec57829003601f168201915b5050505050905090565b61181b611fb2565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611889576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188090613def565b60405180910390fd5b8060056000611896611fb2565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611943611fb2565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516119889190613d12565b60405180910390a35050565b6119a561199f611fb2565b836120df565b6119e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119db90613f4f565b60405180910390fd5b6119f084848484612437565b50505050565b60128054611a0390614297565b80601f0160208091040260200160405190810160405280929190818152602001828054611a2f90614297565b8015611a7c5780601f10611a5157610100808354040283529160200191611a7c565b820191906000526020600020905b815481529060010190602001808311611a5f57829003601f168201915b505050505081565b600c8054611a9190614297565b80601f0160208091040260200160405190810160405280929190818152602001828054611abd90614297565b8015611b0a5780601f10611adf57610100808354040283529160200191611b0a565b820191906000526020600020905b815481529060010190602001808311611aed57829003601f168201915b505050505081565b6060611b1d82611fba565b611b5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5390613f0f565b60405180910390fd5b6000611b66612493565b90506000815111611b865760405180602001604052806000815250611bb4565b80611b9084612525565b600c604051602001611ba493929190613c58565b6040516020818303038152906040525b915050919050565b600e5481565b60116020528060005260406000206000915054906101000a900460ff1681565b611bea611fb2565b73ffffffffffffffffffffffffffffffffffffffff16611c08611757565b73ffffffffffffffffffffffffffffffffffffffff1614611c5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5590613ecf565b60405180910390fd5b80600c9080519060200190611c74929190612f88565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611d14611fb2565b73ffffffffffffffffffffffffffffffffffffffff16611d32611757565b73ffffffffffffffffffffffffffffffffffffffff1614611d88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7f90613ecf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611df8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611def90613d8f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080823b905060008111915050919050565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611f9b57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611fab5750611faa826126d2565b5b9050919050565b600033905090565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166120998361139c565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006120ea82611fba565b612129576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161212090613e0f565b60405180910390fd5b60006121348361139c565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806121a357508373ffffffffffffffffffffffffffffffffffffffff1661218b84610a51565b73ffffffffffffffffffffffffffffffffffffffff16145b806121b457506121b38185611c78565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166121dd8261139c565b73ffffffffffffffffffffffffffffffffffffffff1614612233576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161222a90613eef565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156122a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161229a90613dcf565b60405180910390fd5b6122ae83838361273c565b6122b9600082612026565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461230991906141ad565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461236091906140cc565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b612433828260405180602001604052806000815250612850565b5050565b6124428484846121bd565b61244e848484846128ab565b61248d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161248490613d6f565b60405180910390fd5b50505050565b6060600b80546124a290614297565b80601f01602080910402602001604051908101604052809291908181526020018280546124ce90614297565b801561251b5780601f106124f05761010080835404028352916020019161251b565b820191906000526020600020905b8154815290600101906020018083116124fe57829003601f168201915b5050505050905090565b6060600082141561256d576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506126cd565b600082905060005b6000821461259f578080612588906142c9565b915050600a826125989190614122565b9150612575565b60008167ffffffffffffffff8111156125e1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156126135781602001600182028036833780820191505090505b5090505b600085146126c65760018261262c91906141ad565b9150600a8561263b9190614312565b603061264791906140cc565b60f81b818381518110612683577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856126bf9190614122565b9450612617565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b612747838383611ecb565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561278a5761278581612a42565b6127c9565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146127c8576127c78382612a8b565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561280c5761280781612bf8565b61284b565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461284a576128498282612d3b565b5b5b505050565b61285a8383612dba565b61286760008484846128ab565b6128a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161289d90613d6f565b60405180910390fd5b505050565b60006128cc8473ffffffffffffffffffffffffffffffffffffffff16611eb8565b15612a35578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026128f5611fb2565b8786866040518563ffffffff1660e01b81526004016129179493929190613ca4565b602060405180830381600087803b15801561293157600080fd5b505af192505050801561296257506040513d601f19601f8201168201806040525081019061295f919061335d565b60015b6129e5573d8060008114612992576040519150601f19603f3d011682016040523d82523d6000602084013e612997565b606091505b506000815114156129dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129d490613d6f565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050612a3a565b600190505b949350505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001612a98846114dc565b612aa291906141ad565b9050600060076000848152602001908152602001600020549050818114612b87576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600880549050612c0c91906141ad565b9050600060096000848152602001908152602001600020549050600060088381548110612c62577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508060088381548110612caa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020018190555081600960008381526020019081526020016000208190555060096000858152602001908152602001600020600090556008805480612d1f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000612d46836114dc565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612e2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e2190613e8f565b60405180910390fd5b612e3381611fba565b15612e73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e6a90613daf565b60405180910390fd5b612e7f6000838361273c565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612ecf91906140cc565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b828054612f9490614297565b90600052602060002090601f016020900481019282612fb65760008555612ffd565b82601f10612fcf57805160ff1916838001178555612ffd565b82800160010185558215612ffd579182015b82811115612ffc578251825591602001919060010190612fe1565b5b50905061300a919061300e565b5090565b5b8082111561302757600081600090555060010161300f565b5090565b600061303e61303984613fdb565b613faa565b90508281526020810184848401111561305657600080fd5b613061848285614255565b509392505050565b600061307c6130778461400b565b613faa565b90508281526020810184848401111561309457600080fd5b61309f848285614255565b509392505050565b6000813590506130b681614410565b92915050565b6000813590506130cb81614427565b92915050565b6000813590506130e08161443e565b92915050565b6000815190506130f58161443e565b92915050565b600082601f83011261310c57600080fd5b813561311c84826020860161302b565b91505092915050565b600082601f83011261313657600080fd5b8135613146848260208601613069565b91505092915050565b60008135905061315e81614455565b92915050565b60006020828403121561317657600080fd5b6000613184848285016130a7565b91505092915050565b600080604083850312156131a057600080fd5b60006131ae858286016130a7565b92505060206131bf858286016130a7565b9150509250929050565b6000806000606084860312156131de57600080fd5b60006131ec868287016130a7565b93505060206131fd868287016130a7565b925050604061320e8682870161314f565b9150509250925092565b6000806000806080858703121561322e57600080fd5b600061323c878288016130a7565b945050602061324d878288016130a7565b935050604061325e8782880161314f565b925050606085013567ffffffffffffffff81111561327b57600080fd5b613287878288016130fb565b91505092959194509250565b600080604083850312156132a657600080fd5b60006132b4858286016130a7565b92505060206132c5858286016130bc565b9150509250929050565b600080604083850312156132e257600080fd5b60006132f0858286016130a7565b92505060206133018582860161314f565b9150509250929050565b60006020828403121561331d57600080fd5b600061332b848285016130bc565b91505092915050565b60006020828403121561334657600080fd5b6000613354848285016130d1565b91505092915050565b60006020828403121561336f57600080fd5b600061337d848285016130e6565b91505092915050565b60006020828403121561339857600080fd5b600082013567ffffffffffffffff8111156133b257600080fd5b6133be84828501613125565b91505092915050565b6000602082840312156133d957600080fd5b60006133e78482850161314f565b91505092915050565b60006133fc8383613c3a565b60208301905092915050565b613411816141e1565b82525050565b600061342282614060565b61342c818561408e565b93506134378361403b565b8060005b8381101561346857815161344f88826133f0565b975061345a83614081565b92505060018101905061343b565b5085935050505092915050565b61347e816141f3565b82525050565b600061348f8261406b565b613499818561409f565b93506134a9818560208601614264565b6134b2816143ff565b840191505092915050565b60006134c882614076565b6134d281856140b0565b93506134e2818560208601614264565b6134eb816143ff565b840191505092915050565b600061350182614076565b61350b81856140c1565b935061351b818560208601614264565b80840191505092915050565b6000815461353481614297565b61353e81866140c1565b94506001821660008114613559576001811461356a5761359d565b60ff1983168652818601935061359d565b6135738561404b565b60005b8381101561359557815481890152600182019150602081019050613576565b838801955050505b50505092915050565b60006135b3602b836140b0565b91507f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008301527f74206f6620626f756e64730000000000000000000000000000000000000000006020830152604082019050919050565b60006136196032836140b0565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b600061367f6026836140b0565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006136e5601c836140b0565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b60006137256024836140b0565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061378b6019836140b0565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b60006137cb602c836140b0565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b60006138316038836140b0565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b6000613897602a836140b0565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b60006138fd6029836140b0565b91507f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008301527f656e7420746f6b656e00000000000000000000000000000000000000000000006020830152604082019050919050565b60006139636020836140b0565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b60006139a3602c836140b0565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b6000613a096020836140b0565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000613a496029836140b0565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000613aaf602f836140b0565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b6000613b156021836140b0565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613b7b6031836140b0565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b6000613be1602c836140b0565b91507f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008301527f7574206f6620626f756e647300000000000000000000000000000000000000006020830152604082019050919050565b613c438161424b565b82525050565b613c528161424b565b82525050565b6000613c6482866134f6565b9150613c7082856134f6565b9150613c7c8284613527565b9150819050949350505050565b6000602082019050613c9e6000830184613408565b92915050565b6000608082019050613cb96000830187613408565b613cc66020830186613408565b613cd36040830185613c49565b8181036060830152613ce58184613484565b905095945050505050565b60006020820190508181036000830152613d0a8184613417565b905092915050565b6000602082019050613d276000830184613475565b92915050565b60006020820190508181036000830152613d4781846134bd565b905092915050565b60006020820190508181036000830152613d68816135a6565b9050919050565b60006020820190508181036000830152613d888161360c565b9050919050565b60006020820190508181036000830152613da881613672565b9050919050565b60006020820190508181036000830152613dc8816136d8565b9050919050565b60006020820190508181036000830152613de881613718565b9050919050565b60006020820190508181036000830152613e088161377e565b9050919050565b60006020820190508181036000830152613e28816137be565b9050919050565b60006020820190508181036000830152613e4881613824565b9050919050565b60006020820190508181036000830152613e688161388a565b9050919050565b60006020820190508181036000830152613e88816138f0565b9050919050565b60006020820190508181036000830152613ea881613956565b9050919050565b60006020820190508181036000830152613ec881613996565b9050919050565b60006020820190508181036000830152613ee8816139fc565b9050919050565b60006020820190508181036000830152613f0881613a3c565b9050919050565b60006020820190508181036000830152613f2881613aa2565b9050919050565b60006020820190508181036000830152613f4881613b08565b9050919050565b60006020820190508181036000830152613f6881613b6e565b9050919050565b60006020820190508181036000830152613f8881613bd4565b9050919050565b6000602082019050613fa46000830184613c49565b92915050565b6000604051905081810181811067ffffffffffffffff82111715613fd157613fd06143d0565b5b8060405250919050565b600067ffffffffffffffff821115613ff657613ff56143d0565b5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff821115614026576140256143d0565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006140d78261424b565b91506140e28361424b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561411757614116614343565b5b828201905092915050565b600061412d8261424b565b91506141388361424b565b92508261414857614147614372565b5b828204905092915050565b600061415e8261424b565b91506141698361424b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156141a2576141a1614343565b5b828202905092915050565b60006141b88261424b565b91506141c38361424b565b9250828210156141d6576141d5614343565b5b828203905092915050565b60006141ec8261422b565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015614282578082015181840152602081019050614267565b83811115614291576000848401525b50505050565b600060028204905060018216806142af57607f821691505b602082108114156142c3576142c26143a1565b5b50919050565b60006142d48261424b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561430757614306614343565b5b600182019050919050565b600061431d8261424b565b91506143288361424b565b92508261433857614337614372565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b614419816141e1565b811461442457600080fd5b50565b614430816141f3565b811461443b57600080fd5b50565b614447816141ff565b811461445257600080fd5b50565b61445e8161424b565b811461446957600080fd5b5056fea264697066735822122073375bdf3126d7b338b17e5603b7ca6ffd216a728b75a6a625f20fb01d59389264736f6c63430008000033",
    "linkReferences": {},
    "deployedLinkReferences": {}
} 
const contractAddress = "0x04fe43E5B9B69Cf11E276Caed7c61b95bbcF26AD";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function tryAccount() {
  try{
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    window.setTimeout(convert(1),1);
  }
  catch(err){
    alert('Make sure you have the metamask extension installed!');
  } 
}

async function mintNFT(_mintAmount, mintValue) {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: contractAddress,
          value: mintValue,
          'data': nftContract.methods.mint(accounts[0], _mintAmount).encodeABI()
        }
      ],
    })
    .then((txHash) => setTimeout(function(){
      reciept(txHash)
    }, 9000));
};


function convert(_mintamount){
  const amount = (_mintamount * 30).toString()
  const totalAmount = web3.utils.toWei(amount, 'ether');
  const mintValue = web3.utils.toHex(totalAmount);
  //const amount = web3.utils.toWei('1', 'ether');
  console.log(amount)
  console.log(mintValue)
  mintNFT(_mintamount, mintValue);

}
