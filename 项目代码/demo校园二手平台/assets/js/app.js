// let web3 = new Web3('ws://localhost:8546');
// // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const web3 = new Web3(Web3.givenProvider);
// console.log(web3)
console.log("web3", web3);


let accounts = [];

$("#enableEthereum").click(async () => {
    accounts = await ethereum.request({method: 'eth_requestAccounts'});
    $("#showAccount").text(accounts[0]);
})
ethereum.on('accountsChanged', function (accounts) {
    $("#showAccount").text(accounts[0]);
})


//
//     (async function () {
//         accounts = await ethereum.request({method: 'eth_requestAccounts'});
//         web3.eth.getBalance(accounts[0]).then(function (a) {
//             console.log(a)
//         });
//     })()

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

let res = "";

let str1="";
let str2="";
let str3="";
let str4="";
let abc="0x0000000000000000000000000000000000000000";


function showss() {
    // console.log(res)
    document.getElementById('pills-tabContent').innerHTML = res

}

function showdown() {
    // console.log(res)
    document.getElementById('pills-favorites').innerHTML = str1

}
function showdowns() {
    // console.log(res)
    document.getElementById('pills-bbqs').innerHTML = str4

}

let str = "";
(async function () {
    accounts = await ethereum.request({method: 'eth_requestAccounts'});
    web3.eth.getBalance(accounts[0]).then(function (a) {
        console.log(a)
    });
    console.log("asns")
    myContract.methods.Alllist().call().then(function (result) {

        for (var i = 0; i < result.length; i++) {
            let nftaddress = result[i]['nftAddress'];
            myContract.methods.unite(result[i]['nftAddress'] ).call()
                .then(function (result1) {
                    if (result1[7]==true ){
                        str +=
                            `
                         <div class="col-xl-3 col-lg-4 col-md-6" >
                    <div class="nft-item">
                            <div class="nft-inner">
                                <!-- nft top part -->
                                <div class="nft-item-top d-flex justify-content-between align-items-center">
                                    <div class="author-part">
                                        <ul class="author-list d-flex">
                                            <li class="single-author d-flex align-items-center">
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="more-part">
                                        <div class=" dropstart">
    
                                        </div>
                                    </div>
                                </div>
                                <!-- nft-bottom part -->
                                <div class="nft-item-bottom">
                                    <div class="nft-thumb">
                                        <img src="assets/images/shop/${result1[0]}" alt="nft-img">
                                    </div>
                                    <div class="nft-content">
                                        <div class="content-title">
                                            <h5><a>${result1[1]}</a>
                                            </h5>
                                        </div>

                                        <div class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                            <h/>
                                            <div class="nft-stock">出售价格：${result1[3]}</div>
                                            <h/>
                                            <div class="nft-stock">买入价格：${result1[2]}</div>
                                            <h/>
                                            <h6>------------------------------------------------</h6>
                                            <div class="nft-stock">商品简介：${result1[4]}</div>
                                        </div>
                                        <div class="price-like d-flex justify-content-between align-items-center">
                                            <div class="nft-price d-flex align-items-center">
                                                    <div>
                                                   <a href="javascript:void(0)" id="${nftaddress}" class="nft-bid" onclick="buy(this)">购买</a>
                                                  <a href="javascript:void(0)" id="${nftaddress}" class="nft-bid" onclick="buys(this)">出价</a>
                                              </div>
                                             <div>
                                          <a href="report.html" class="nft-bid">举报</a>
                                      <a href="javascript:void(0)" id="${nftaddress}" class="nft-bid" onclick="upcar(this)">加入购物车</a>
                                           </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            `
                        shows()
                    }
                })
        }
        })

    myContract.methods.Alllist().call()
        .then(function (result) {
            for (var i=0 ; i<result.length;i++){
                let nftaddress =result[i]['nftAddress'];
                if (result[i]['owner'].toLowerCase() == accounts[0]) {
                    myContract.methods.unite(result[i]['nftAddress']).call()
                        .then(function (result1) {
                            console.log(result1)
                            if(result1[9]==true) {
                                if (result1[7] == true) {
                                    str3 +=
                                        `
                    <div class="col-xl-3 col-lg-4 col-md-6" >
                    <div class="nft-item">
                            <div class="nft-inner">
                                <!-- nft top part -->
                                <div class="nft-item-top d-flex justify-content-between align-items-center">
                                    <div class="author-part">
                                        <ul class="author-list d-flex">
                                            <li class="single-author d-flex align-items-center">
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="more-part">
                                        <div class=" dropstart">
    
                                        </div>
                                    </div>
                                </div>
                                <!-- nft-bottom part -->
                                <div class="nft-item-bottom">
                                    <div class="nft-thumb">
                                        <img src="assets/images/shop/${result1[0]}" alt="nft-img">
                                    </div>
                                    <div class="nft-content">
                                        <div class="content-title">
                                            <h5><a>${result1[1]}</a>
                                            </h5>
                                        </div>

                                        <div class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                            <h/>
                                            <div class="nft-stock">出售价格：${result1[3]}</div>
                                            <h/>
                                            <div class="nft-stock">买入价格：${result1[2]}</div>
                                            <h/>
                                            <h6>------------------------------------------------</h6>
                                            <div class="nft-stock">商品简介：${result1[4]}</div>
                                        </div>
                                        <div class="price-like d-flex justify-content-between align-items-center">
                                            <div class="nft-price d-flex align-items-center">
                                                <div>
                                                    <a href="javascript:void(0)" id="${nftaddress}" class="nft-bid" onclick="buy(this)">购买</a>
                                                    <a href="javascript:void(0)" id="${nftaddress}" class="nft-bid" onclick="buys(this)">出价</a>
                                                </div>
                                                <div>
                                                    <a href="report.html" class="nft-bid">举报</a>
                                                    <a href="javascript:void(0)" id="${nftaddress}" class="nft-bid" onclick="dele(this)">删除</a>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                       
                            `
                                    showcar()
                                    //             }
                                    //             if(result1[7]=false && result[6] !=accounts[0]){
                                    //                 str3 +=
                                    //                     `
                                    // <div class="col-xl-3 col-lg-4 col-md-6" >
                                    // <div class="nft-item">
                                    //         <div class="nft-inner">
                                    //             <!-- nft top part -->
                                    //             <div class="nft-item-top d-flex justify-content-between align-items-center">
                                    //                 <div class="author-part">
                                    //                     <ul class="author-list d-flex">
                                    //                         <li class="single-author d-flex align-items-center">
                                    //                         </li>
                                    //                     </ul>
                                    //                 </div>
                                    //                 <div class="more-part">
                                    //                     <div class=" dropstart">
                                    //
                                    //                     </div>
                                    //                 </div>
                                    //             </div>
                                    //             <!-- nft-bottom part -->
                                    //             <div class="nft-item-bottom">
                                    //                 <div class="nft-thumb">
                                    //                     <img src="assets/images/shop/${result1[0]}" alt="nft-img">
                                    //                 </div>
                                    //                 <div class="nft-content">
                                    //                     <div class="content-title">
                                    //                         <h5><a>${result1[1]}</a>
                                    //                         </h5>
                                    //                     </div>
                                    //
                                    //                     <div class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                    //                         <h/>
                                    //                         <div class="nft-stock">出售价格：${result1[3]}</div>
                                    //                         <h/>
                                    //                         <div class="nft-stock">买入价格：${result1[2]}</div>
                                    //                         <h/>
                                    //                         <h6>------------------------------------------------</h6>
                                    //                         <div class="nft-stock">商品简介：${result1[4]}</div>
                                    //                     </div>
                                    //                     <div class="price-like d-flex justify-content-between align-items-center">
                                    //                         <div class="nft-price d-flex align-items-center">
                                    //                             <div>
                                    //                                 <a>商品已售空</a>
                                    //
                                    //                             </div>
                                    //                             <div>
                                    //                                 <a href="collection-single.html" class="nft-bid">删除</a>
                                    //                             </div>
                                    //
                                    //                         </div>
                                    //                     </div>
                                    //                 </div>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    //
                                    //         `
                                    //                 showcar()
                                    //             }

                                }
                            }
                        })

                }
            }

        })

    myContract.methods.Alllist().call()
        .then(function (result) {
            console.log(result)
            for (var i = 0; i < result.length; i++) {
                // console.log(result[i]['owner'].toLowerCase() == accounts[0])
                let nft = result[i]['nftAddress'];
                console.log(nft)
                if (result[i]['owner'].toLowerCase() == accounts[0]) {
                    myContract.methods.unite(result[i]['nftAddress'] ).call()
                        .then(function (result1) {
                            console.log(result1)
                            if (result1[7]==true){
                                res +=
                                    `
                                    <div class="tab-content activity-content" id="pills-tabContent">
                                                    <div class="tab-pane fade mentions-section show active onsale-loadmore"
                                                id="pills-mentions" role="tabpanel"
                                                aria-labelledby="pills-mentions-tab">
                                                    <div class="row justify-content-center g-4">
                                                    <div class="col-lg-4 col-sm-6">
                                                    <div class="nft-item">
                                                    <div class="nft-inner">
                                                    <!-- nft top part -->
                                                <div class="nft-item-bottom">
                                                    <div class="nft-thumb">
                                                    <img src="assets/images/shop/${result1[0]}"
                                                alt="nft-img">
                                                    <!-- nft countdwon -->
                                                </div>
                                                <div class="nft-content">
                                                    <div class="content-title">
                                                    <h5><a>${result1[1]}</a> </h5>
                                                </div>
                                                <div
                                                class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                                    <div class="nft-stock">出售价格：${result1[3]}
                                                </div>
                                                <h />
                                                <h />
                                                <h6>------------------------------------------------
                                                </h6>
                                                
                                                <div class="nft-stock">
                                                    商品简介：${result1[4]}
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                <!-- nft-bottom part -->
                                                <div class="nft-item-bottom">
                                                    <div class="nft-content">
                                                    <div class="content-title">
                                                    </div>
                                                    <div
                                                class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                                    </div>
                                                    <div
                                                class="price-like d-flex justify-content-between align-items-center">
                                                    <div
                                                class="nft-price d-flex align-items-center">
                                                    </div>
                                                    <a href="javascript:void(0)" class="nft-bid" id="${nft}" onclick="down(this)">下架</a>
                                                    <a href="javascript:void(0)" class="nft-bid" id="${nft}" onclick="auction(this)">允许砍价</a>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                    `
                                showss()
                            }

                        })
                }
            }
        })

    myContract.methods.Alllist().call()
        .then(function (result) {
            console.log(result)
            for (var i = 0; i < result.length; i++) {
                // console.log(result[i]['owner'].toLowerCase() == accounts[0])
                let nft = result[i]['nftAddress'];
                console.log(nft)
                if (result[i]['owner'].toLowerCase() == accounts[0]) {
                    myContract.methods.unite(result[i]['nftAddress'] ).call()
                        .then(function (result1) {
                            console.log(result1)
                            if (result1[7]==false || result1[6]==abc){
                                str1 +=
                                    `
                                    <div class="tab-content activity-content" id="pills-tabContent">
                                                    <div class="tab-pane fade mentions-section show active onsale-loadmore"
                                                id="pills-mentions" role="tabpanel"
                                                aria-labelledby="pills-mentions-tab">
                                                    <div class="row justify-content-center g-4">
                                                    <div class="col-lg-4 col-sm-6">
                                                    <div class="nft-item">
                                                    <div class="nft-inner">
                                                    <!-- nft top part -->
                                                <div class="nft-item-bottom">
                                                    <div class="nft-thumb">
                                                    <img src="assets/images/shop/${result1[0]}"
                                                alt="nft-img">
                                                    <!-- nft countdwon -->
                                                </div>
                                                <div class="nft-content">
                                                    <div class="content-title">
                                                    <h5><a>${result1[1]}</a> </h5>
                                                </div>
                                                <div
                                                class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                                    <div class="nft-stock">出售价格：${result1[3]}
                                                </div>
                                                <h />
                                                
                                                <h />
                                                <h6>------------------------------------------------
                                                </h6>
                                                
                                                <div class="nft-stock">
                                                    商品简介：${result1[4]}
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                <!-- nft-bottom part -->
                                                <div class="nft-item-bottom">
                                                    <div class="nft-content">
                                                    <div class="content-title">
                                                    </div>
                                                    <div
                                                class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                                    </div>
                                                    <div
                                                class="price-like d-flex justify-content-between align-items-center">
                                                    <div
                                                class="nft-price d-flex align-items-center">
                                                    </div>
                                                    <a>已下架</a>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                    `
                                showdown()
                            }

                        })
                }
            }
        })

    myContract.methods.Alllist().call()
        .then(function (result) {
            console.log(result)
            for (var i = 0; i < result.length; i++) {
                // console.log(result[i]['owner'].toLowerCase() == accounts[0])
                let nft = result[i]['nftAddress'];
                console.log(nft)
                if (result[i]['owner'].toLowerCase() == accounts[0]) {
                    myContract.methods.unite(result[i]['nftAddress'] ).call()
                        .then(function (result1) {
                            console.log(result1)
                            if (result1[7]==false || result1[6]!=abc){
                                str4 +=
                                    `
                                    <div class="tab-content activity-content" id="pills-tabContent">
                                                    <div class="tab-pane fade mentions-section show active onsale-loadmore"
                                                id="pills-mentions" role="tabpanel"
                                                aria-labelledby="pills-mentions-tab">
                                                    <div class="row justify-content-center g-4">
                                                    <div class="col-lg-4 col-sm-6">
                                                    <div class="nft-item">
                                                    <div class="nft-inner">
                                                    <!-- nft top part -->
                                                <div class="nft-item-bottom">
                                                    <div class="nft-thumb">
                                                    <img src="assets/images/shop/${result1[0]}"
                                                alt="nft-img">
                                                    <!-- nft countdwon -->
                                                </div>
                                                <div class="nft-content">
                                                    <div class="content-title">
                                                    <h5><a>${result1[1]}</a> </h5>
                                                </div>
                                                <div
                                                class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                                    <div class="nft-stock">出售价格：${result1[3]}
                                                </div>
                                                <h />
                                                
                                                <h />
                                                <h6>------------------------------------------------
                                                </h6>
                                                
                                                <div class="nft-stock">
                                                    商品简介：${result1[4]}
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                <!-- nft-bottom part -->
                                                <div class="nft-item-bottom">
                                                    <div class="nft-content">
                                                    <div class="content-title">
                                                    </div>
                                                    <div
                                                class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                                    </div>
                                                    <div
                                                class="price-like d-flex justify-content-between align-items-center">
                                                    <div
                                                class="nft-price d-flex align-items-center">
                                                    </div>
                                                    <a>已卖出</a>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                    `
                                showdowns()
                            }

                        })
                }
            }
        })

    myContract.methods.Alllist().call().then(function (result) {
        for (var i = 0; i < result.length; i++) {
            let nftaddress = result[i]['nftAddress'];
            myContract.methods.unite(result[i]['nftAddress'] ).call()
                .then(function (result1) {
                    console.log(result1[6].toLowerCase())
                    console.log(accounts[0])
                    if (result1[6].toLowerCase()==accounts[0] ){
                        str2 +=
                            `
                                    <div class="tab-content activity-content" id="pills-tabContent">
                                                    <div class="tab-pane fade mentions-section show active onsale-loadmore"
                                                id="pills-mentions" role="tabpanel"
                                                aria-labelledby="pills-mentions-tab">
                                                    <div class="row justify-content-center g-4">
                                                    <div class="col-lg-4 col-sm-6">
                                                    <div class="nft-item">
                                                    <div class="nft-inner">
                                                    <!-- nft top part -->
                                                <div class="nft-item-bottom">
                                                    <div class="nft-thumb">
                                                    <img src="assets/images/shop/${result1[0]}"
                                                alt="nft-img">
                                                    <!-- nft countdwon -->
                                                </div>
                                                <div class="nft-content">
                                                    <div class="content-title">
                                                    <h5><a>${result1[1]}</a> </h5>
                                                </div>
                                                <div
                                                class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                                    <div class="nft-stock">出售价格：${result1[3]}
                                                </div>
                                                <h />
                                                
                                                <h />
                                                <h6>------------------------------------------------
                                                </h6>
                                                
                                                <div class="nft-stock">
                                                    商品简介：${result1[4]}
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                <!-- nft-bottom part -->
                                                <div class="nft-item-bottom">
                                                    <div class="nft-content">
                                                    <div class="content-title">
                                                    </div>
                                                    <div
                                                class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                                                    </div>
                                                    <div
                                                class="price-like d-flex justify-content-between align-items-center">
                                                    <div
                                                class="nft-price d-flex align-items-center">
                                                    </div>
                                                    <a>已买入</a>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                            `
                        showbuy()
                    }
                })
        }
    })
})()

