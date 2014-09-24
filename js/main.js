
$(document).ready(function(){

	var _warpclient;
	$("#testView").hide();
	
	
	function onConnectDone(res, reason) {
		setResponse("onConnectDone : <strong>"+AppWarp.ResultCode[res]+" Reason : "+reason+"</strong>");
	}

	function onDisconnectDone(res) {
		setResponse("onDisconnectDone : <strong>"+AppWarp.ResultCode[res]+"</strong>");
	}

	function onJoinLobbyDone(_lobby) {
		var msg = "onJoinLobbyDone : <strong>"+AppWarp.ResultCode[_lobby.getResult()] +"</strong>";
		setResponse(msg);
	}

	function onSubscribeLobbyDone(_lobby) {
		var msg = "onSubscribeLobbyDone : <strong>"+AppWarp.ResultCode[_lobby.getResult()]+"</strong>";
		setResponse(msg);
	}

	function onUnsubscribeLobbyDone(_lobby) {
		var msg = "onUnsubscribeLobbyDone : <strong>"+AppWarp.ResultCode[_lobby.getResult()]+"</strong>";
		setResponse(msg);
	}

	function onLeaveLobbyDone(_lobby) {
		var msg = "onLeaveLobbyDone : <strong>"+AppWarp.ResultCode[_lobby.getResult()]+"</strong>";
		setResponse(msg);
	}

	function onSendChatDone(res) {
		var msg = "onSendChatDone : <strong>"+AppWarp.ResultCode[res]+"</strong>";
		setResponse(msg);
	}

	function onChatReceived(_chat) {
		var msg = "<strong>" + _chat.getSender() + "</strong> says <i> " + _chat.getChat() + "</i>";
		setNotification(msg);
	}

	function onJoinRoomDone(_room) {
		var msg = "onJoinRoomDone : <strong>"+AppWarp.ResultCode[_room.getResult()]+"</strong>";
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room ID : " + _room.getRoomId();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room Name : " + _room.getName();
		setResponse(msg);
	}

	function onSubscribeRoomDone(_room) {
		var msg = "onSubscribeRoomDone : <strong>"+AppWarp.ResultCode[_room.getResult()]+"</strong>";
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room ID : " + _room.getRoomId();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room Name : " + _room.getName();
		setResponse(msg);
	}

	function onUnsubscribeRoomDone(_room) {
		var msg = "onUnsubscribeRoomDone : <strong>"+AppWarp.ResultCode[_room.getResult()]+"</strong>";
		setResponse(msg);
	}

	function onLeaveRoomDone(_room) {
		var msg = "onLeaveRoomDone : <strong>"+AppWarp.ResultCode[_room.getResult()]+"</strong>";
		setResponse(msg);
	}

	function onCreateRoomDone(_room) {
		var msg = "onCreateRoomDone : <strong>Result : "+AppWarp.ResultCode[_room.getResult()]+"</strong>";
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room ID : " + _room.getRoomId();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room Name : " + _room.getName();
		setResponse(msg);
	}

	function onDeleteRoomDone(_room) {
		var msg = "onDeleteRoomDone : <strong>"+AppWarp.ResultCode[_room.getResult()]+"</strong>";
		setResponse(msg);
	}

	function onGetLiveRoomInfoDone(_room) {
		var msg = "onGetLiveRoomInfoDone : <strong>" + AppWarp.ResultCode[_room.getResult()] + "</strong>";
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room Name : " + _room.getRoom().getName();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room Properties : " + _room.getProperties();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room Users :";
		for (var i = 0; i < _room.getUsers().length; ++i) {
			msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + _room.getUsers()[i];
		}
		setResponse(msg);
	}

	function onGetLiveUserInfoDone(_user) {
		var msg = "onGetLiveUserInfoDone : <strong>" + AppWarp.ResultCode[_user.getResult()] + "</strong>";
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;User Name : " + _user.getName();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;User Location : " + _user.getLocationId();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;User Paused : " + _user.isPaused();
		setResponse(msg);
	}

	function onGetLiveLobbyInfoDone(_room) {
		var msg = "onGetLiveLobbyInfoDone : <strong>" + AppWarp.ResultCode[_room.getResult()] + "</strong>";
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Lobby Name : " + _room.getRoom().getName();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Lobby MaxUsers : " + _room.getRoom().getMaxUsers();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Lobby Users :";
		for (var i = 0; i < _room.getUsers().length; ++i) {
			msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + _room.getUsers()[i];
		}
		setResponse(msg);
	}

	function onSetCustomRoomDataDone(_room) {
		
	}

	function onSetCustomUserDataDone(_user) {
		
	}

	function onGetAllRoomsDone(_rooms) {
		var msg = "onGetAllRoomsDone : <strong>" + AppWarp.ResultCode[_rooms.getResult()] + "</strong>";
		for (var i = 0; i < _rooms.getRoomIds().length; ++i) {
			msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;" + _rooms.getRoomIds()[i];
		}
		setResponse(msg);
	}

	function onGetOnlineUsersDone(_users) {
		var msg = "onGetOnlineUsersDone : <strong>" + AppWarp.ResultCode[_users.getResult()] + "</strong>";
		for (var i = 0; i < _users.getUsernames().length; ++i) {
			msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;" + _users.getUsernames()[i];
		}
		setResponse(msg);
	}

	function onGetMatchedRoomsDone(_rooms) {
		var msg = "onGetMatchedRoomsDone : <strong>" + AppWarp.ResultCode[_rooms.getResult()] + "</strong>";
		for(var i=0; i<_rooms.getRooms().length; ++i)
		{
			msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;" + _rooms.getRooms()[i].id;
		}
		setResponse(msg);
	}

	function onSendPrivateChatDone(res) {
		var msg = "onSendPrivateChatDone : <strong>"+AppWarp.ResultCode[res]+"</strong>";
		setResponse(msg);
	}

	function onSendUpdateDone(res) {
		var msg = "onSendUpdateDone : <strong>"+AppWarp.ResultCode[res]+"</strong>";
		setResponse(msg);
	}

	function onUpdatePropertyDone(_room) {
		var msg = "onUpdatePropertyDone : <strong>" + AppWarp.ResultCode[_room.getResult()] + "</strong>";
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp; Properties : "+ JSON.stringify(_room.getProperties());
		setResponse(msg);
	}

	function onLockPropertiesDone(res) {
		var msg = "onLockPropertiesDone : <strong>" + AppWarp.ResultCode[res] + "</strong>";
		setResponse(msg);
	}

	function onUnlockPropertiesDone(res) {
		var msg = "onUnlockPropertiesDone : <strong>" + AppWarp.ResultCode[res] + "</strong>";
		setResponse(msg);
	}

	function onRoomCreated(_room) {
		var msg = "onRoomCreated";
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room Id : " + _room.getRoomId();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room Name : " + _room.getName();
		setNotification(msg);
	}

	function onRoomDestroyed(_room) {
		var msg = "onRoomDestroyed";
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room Id : " + _room.getRoomId();
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room Name : " + _room.getName();
		setNotification(msg);
	}

	function onUserLeftRoom(_room, user) {
		var msg = "onUserLeftRoom : <strong>"+user+"</strong>";
		setNotification(msg);
	}

	function onUserJoinedRoom(_room, user) {
		var msg = "onUserJoinedRoom : <strong>"+user+"</strong>";
		setNotification(msg)
	}

	function onUserLeftLobby(_lobby, user) {
		var msg = "onUserLeftLobby : <strong>"+user+"</strong>";
		setNotification(msg)
	}

	function onUserJoinedLobby(_lobby, user) {
		var msg = "onUserJoinedLobby : <strong>"+user+"</strong>";
		setNotification(msg)
	}

	function onUpdatePeersReceived(bytes) {
		var msg = "onUpdatePeersReceived : <strong>" + bytes.length + " bytes </strong> received";
		setNotification(msg);
	}

	function onUserChangeRoomProperty(sender, properties, lockProperties) {
		var msg = "onUserChangeRoomProperty : Sender : <strong>" + sender + "</strong>";
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Properties : " + properties;
		msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Locked Properties : " + lockProperties;
		setNotification(msg);
	}

	function onPrivateChatReceived(sender, chat) {
		var msg = "<strong>" + sender + "</strong> privately says <i> " + chat + "</i>";
		setNotification(msg);
	}

	function onSendMoveDone(res) {
		var msg = "onSendMoveDone : <strong>" + res + "</strong>";
		setResponse(msg);
	}

	function onMoveCompleted(_move) {
		var msg = "onMoveCompleted : Move : <strong>" + _move.getMoveData() + "</strong> Next Turn : <strong>" + _move.getNextTurn() + "</strong>";
		setNotification(msg);
	}
	
	function onGetMoveHistoryDone(res, _moves)
	{
		var msg = "onGetMoveHistoryDone : <strong>" + res + "</strong>";
		for(var i=0; i<_moves.length; ++i)
			msg += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Sender : <strong>"+_moves[i].getSender() + "</strong> Move : <strong>"+_moves[i].getMoveData() + "</strong> Next Turn : <strong>"+_moves[i].getNextTurn()+"</strong>";
		setResponse(msg);
	}

	function onGameStarted(sender, room, next) {
		var msg = "onGameStarted : Sender : <strong>" + sender + "</strong> Next Turn : <strong>" + next + "</strong>";
		setNotification(msg);
	}

	function onGameStopped(sender, room) {
		var msg = "onGameStopped : Sender : <strong>" + sender + "</strong>";
		setNotification(msg);
	}

	function onStartGameDone(res) {
		var msg = "onStartGameDone : <strong>" + AppWarp.ResultCode[res] + "</strong>";
		setResponse(msg);
	}

	function onStopGameDone(res) {
		var msg = "onStopGameDone : <strong>" + AppWarp.ResultCode[res] + "</strong>";
		setResponse(msg);
	}

	function onUserPaused(locId, isLobby, user) {
		var msg = "onUserPaused : <strong>" + user + "</strong>";
		setNotification(msg);
	}

	function onUserResumed(locId, isLobby, user) {
		var msg = "onUserResumed : <strong>" + user + "</strong>";
		setNotification(msg);
	}
	
	var setResponse = function(response)
	{
		$("#response").html(response + "<br/>" + $("#response").html());
	}
	
	var setNotification = function(notification)
	{
		$("#notification").html(notification + "<br/>" + $("#notification").html());
	}
	
	$("#submitBtn").click(function(){
		var apiKey = $("#apiKey").val();
		var secretKey = $("#secretKey").val();
		var location = $("#location").val();
		var recovery = $("#recovery").prop('checked');
		
		if(apiKey == "" || secretKey == "")
			alert("Please Enter API Key and Secret Key");
 		else
		{
			//console.log(apiKey, secretKey, location, recovery);
			AppWarp.WarpClient.initialize(apiKey, secretKey);
			_warpclient = AppWarp.WarpClient.getInstance();
			_warpclient.setGeoLocation(location);
			if(recovery)
				_warpclient.setRecoveryAllowance(60);			
			_warpclient.setResponseListener(AppWarp.Events.onConnectDone, onConnectDone);
			_warpclient.setResponseListener(AppWarp.Events.onDisconnectDone, onDisconnectDone);
			_warpclient.setResponseListener(AppWarp.Events.onJoinLobbyDone, onJoinLobbyDone);
			_warpclient.setResponseListener(AppWarp.Events.onSubscribeLobbyDone, onSubscribeLobbyDone);
			_warpclient.setResponseListener(AppWarp.Events.onUnsubscribeLobbyDone, onUnsubscribeLobbyDone);
			_warpclient.setResponseListener(AppWarp.Events.onLeaveLobbyDone, onLeaveLobbyDone);
			_warpclient.setResponseListener(AppWarp.Events.onSendChatDone, onSendChatDone);
			_warpclient.setResponseListener(AppWarp.Events.onJoinRoomDone, onJoinRoomDone);
			_warpclient.setResponseListener(AppWarp.Events.onSubscribeRoomDone, onSubscribeRoomDone);
			_warpclient.setResponseListener(AppWarp.Events.onUnsubscribeRoomDone, onUnsubscribeRoomDone);
			_warpclient.setResponseListener(AppWarp.Events.onLeaveRoomDone, onLeaveRoomDone);
			_warpclient.setResponseListener(AppWarp.Events.onCreateRoomDone, onCreateRoomDone);
			_warpclient.setResponseListener(AppWarp.Events.onDeleteRoomDone, onDeleteRoomDone);
			_warpclient.setResponseListener(AppWarp.Events.onGetLiveRoomInfoDone, onGetLiveRoomInfoDone);
			_warpclient.setResponseListener(AppWarp.Events.onGetLiveUserInfoDone, onGetLiveUserInfoDone);
			_warpclient.setResponseListener(AppWarp.Events.onGetLiveLobbyInfoDone, onGetLiveLobbyInfoDone);
			_warpclient.setResponseListener(AppWarp.Events.onSetCustomUserDataDone, onSetCustomUserDataDone);
			_warpclient.setResponseListener(AppWarp.Events.onSetCustomRoomDataDone, onSetCustomRoomDataDone);
			_warpclient.setResponseListener(AppWarp.Events.onGetOnlineUsersDone, onGetOnlineUsersDone);
			_warpclient.setResponseListener(AppWarp.Events.onGetAllRoomsDone, onGetAllRoomsDone);
			_warpclient.setResponseListener(AppWarp.Events.onGetMatchedRoomsDone, onGetMatchedRoomsDone);
			_warpclient.setResponseListener(AppWarp.Events.onSendUpdateDone, onSendUpdateDone);
			_warpclient.setResponseListener(AppWarp.Events.onSendPrivateChatDone, onSendPrivateChatDone);
			_warpclient.setResponseListener(AppWarp.Events.onUpdatePropertyDone, onUpdatePropertyDone);
			_warpclient.setResponseListener(AppWarp.Events.onLockPropertiesDone, onLockPropertiesDone);
			_warpclient.setResponseListener(AppWarp.Events.onUnlockPropertiesDone, onUnlockPropertiesDone);
			_warpclient.setResponseListener(AppWarp.Events.onSendMoveDone, onSendMoveDone);
			_warpclient.setResponseListener(AppWarp.Events.onStartGameDone, onStartGameDone);
			_warpclient.setResponseListener(AppWarp.Events.onStopGameDone, onStopGameDone);
			_warpclient.setResponseListener(AppWarp.Events.onGetMoveHistoryDone, onGetMoveHistoryDone);
			_warpclient.setNotifyListener(AppWarp.Events.onChatReceived, onChatReceived);
			_warpclient.setNotifyListener(AppWarp.Events.onRoomCreated, onRoomCreated);
			_warpclient.setNotifyListener(AppWarp.Events.onRoomDestroyed, onRoomDestroyed);
			_warpclient.setNotifyListener(AppWarp.Events.onUserLeftRoom, onUserLeftRoom);
			_warpclient.setNotifyListener(AppWarp.Events.onUserJoinedRoom, onUserJoinedRoom);
			_warpclient.setNotifyListener(AppWarp.Events.onUserLeftLobby, onUserLeftLobby);
			_warpclient.setNotifyListener(AppWarp.Events.onUserJoinedLobby, onUserJoinedLobby);
			_warpclient.setNotifyListener(AppWarp.Events.onUpdatePeersReceived, onUpdatePeersReceived);
			_warpclient.setNotifyListener(AppWarp.Events.onUserChangeRoomProperty, onUserChangeRoomProperty);
			_warpclient.setNotifyListener(AppWarp.Events.onPrivateChatReceived, onPrivateChatReceived);
			_warpclient.setNotifyListener(AppWarp.Events.onMoveCompleted, onMoveCompleted);
			_warpclient.setNotifyListener(AppWarp.Events.onGameStarted, onGameStarted);
			_warpclient.setNotifyListener(AppWarp.Events.onGameStopped, onGameStopped);
			_warpclient.setNotifyListener(AppWarp.Events.onUserPaused, onUserPaused);
			_warpclient.setNotifyListener(AppWarp.Events.onUserResumed, onUserResumed);
				
			$("#loginView").fadeOut(function(){
				$("#testView").fadeIn();	
			});	
		}
	});
	
	$("#connectBtn").click(function(){
		bootbox.prompt("Username", function(user){
			_warpclient.connect(user);
		});
	});
	
	$("#disconnectBtn").click(function(){
		_warpclient.disconnect();
	});
	
	$("#recoverBtn").click(function(){
		_warpclient.recoverConnection();
	});
	
	$("#joinLobbyBtn").click(function(){
		_warpclient.joinLobby();
	});
	
	$("#leaveLobbyBtn").click(function(){
		_warpclient.leaveLobby();
	});
	
	$("#subscribeLobbyBtn").click(function(){
		_warpclient.subscribeLobby();
	});
	
	$("#unsubscriLobbyBtn").click(function(){
		_warpclient.unsubscribeLobby();
	});
	
	$("#getLiveUserBtn").click(function(){
		bootbox.prompt("User ID", function(userId){
			_warpclient.getLiveUserInfo(userId);
		});
	});
	
	$("#getLiveRoomBtn").click(function(){
		bootbox.prompt("Room ID", function(roomId){
			_warpclient.getLiveRoomInfo(roomId);
		});
	});
	
	$("#getLiveLobbyBtn").click(function(){
		_warpclient.getLiveLobbyInfo();
	});
	
	$("#createRoomBtn").click(function(){
		bootbox.prompt("Room Name", function(name){
			bootbox.prompt("Max Users", function(maxUser){
				_warpclient.createRoom(name, "admin", maxUser, null);
			});
		});
	});
	
	$("#createTurnRoomBtn").click(function(){
		bootbox.prompt("Room Name", function(name){
			bootbox.prompt("Max Users", function(maxUser){
				bootbox.prompt("Turn Time", function(turnTime){
					_warpclient.createTurnRoom(name, "admin", maxUser, null, turnTime);
				});
			});
		});
	});
	
	$("#joinRoomBtn").click(function(){
		bootbox.prompt("Room Id", function(roomID){
			_warpclient.joinRoom(roomID);
		});
	});
	
	$("#leaveRoomBtn").click(function(){
		bootbox.prompt("Room Id", function(roomID){
			_warpclient.leaveRoom(roomID);
		});
	});
	
	$("#subscribeRoomBtn").click(function(){
		bootbox.prompt("Room Id", function(roomID){
			_warpclient.subscribeRoom(roomID);
		});
	});
	
	$("#unsubscribeRoomBtn").click(function(){
		bootbox.prompt("Room Id", function(roomID){
			_warpclient.unsubscribeRoom(roomID);
		});
	});
	
	$("#deleteRoomBtn").click(function(){
		bootbox.prompt("Room Id", function(roomID){
			_warpclient.deleteRoom(roomID);
		});
	});
	
	$("#getAllRoomBtn").click(function(){
		_warpclient.getAllRooms();
	});
	
	$("#getAllUsersBtn").click(function(){
		_warpclient.getOnlineUsers();
	});
	
	$("#updatePropsBtn").click(function(){
		bootbox.prompt("Room Id", function(roomID){
			bootbox.prompt("Room Properties", function(props){
				_warpclient.updateRoomProperties(roomID, JSON.parse(props));
			});
		});
	});
	
	$("#lockPropsBtn").click(function(){
		bootbox.prompt("Room Properties", function(props){
			_warpclient.lockProperties(JSON.parse(props));
		});
	});
	
	$("#unlockPropsBtn").click(function(){
		bootbox.prompt("Room Property Name", function(propName){
			var props = [];
			props.push(propName);
			_warpclient.unlockProperties(props);
		});
	});
	
	$("#joinRoomRangeBtn").click(function(){
		bootbox.prompt("Min Users", function(min){
			bootbox.prompt("Max Users", function(max){
				_warpclient.joinRoomInRange(min, max, true);
			});
		});
	});
	
	$("#getRoomRangeBtn").click(function(){
		bootbox.prompt("Min Users", function(min){
			bootbox.prompt("Max Users", function(max){
				_warpclient.getRoomsInRange(min, max);
			});
		});
	});
	
	$("#getRoomPropBtn").click(function(){
		bootbox.prompt("Room Properties", function(props){
			_warpclient.getRoomsWithProperties(JSON.parse(props));
		});
	});
	
	$("#joinRoomPropBtn").click(function(){
		bootbox.prompt("Room Properties", function(props){
			_warpclient.joinRoomWithProperties(JSON.parse(props));
		});
	});
	
	$("#sendChatBtn").click(function(){
		bootbox.prompt("Chat Message", function(chat){
			_warpclient.sendChat(chat);
		});
	});
	
	$("#sendUpdateBtn").click(function(){
		bootbox.prompt("Message length", function(len){
			var bytes = new Uint8Array(len);
			for(var i=0; i<len; i++)
				bytes[i] = i;
			_warpclient.sendUpdatePeers(bytes);
		});
	});
	
	$("#sendPvtChatBtn").click(function(){
		bootbox.prompt("User", function(user){
			bootbox.prompt("Chat Message", function(chat){
				_warpclient.sendPrivateChat(user, chat);
			});
		});
	});
	
	$("#startGameBtn").click(function(){
		_warpclient.startGame();
	});
	
	$("#stopGameBtn").click(function(){
		_warpclient.stopGame();
	});
	
	$("#sendMoveBtn").click(function(){
		bootbox.prompt("Move Message", function(move){
			_warpclient.sendMove(move);
		});
	});
	
	$("#getMoveHistoryBtn").click(function(){
		_warpclient.getMoveHistory();
	});
});