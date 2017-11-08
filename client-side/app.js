$('button').click(function(){
	$.ajax({
		url: 'https://1et2paliv9.execute-api.us-west-2.amazonaws.com/dev/hello',
		type: 'GET',
		'Content-Type': 'application/json'
	})

	.done((response) => {
  		console.log(response);
  		buildHTMLElements(response.message.Contents)
		$(".pics").append("hi");
	})

	.fail((error) => {
 		 alert("Error! Data could not be found");
	})

function buildHTMLElements (responseData) {
	responseData.map(peeonjesus=>$(".die").append(`<div class="shineii"><img src="https://s3-us-west-2.amazonaws.com/photo-bucket-tmp-prjct/${peeonjesus.Key}"></div>`))
}

});



// function displayImages (responseData){
// 	let imgOne = $('<div><img src="36dafmzvdj.execute-api.us-west-2.amazonaws.com/dev/hello"</div>');
// }