function shows() {
    // console.log(str)
    document.getElementById('show').innerHTML = str
}

function showbuy() {
    // console.log(str)
    document.getElementById('pills-groups').innerHTML = str2
}
function showcar() {
    // console.log(str)
    document.getElementById('showcar').innerHTML = str3
}
// function showcar() {
//     // console.log(str)
//     document.getElementById('showcar').innerHTML = str4
// }


function down(obj) {
    console.log(obj)
    console.log(obj.id)
    // console.log(id)
    myContract.methods.DownMer(obj.id).send({
        from: accounts[0],
        gas: 1500000,
        gasPrice: "300000000000"
    }).on('transactionHash', function (hash) {
        console.log("transactionHash", hash);
        window.location.href = "/index";
    }).on('receipt', function (receipt) {
        console.log("receipt", receipt);
    })
        .on('confirmation', function (confirmationNumber, receipt) {
            console.log("confirmation  confirmationNumber", confirmationNumber);
            console.log("confirmation  receipt", receipt);
            window.location.href = "/index";
            window.location.replace("/index")
        })
        .on('error', function (error, receipt) {
            console.log("error", receipt);
        }).then(
        $.message({
            message: "已下架商品！",
            type: "error"
        })
    )
}



function upcar(obj) {
    console.log(obj.id)
    // console.log(id)
    myContract.methods.CreatCar(obj.id).send({
        from: accounts[0],
        gas: 1500000,
        gasPrice: "300000000000"
    }).on('transactionHash', function (hash) {
        console.log("transactionHash", hash);
        window.location.href = "/index";
    }).on('receipt', function (receipt) {
        console.log("receipt", receipt);
    })
        .on('confirmation', function (confirmationNumber, receipt) {
            console.log("confirmation  confirmationNumber", confirmationNumber);
            console.log("confirmation  receipt", receipt);
            window.location.href = "/index";
        })
        .on('error', function (error, receipt) {
            console.log("error", receipt);
        }).then(
        $.message({
            message: "商品已加入购物车！",
            type: "error"
        })
    )
}



