$(function(){
	var submitted=false;
	$('form.submitOnce').submit(function(){
		if(submitted){
			return false;
		}
		else{
			submitted=true;
			if(this.id == 'send'){
			$('form.submitOnce button[type="submit"]').html('Sending...')
			}
			else{
			$('form.submitOnce button[type="submit"]').html('loading...')
			}
			return true;
		}
	});
});