	var COLUMN_TYPE = ['todo', 'doing', 'done'];
	var DB = {
		getData: function () {
			if (typeof(Storage) !== "undefined") {
				var data;
				try{
					data = JSON.parse(localStorage.getItem('list')) || {};
				}catch(error){
					data = {};
				}
			} else {
				alert('Sorry! No wed localStorage support..')
				return {};
			}
		},

		setData: function (data) {
			localStorage.setItem('list', JSON.stringify(data));
		}
	}


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
			$('#btn-delete').off('click')
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