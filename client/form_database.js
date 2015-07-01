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
// $(".autoform-add-item").trigger('click');
});

Template.formDatabase.events({
	'blur #defaultValue0': function(e) {
	var value = $('#defaultValue0').val();
	if($('#weekdays0').prop('checked')) {
		$("[name='monday.0']").val(value);
		$("[name='tuesday.0']").val(value);
		$("[name='wednesday.0']").val(value);
		$("[name='thursday.0']").val(value);
		$("[name='friday.0']").val(value);
	}
	if ($('#weekdays0').prop('checked')){
		$("[name='saturday.0']").val(value);
		$("[name='sunday.0']").val(value);
	}
	},

	'change #weekdays0': function(e) {
		var value = $('#defaultValue0').val();
		if($('#weekdays0').prop('checked')) {
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

	'change #weekend0': function(e) {
		var value = $('#defaultValue0').val();
		if($('#weekend0').prop('checked')) {
		$("[name='saturday.0']").val(value);
		$("[name='sunday.0']").val(value);		
		}
		else {
		$("[name='saturday.0']").val(null);
		$("[name='sunday.0']").val(null);
		}
	},
	'blur #defaultValue1': function(e) {
	var value = $('#defaultValue1').val();
	if($('#weekdays1').prop('checked')) {
		$("[name='monday.1']").val(value);
		$("[name='tuesday.1']").val(value);
		$("[name='wednesday.1']").val(value);
		$("[name='thursday.1']").val(value);
		$("[name='friday.1']").val(value);
	}
	if ($('#weekdays0').prop('checked')){
		$("[name='saturday.0']").val(value);
		$("[name='sunday.0']").val(value);
	}
	},

	'change #weekdays1': function(e) {
		var value = $('#defaultValue1').val();
		if($('#weekdays1').prop('checked')) {
		$("[name='monday.1']").val(value);
		$("[name='tuesday.1']").val(value);
		$("[name='wednesday.1']").val(value);
		$("[name='thursday.1']").val(value);
		$("[name='friday.1']").val(value);			
		}
		else {
		$("[name='monday.1']").val(null);
		$("[name='tuesday.1']").val(null);
		$("[name='wednesday.1']").val(null);
		$("[name='thursday.1']").val(null);
		$("[name='friday.1']").val(null);
		}
	},

	'change #weekend1': function(e) {
		var value = $('#defaultValue1').val();
		if($('#weekend1').prop('checked')) {
		$("[name='saturday.1']").val(value);
		$("[name='sunday.1']").val(value);		
		}
		else {
		$("[name='saturday.1']").val(null);
		$("[name='sunday.1']").val(null);
		}
	},
	'click #add-all-button': function(e) {
/*		if($("[name='monday.1']").get(0))
			$(".autoform-remove-item").trigger('click');
		else
*/			$(".autoform-add-item").trigger('click');
	},

	'click .autoform-add-item': function(e) {
		$('#days1').css('display', 'inline-block');
	},
	'click .autoform-remove-item': function(e) {
//		if($("[name='monday.1']").get(0) || $("[name='tuesday.1']").get(0) || $("[name='wednesday.1']").get(0) || $("[name='thursday.1']").get(0) || $("[name='friday.1']").get(0) || $("[name='saturday.1']").get(0) || $("[name='sunday.1']").get(0))
			$('#days1').css('display', 'none');
	},
});