function dele(obj) {
    console.log(obj.id)
    // console.log(id)
    myContract.methods.DownCar(obj.id).send({
        from: accounts[0],
        gas: 1500000,
        gasPrice: "300000000000"
    }).on('transactionHash', function (hash) {
        console.log("transactionHash", hash);
        $.message({
            message: "商品已移出购物车！",
            type: "error"
        })
        window.location.href = "/index";
    }).on('receipt', function (receipt) {
        console.log("receipt", receipt);
    })
        .on('confirmation', function (confirmationNumber, receipt) {
            console.log("confirmation  confirmationNumber", confirmationNumber);
            console.log("confirmation  receipt", receipt);

        })
        .on('error', function (error, receipt) {
            console.log("error", receipt);
        }).then(

    )
}

function auction(obj) {
        myContract.methods.unite(obj.id).call()
            .then(function (result1) {
                if(result1[8]==false){
                    myContract.methods.setAuctionStart(obj.id).send({
                        from: accounts[0],
                        gas: 1500000,
                        gasPrice: "300000000000"
                    }).on('transactionHash', function (hash) {
                        console.log("transactionHash", hash);
                        $.message({
                            message: "商品允许砍价成功",
                            type: "error"
                        });
                        window.location.href = "/author";
                    }).on('receipt', function (receipt) {
                        console.log("receipt", receipt);
                    })
                        .on('confirmation', function (confirmationNumber, receipt) {
                            console.log("confirmation  confirmationNumber", confirmationNumber);
                            console.log("confirmation  receipt", receipt);
                            window.location.href = "/index";
                        })
                        .on('error', function (error, receipt) {
                            console.log("error", receipt);
                        }).then(

                    )
                }else {

                }
                $.message({
                    message: "商品已允许砍价",
                    type: "error"
                });

            })


        }
