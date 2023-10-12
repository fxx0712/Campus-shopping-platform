//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// ReentrancyGuard: 针对多请求安全性,防止重入攻击
contract Transaction is ReentrancyGuard{
        //定义用户数据结构
struct UserStruct {
    address userAddress;
    string username;
    uint phone;
    string email;
    string password;
    uint time;
    uint index;
}

//定义用户列表数据结构
struct UserListStruct {
    address userAddress;
    uint index;
}

address[] public userAddresses; //所有地址集合
string[] private usernames; //所有用户名集合
mapping(address => UserStruct) public userStruct; //账户个人信息

mapping(string => UserListStruct) private userListStruct; //用户名映射地址


//判断用户地址是否存在
function isExitUserAddress(address _userAddress) public view returns(bool isIndeed) {
    if (userAddresses.length == 0) return false;
    return (userAddresses[userStruct[_userAddress].index] == _userAddress);
}

//判断用户名是否存在
function isExitUsername(string memory _username) public view returns(bool isIndeed) {
    if (usernames.length == 0) return false;
    return (keccak256(abi.encode(usernames[userListStruct[_username].index])) == keccak256(abi.encode(_username)));
}


//user.sol
//根据用户名查找对于的address
function findUserAddressByUsername(string memory _username) public view returns (address userAddress) {
    require(isExitUsername(_username));
    return userListStruct[_username].userAddress;
}


//创建用户信息
function createUser(address _userAddress, string memory _username, uint _phone,string memory _email, string memory _password) public returns (uint index) {
    require(!isExitUserAddress(_userAddress)); //如果地址已存在则不允许再创建
    require(!isExitUsername(_username));//如果用户名已存在则不允许再创建
    userAddresses.push(_userAddress); //地址集合push新地址
    userStruct[_userAddress] = UserStruct(_userAddress, _username, _phone,  _email,_password,block.timestamp, userAddresses.length - 1);

    usernames.push(_username); //用户名集合push新用户
    userListStruct[_username] = UserListStruct(_userAddress, usernames.length - 1); //用户所对应的地址集合

    return userAddresses.length - 1;
}


//
function findUser(address _userAddress) public view returns (
    address userAddress, 
    string memory username, 
    uint phone,
    string memory email, 
    string memory password,
    uint time,uint index) {
    require(isExitUserAddress(_userAddress));
    return (
        userStruct[_userAddress].userAddress,
        userStruct[_userAddress].username,
        userStruct[_userAddress].phone,
        userStruct[_userAddress].email,
        userStruct[_userAddress].password,
        userStruct[_userAddress].time,
        userStruct[_userAddress].index); 
}


    function login(address _addr, string memory password) public view returns(bool) {
        return keccak256(abi.encode(userStruct[_addr].password)) == keccak256(abi.encode(password));
    }

    //合约部署者(管理员)
    address conservator;
    constructor() {
        conservator = payable(msg.sender);
    }
    //商品地址哈希
    address nftAddress;
    //商品与用户
    struct Merchandise{
        //商品地址哈希
        address nftAddress;
        //商家哈希地址
        address payable owner;
    }
    //商品列表,查询商品信息
    Merchandise[] listMer;
    //商品具体信息
    uint public id;
    struct Detail{
      
        //商品图
        string imgname;
        //商品名
        string MerchandiseName;
        //商品价格
        uint price;
        //商品买入价格
        uint money;
        //商品描述
        string message;
        //商家哈希地址
        address payable owner;
        //购买者哈希地址
        address payable seller;
        //是否下架
        bool sold;
        //是否正在被拍卖
        bool status;
    }
    //绑定商品地址与商品具体信息
    mapping(address => Detail) public unite;
    mapping(uint => Detail) public u;

   //上架事件
    event UpMer(
        address nftAddress,
        address payable owner,
        address payable seller,
        string imgname,
        string MerchandiseName,
        uint money,
        uint price,
        string message
    );

    //上架商品
    function UpMerchandise(address _nftaddress, string memory _imgname,uint _money,uint _price,string memory _name,string memory _message) public payable {
        require(_price>0,"Invalid goods");
        //商品名不能为空
        require(bytes(_name).length != 0,"The product name cannot be empty");
        //判断商品是否存在
        require(unite[_nftaddress].owner == payable(address(0)) ,"The goods already exist");
        //将商品与发售者绑定
        listMer.push(Merchandise(
            _nftaddress,
            payable(msg.sender)
        ));
        //绑定商品地址与商品具体信息
        unite[_nftaddress] = Detail(
            _imgname,
            _name,
            _money,
            _price,
            _message,
            payable(msg.sender),
            payable(address(0)),
            true,
            false
        );
        u[id] = Detail(
            _imgname,
            _name,
            _money,
            _price,
            _message,
            payable(msg.sender),
            payable(address(0)),
            true,
            false
        );
        id++;

        emit UpMer(
            _nftaddress,
            payable(msg.sender),
            payable(address(0)),
            _imgname,
            _name,
            _money,
            _price,
            _message
        );
    }

    function Allllist() public view returns(Merchandise[] memory){
        return listMer;
    }


    //下架商品
    function DownMer(address _nftaddress) public {
        //只有商品创建者以及管理员才能下架
        require(msg.sender == conservator || msg.sender == unite[_nftaddress].owner);
        unite[_nftaddress].sold = false;
    }
    //获取所有商品与创建者列表
    function Alllist() public view returns(Merchandise[] memory){
        return listMer;
    }

    //购买商品
    function BuyMer(address _nftaddress) public payable {
        //资金够不够
        require(msg.value == unite[_nftaddress].price,"Send value must be equal to token price");
        //商品未被拍卖
        require(unite[_nftaddress].status == false,"The goods are at auction and cannot be purchased");
        //商品是否可以购买
        require(unite[_nftaddress].sold == true,"The merchandise has been removed from the shelves");
        payable(unite[_nftaddress].owner).transfer(msg.value);
        unite[_nftaddress].seller = payable(msg.sender);
        unite[_nftaddress].sold = false;
    }

    //商品拍卖
	struct MerAction{
        // //商品拍卖开始时间
        // uint auctionStart;
	    // //拍卖期限
        // uint auctionLimit;
	    //拍卖受益人
        address beneficiary;
        //最低出价者
        address highestBidder;
        //初始价
        uint limitBid;
        //最高出价
        uint highestBid;
	    //拍卖开始标志
        bool startFlg;
        //拍卖结束标志
        bool endFlg;
        //中断标志
        bool endsFlg;
    }
    //绑定商品与拍卖,从而可以查看
    mapping(address => MerAction) public Actionmap;
    //更高出价事件
    event HighBidEvt(address bidder, uint amount);
	
	//拍卖开始事件
    event AuctionStartEvt(address starter);
	
    //拍卖结束事件
    event AuctionEndedEvt(address winner, uint amount);

	//出价事件
    event BidEvt(address bidder, uint amount);
	
    //启动拍卖活动
	function setAuctionStart(address _nftaddress) public {

        //只有商品存在且不为下架才能拍卖
        require(unite[_nftaddress].sold == true,"The item is not on the shelves");
	   //前提是拍卖还没开始
       require(!Actionmap[_nftaddress].startFlg, "auction already start");

        //设置商品正在被拍卖
        unite[_nftaddress].status = true;

       Actionmap[_nftaddress] = MerAction(
	    msg.sender,
        //最高出价者
        payable(address(0)),
        //初始价
        unite[_nftaddress].price,
        //最高出价
        0,
	    //设置拍卖已开始
	    true,
        //拍卖是否结束
        false,
        //拍卖是否中断
        true
       );
	   //拍卖开始事件
	   emit AuctionStartEvt(msg.sender);
    }

    //进行出价
    function Tooffer(address _nftaddress) public payable {
	    emit BidEvt(msg.sender, msg.value);
	
        //拍卖需已经开始
        require(Actionmap[_nftaddress].startFlg, "auction not yet start");
        //是否有人出价
        if(Actionmap[_nftaddress].highestBid == 0){
            //出价需低于最初始价金额
        require(msg.value < Actionmap[_nftaddress].limitBid, "less than initial bid");
        }
        		// 记录新的最高出价者与金额,以及下次最低出价
        Actionmap[_nftaddress].highestBidder = msg.sender; 
        Actionmap[_nftaddress].highestBid = msg.value;
         
        //发送更高出价事件
        emit HighBidEvt(msg.sender, msg.value);
        }
// 中断拍卖，金额返回
    function Auctioninterruption(address _nftaddress) public{
        require(msg.sender == unite[_nftaddress].owner || msg.sender == conservator,"You have no authority to close this auction");
        require(!Actionmap[_nftaddress].endFlg, "auction already ended");
        //设置拍卖结束
        Actionmap[_nftaddress].endsFlg = true;
                if (Actionmap[_nftaddress].highestBid != 0) {
          payable(Actionmap[_nftaddress].highestBidder).transfer(Actionmap[_nftaddress].highestBid);
        }
        Actionmap[_nftaddress].endFlg = true;
    }
    
	
    //结束拍卖
    function setAuctionEnd(address _nftaddress) public {
        //需要身份为商品拥有者，或管理员
        require(msg.sender == unite[_nftaddress].owner || msg.sender == conservator,"You have no authority to close this auction");
        // //区块时间需大于拍卖期限
        // require(block.timestamp >= Actionmap[_nftaddress].auctionLimit, "auction not yet ended");
        
        //拍卖需还没设置为已结束		
        require(!Actionmap[_nftaddress].endFlg, "auction already ended");

        //设置拍卖结束
        Actionmap[_nftaddress].endFlg = true;
        //设置购买者
        unite[_nftaddress].seller = payable(Actionmap[_nftaddress].highestBidder);
        //下架商品
        unite[_nftaddress].sold = false;
        emit AuctionEndedEvt(Actionmap[_nftaddress].highestBidder, Actionmap[_nftaddress].highestBid);

        //将最高竞标金额，移交给给主持人
        payable(Actionmap[_nftaddress].beneficiary).transfer(Actionmap[_nftaddress].highestBid);
    }
}