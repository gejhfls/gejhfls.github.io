$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
	var pwd=document.getElementById("pwd").value;
	//修改密码请改此处
	if((userName=="倪慧柳倩" || userName=="veronica" || userName=="Veronica")
		&&  (pwd=="kid" || pwd =="1412" || pwd == "KID" || pwd == "Kid")){
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="BirthdayCake.html";},2000);
	}
	else{
		alert('怪盗基德：猜错了，蛋糕不给你吃');
	}
});
