AutoForm.hooks({    
    submitActivity: {
      before: {
        insert: function(doc) {
          doc.exactPrice = $('#exactPrice-radio').prop('checked');
//          doc.image = 
          doc.submitted = new Date();
          this.result(doc);
        }
      } 
    }     
  });