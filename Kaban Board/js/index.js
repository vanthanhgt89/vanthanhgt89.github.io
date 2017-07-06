var app = {
	newJob: function (e, type, input){
		var jobName = $(input).val();
		var event = window.event || e;
		if (event.keyCode === 13 && jobName.trim() !== ''){
			this.addJobToList(type,jobName);

			$(input).val('');
		}
	},
	addJobToList: function(type, jobName) {
		var html = '<li class="collection-item ui-state-default"> '+ jobName +'<span class="badge" onclick="app.deleteJob(this)"><i class="material-icons">delete</i></span> </li>';
		$('#' + type ).append(html);
	},
	deleteJob: function(span){
		var modal = $('#modal-confirm');
		var item = $(span).parent();
		modal.modal('open');
		$('#btn-delete').on('click', function (){
			item.remove();
			modal.modal('close');
		})
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