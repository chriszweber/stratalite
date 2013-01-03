//Needs testing

var validate = function(eForm){

	$('#'+eForm).submit(function(){
		//gather required fields
		var eInputs = $('#' + eform + ' .required');
		
		eInputs.each(function(i){
			if(eInputs[i].type="checkbox"){
				if(!eInputs[i].checked){
					return false;
				}
			}
			else{
				if(!eInputs[i].value){
					return false;
				}
				if(eInputs[i].type="email"){
					var rValidEmail = /^[\w\.=-]+\@[\w\.-]+\.[a-z]{2,4}$/;
					if(eInputs[i]!=rValidEmail){
						return false;
					}
				}
			}
			
		});
		
	});
}