function buys(obj) {
    myContract.methods.unite(obj.id).call()
        .then(function (result1) {
            if(result1[8]==true){
                window.location.href = "/buy?id="+obj.id;
            }else {
                $.message({
                    message: "该商品不允许砍价",
                    type: "error"
                });

            }
        })


}




function buy(obj) {
    console.log(obj)
    console.log(obj.id)
    // console.log(id)
    myContract.methods.unite(obj.id).call()
        .then(function (result){
            myContract.methods.BuyMer(obj.id).send({
                from: accounts[0],
                value:result[3],
                gas: 1500000,
                gasPrice: "300000000000"
            }).on('transactionHash', function (hash) {
                console.log("transactionHash", hash);
                $.message({
                    message: "商品购买成功",
                    type: "error"
                });
                window.location.href = "/index";
            }).on('receipt', function (receipt) {
                console.log("receipt", receipt);
            })
                .on('confirmation', function (confirmationNumber, receipt) {
                    console.log("confirmation  confirmationNumber", confirmationNumber);
                    console.log("confirmation  receipt", receipt);
                    window.location.href = "/index";
                })
                .on('error', function (error, receipt) {
                    console.log("error", receipt);
                }).then(


            )
        })
}

$("#btn_buy").click(function () {
    var urlParam = decodeURI(window.location.href.split("?")[1]);
    // console.log(urlParam)
    var id = urlParam.split("id=")[1].split("&")[0];
    let _money = $("#floatingInput_money").val();
    myContract.methods.Tooffer(id).send({
        from: accounts[0],
        value: _money,
        gas: 1500000,
        gasPrice: "300000000000"
    }).on('transactionHash', function (hash) {
        console.log("transactionHash", hash);
        window.location.href = "/index";
    }).on('receipt', function (receipt) {
        console.log("receipt", receipt);
    })
        .on('confirmation', function (confirmationNumber, receipt) {
            console.log("confirmation  confirmationNumber", confirmationNumber);
            console.log("confirmation  receipt", receipt);

        })
        .on('error', function (error, receipt) {
            console.log("error", receipt);
        })
    //     } else {
    //         let _username = $("#userIdInput_name").val();
    //         let _phone = $("#userIdInput_phone").val()
    //         let _email = $("#floatingInput_email").val()
    //         let _password = $("#floatingPassword_password").val()
    //         console.log("name", _username);
    //         console.log("phone", _phone);
    //         console.log("email", _email);
    //         console.log("password", _password);
    //         myContract.methods.createUser(accounts[0], _username, _phone, _email, _password).send({
    //             from: accounts[0],
    //             gas: 1500000,
    //             gasPrice: "300000000000"
    //         }).on('transactionHash', function (hash) {
    //             console.log("transactionHash", hash);
    //             window.location.href = "/signin";
    //         }).on('receipt', function (receipt) {
    //             console.log("receipt", receipt);
    //         })
    //             .on('confirmation', function (confirmationNumber, receipt) {
    //                 console.log("confirmation  confirmationNumber", confirmationNumber);
    //                 console.log("confirmation  receipt", receipt);
    //                 window.location.href = "/index";
    //             })
    //             .on('error', function (error, receipt) {
    //                 console.log("error", receipt);
    //             })
    //     }
    // })
})



