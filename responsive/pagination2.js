var page = 0;
var curr_page= 1; 
function print(data,n){
	if(n > 0){
	 page = Math.ceil(data.length/n);
	 if( curr_page == page){
	 	curr_page = 1;
	 	for(var i = (curr_page -1 ) * n; i < n * curr_page ; i++){
	 		var html = 
	 		'<div class="col-md-3">'+
	 		'<div class="container-item">'+
					'<img src="' + data[i ].url+'" class="img-responsive ">'+
					'<a href=" ">' + data[i ].name + " - " + data[i].code + '</a>'+
					'<a href=" ">' + data[i ].price + '</a>' +

				'<div class="icon" onclick="next_page()">' 
					+ i +
					'<i class="fa fa-heart-o" aria-hidden="true"></i>' +
					'<i class="fa fa-cart-arrow-down" aria-hidden="true"></i>' +
				'</div>'+
				'</div>'+
			'</div>';
	 		$('#gallery').append(html);
	 	}	
	 }else{
	 	for(var i = (curr_page -1 ) * n; i < n * curr_page ; i++){
	 		var html = 
	 		'<div class="col-md-3">'+
	 		'<div class="container-item">'+
					'<img src="' + data[i ].url+'" class="img-responsive ">'+
					'<a href=" ">' + data[i ].name + " - " + data[i].code + '</a>'+
					'<a href=" ">' + data[i ].price + '</a>' +

				'<div class="icon" onclick="next_page()">' 
					+ i +
					'<i class="fa fa-heart-o" aria-hidden="true"></i>' +
					'<i class="fa fa-cart-arrow-down" aria-hidden="true"></i>' +
				'</div>'+
				'</div>'+
			'</div>';
	 		$('#gallery').append(html);
	 	}	
	 }
	}else{
		alert('Error input');
	}
}

function next_page(){
	$('#gallery').html('');
	curr_page++;
	print(image,4);
}
$(document).ready(function(){
	print(image,4);

})	
