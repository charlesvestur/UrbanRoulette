AutoForm.hooks({    
    submitActivity: {
      before: {
        insert: function(doc) {
          doc.exactPrice = $('#exactPrice-radio').prop('checked');
/*          if($("[name='image']").val() === '')
         	 doc.image = $('#illustration').val();
*/          doc.submitted = new Date();
          this.result(doc);
        }
      } 
    }     
  });

Template.formDatabase.onRendered(function(){
$('.summernote').summernote({
  toolbar: [
    //[groupname, [button list]]
     
    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']],
  ]
	});
$(".list-group-item").css({'display': 'table-cell', 'padding':'0 0 0 20px', 'border': 'none'});
});

Template.formDatabase.helpers({
	valueHelper: function() {
		return $('#defaultValue').val();
	},
	test: function()  {
		return Activities.find({});
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