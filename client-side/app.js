$('button').click(function(){
	$.ajax({
		url: 'https://36dafmzvdj.execute-api.us-west-2.amazonaws.com/dev/hello',
		type: 'GET',
		success:function(data){
		},
		fail:function(error){
			alert("Error! Data could not be found");
		},
	})
});

let imgNum = [1,2,3,4,5,6,7,8,9,10,11,12];
let keyS = ['Keys'];

function displayImages (responseData){
	let imgOne = $('<div><img src="36dafmzvdj.execute-api.us-west-2.amazonaws.com/dev/hello"</div>');
}
