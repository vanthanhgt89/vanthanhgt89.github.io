var app = {
	newJob: function (e, type, input){
		var newjpb = $('input').val()
		var event = window.event || e;
		if (event.keycode == 13 && ){
			
		}
	}
}


$( function() {
	$( ".sorted-list" ).sortable({
		connectWith: '.sorted-list',
		placeholder: 'ui-state-highlight',
		start: function (event, ui){
			$(ui.item[0]).addClass('dragging')
		},
		stop: function (event, ui) {
			$(ui.item[0]).removeClass('dragging')
		}
	});
} );