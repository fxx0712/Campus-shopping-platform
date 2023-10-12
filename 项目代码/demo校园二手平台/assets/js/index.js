// / let web3 = new Web3('ws://localhost:8546');
// // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const web3 = new Web3(Web3.givenProvider);
// console.log(web3)
// console.log("web3", web3);

const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "winner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "AuctionEndedEvt",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "starter",
                "type": "address"
            }
        ],
        "name": "AuctionStartEvt",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "bidder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "BidEvt",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "bidder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "HighBidEvt",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "nftAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address payable",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address payable",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "imgname",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "MerchandiseName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "money",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "message",
                "type": "string"
            }
        ],
        "name": "UpMer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "Actionmap",
        "outputs": [
            {
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "highestBidder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "limitBid",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "highestBid",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "startFlg",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "endFlg",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "endsFlg",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "Alllist",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "nftAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address payable",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "internalType": "struct Transaction.Merchandise[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nftaddress",
                "type": "address"
            }
        ],
        "name": "Auctioninterruption",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nftaddress",
                "type": "address"
            }
        ],
        "name": "BuyMer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nftaddress",
                "type": "address"
            }
        ],
        "name": "CreatCar",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nftaddress",
                "type": "address"
            }
        ],
        "name": "DownCar",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nftaddress",
                "type": "address"
            }
        ],
        "name": "DownMer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nftaddress",
                "type": "address"
            }
        ],
        "name": "Tooffer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nftaddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_phonee",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_ear",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_num",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_nums",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_addd",
                "type": "string"
            }
        ],
        "name": "UpAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nftaddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_imgname",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_money",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_message",
                "type": "string"
            }
        ],
        "name": "UpMerchandise",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_userAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_username",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_phone",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_password",
                "type": "string"
            }
        ],
        "name": "createUser",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_userAddress",
                "type": "address"
            }
        ],
        "name": "findUser",
        "outputs": [
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "username",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "phone",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_username",
                "type": "string"
            }
        ],
        "name": "findUserAddressByUsername",
        "outputs": [
            {
                "internalType": "address",
                "name": "userAddress",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "goods",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "phonee",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "era",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "num",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "nums",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "addd",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "id",
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
                "name": "_userAddress",
                "type": "address"
            }
        ],
        "name": "isExitUserAddress",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isIndeed",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_username",
                "type": "string"
            }
        ],
        "name": "isExitUsername",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isIndeed",
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
                "name": "_addr",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            }
        ],
        "name": "login",
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
                "name": "_nftaddress",
                "type": "address"
            }
        ],
        "name": "setAuctionEnd",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nftaddress",
                "type": "address"
            }
        ],
        "name": "setAuctionStart",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "u",
        "outputs": [
            {
                "internalType": "string",
                "name": "imgname",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "MerchandiseName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "money",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "message",
                "type": "string"
            },
            {
                "internalType": "address payable",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "seller",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "sold",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "car",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "unite",
        "outputs": [
            {
                "internalType": "string",
                "name": "imgname",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "MerchandiseName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "money",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "message",
                "type": "string"
            },
            {
                "internalType": "address payable",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "seller",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "sold",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "car",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userAddresses",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "userStruct",
        "outputs": [
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "username",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "phone",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
var myContract = new web3.eth.Contract(abi, '0xcD8989082dA8607dd8A5bFd9a923173b57C0f5D9');
// let res = "";
// (function () {
//         myContract.methods.Allllist().call()
//             .then(function (result) {
//                 console.log(result)
//                 for (var i = 0; i < result.length; i++) {
//                     if (result[i].owner() == accounts[0]) {
//                         myContract.methods.unite().call()
//                             .then(function (result1) {
//                                 console.log(result1)
//                                 res +=
//                                     `
//                                     <div class="tab-content activity-content" id="pills-tabContent">
//     <div class="tab-pane fade mentions-section show active onsale-loadmore"
// id="pills-mentions" role="tabpanel"
// aria-labelledby="pills-mentions-tab">
//     <div class="row justify-content-center g-4">
//     <div class="col-lg-4 col-sm-6">
//     <div class="nft-item">
//     <div class="nft-inner">
//     <!-- nft top part -->
// <div class="nft-item-bottom">
//     <div class="nft-thumb">
//     <img src="assets/images/nft-item/${result1[0]}"
// alt="nft-img">
//     <!-- nft countdwon -->
// </div>
// <div class="nft-content">
//     <div class="content-title">
//     <h5><a>${result1[1]}</a> </h5>
// </div>
// <div
// class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
//     <div class="nft-stock">出售价格：${result1[3]}
// </div>
// <h />
//
// <h />
// <h6>------------------------------------------------
// </h6>
//
// <div class="nft-stock">
//     商品简介：${result1[4]}
// </div>
// </div>
// </div>
// </div>
// <!-- nft-bottom part -->
// <div class="nft-item-bottom">
//     <div class="nft-content">
//     <div class="content-title">
//     </div>
//     <div
// class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
//     </div>
//     <div
// class="price-like d-flex justify-content-between align-items-center">
//     <div
// class="nft-price d-flex align-items-center">
//     </div>
//     <a href="author.html"
// class="nft-bid">下架</a>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//                                     `
//                                 showss()
//                             })
//                     }
//                 }
//             })
//
//
//     }
// )
//
// function showss() {
//     document.getElementById('pills-tabContent').innerHTML = res
//     console.log(res)
// }


