Template.formDatabase.helpers({
	valueHelper: function() {
		return $('#defaultValue').val();
	}
});

Template.formDatabase.events({
	'blur #defaultValue': function(e) {
	var value = $('#defaultValue').val();
	if($('#weekdays').prop('checked')) {
		$("[name='monday.0']").val(value);
		$("[name='tuesday.0']").val(value);
		$("[name='wednesday.0']").val(value);
		$("[name='thursday.0']").val(value);
		$("[name='friday.0']").val(value);
	}
	if ($('#weekdays').prop('checked')){
		$("[name='saturday.0']").val(value);
		$("[name='sunday.0']").val(value);
	}
	},

	'change #weekdays': function(e) {
		var value = $('#defaultValue').val();
		if($('#weekdays').prop('checked')) {
		$("[name='monday.0']").val(value);
		$("[name='tuesday.0']").val(value);
		$("[name='wednesday.0']").val(value);
		$("[name='thursday.0']").val(value);
		$("[name='friday.0']").val(value);			
		}
		else {
		$("[name='monday.0']").val(null);
		$("[name='tuesday.0']").val(null);
		$("[name='wednesday.0']").val(null);
		$("[name='thursday.0']").val(null);
		$("[name='friday.0']").val(null);
		}
	},

	'change #weekend': function(e) {
		var value = $('#defaultValue').val();
		if($('#weekend').prop('checked')) {
		$("[name='saturday.0']").val(value);
		$("[name='sunday.0']").val(value);		
		}
		else {
		$("[name='saturday.0']").val(null);
		$("[name='sunday.0']").val(null);
		}
	}
});