
// let web3 = new Web3('ws://localhost:8546');
// // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const web3 = new Web3(Web3.givenProvider);
// console.log(web3)
console.log("web3", web3);



let cmjaccounts = [];

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}
const ethereumButton = document.getElementById('lj');



  web3.eth.getAccounts().then(function (accounts) {
    cmjaccounts = accounts
    console.log(cmjaccounts[0])
  });


  web3.eth.getBalance("0xD1E2b415b3F0E28a7aDd8605A1DEc897f2cBc1D9").then(console.log);

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


document.getElementById("btn_shop")
function uploads () {
	hash = "0x"+Date.now().toString(16)+"00000000000000000000000000000"
	_imgname =$("#imgshop").val()
	let imgs=_imgname.split("\\")[_imgname.split("\\").length - 1]
	_name = $("#itemNameInput_name").val()
	_message = $("#itemDesc").val()
	_money = $("#itemPriceInput_money").val()
	_price = $("#itemPriceInput_price").val()
	// 0x0c67f9e77BBF57d16091588df8BE294255819662
	// Ox1806a31b01200000000000000000000000000000
	hash = "0x"+Date.now().toString(16)+"00000000000000000000000000000"
	console.log(hash)
	console.log("img",imgs)
	console.log("name", _name)
	console.log("phone", _message)
	console.log("email", _money)
	console.log("password", _price)

		myContract.methods.UpMerchandise(hash,imgs,_money,_price, _name, _message).send({
			from: cmjaccounts[0],
			gas: 1500000,
			gasPrice: "300000000000",
			value:1,
		}).on('transactionHash', function (hash) {
			console.log("transactionHash", hash)
			window.location.href = "/index";
		})
			.on('receipt', function (receipt) {
				console.log("receipt", receipt)
				$('#forms').submit()
			})
			.on('confirmation', function (confirmationNumber, receipt) {
				console.log("confirmation  confirmationNumber", confirmationNumber)
				console.log("confirmation  receipt", receipt)
			})
			.on('error', function (error, receipt) {
				console.log("error", receipt)
			})

}




// function shopp() {
// `<div class="nft-content">
//                                             <div class="content-title">
//                                                 <h5><a>向日葵发夹</a> </h5>
//                                             </div>
//                                             <div
//                                                 class="nft-status d-flex flex-wrap justify-content-between align-items-center ">
//                                                 <div class="nft-stock">卖家用户名：快乐水蜜桃</div>
//                                                 <h />
//                                                 <div class="nft-stock">出售价格：10元</div>
//                                                 <h />
//                                                 <div class="nft-stock">买入价格：20元</div>
//                                                 <h />
//                                                 <h6>------------------------------------------------</h6>
//                                                 <div class="nft-stock">商品简介：四个可爱的向日葵发夹手工自制，喜欢的可以下单呀qwq</div>
//                                             </div>
//                                             <div class="price-like d-flex justify-content-between align-items-center">
//                                                 <div>
//                                                     <a onclick="openResult()" class="nft-bid">购买</a>
//                                                     <a href="buy.html" class="nft-bid">出价</a>
//                                                 </div>
//                                                 <div>
//                                                     <a href="report.html" class="nft-bid">举报</a>
//                                                     <a href="collection-single.html" class="nft-bid">加入购物车</a>
//                                                 </div>
//                                             </div>
//                                         </div>`
// }