$("#btn_sin").click(function () {
    myContract.methods.isExitUserAddress(accounts[0]).call().then(function (result) {
        if (result == true) {
            $.message({
                message: "该地址账户已存在！",
                type: "error"
            });
        } else {
            let _username = $("#userIdInput_name").val();
            let _phone = $("#userIdInput_phone").val()
            let _email = $("#floatingInput_email").val()
            let _password = $("#floatingPassword_password").val()
            console.log("name", _username);
            console.log("phone", _phone);
            console.log("email", _email);
            console.log("password", _password);
            myContract.methods.createUser(accounts[0], _username, _phone, _email, _password).send({
                from: accounts[0],
                gas: 1500000,
                gasPrice: "300000000000"
            }).on('transactionHash', function (hash) {
                console.log("transactionHash", hash);
                window.location.href = "/signin";
            }).on('receipt', function (receipt) {
                console.log("receipt", receipt);
            })
                .on('confirmation', function (confirmationNumber, receipt) {
                    console.log("confirmation  confirmationNumber", confirmationNumber);
                    console.log("confirmation  receipt", receipt);
                    window.location.href = "/index";
                })
                .on('error', function (error, receipt) {
                    console.log("error", receipt);
                })
        }
    })
})


$("#btn_login").click(() => {
    let password = $("#floatingPassword_pas").val()
    myContract.methods.login(accounts[0], password).call().then(function (result) {
        if (result == false) {
            $.message({
                message: "账户或者密码错误",
                type: "error"
            });
        } else {
            myContract.methods.findUser(accounts[0]).call().then(function (result1) {
                $.ajax({
                    url: "/storeAccount",
                    type: "POST",
                    data: {"account": result1[0], "name": result1[1]},
                    dataType: "json",
                    success: function (data) {
                        window.location.href = "/index";
                    },
                })

            })
        }
    })

})







