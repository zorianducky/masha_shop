$(document).ready(function () {
	function validation() {
		err = 0;
		$('.form-control').each(function () {
			if($(this).val() == ''){
				$(this).addClass('is-invalid');
				err = 1
			}else{
				$(this).removeClass('is-invalid');
			}
		})
		if(window.location=='/'){
			if($('#paswd').val() != $('#paswd2').val() && $('#paswd').val()!=''){
				err = 1
				$('#paswd').addClass('is-invalid');
				$('#paswd2').addClass('is-invalid');
			}else{
				$('#paswd').removeClass('is-invalid');
				$('#paswd2').removeClass('is-invalid');
			}
		}

		if (err){
			return false
		}else{
			return true
		}
	}
	$('#rega_btn').on('click',function(){
		if(validation()){
			$.ajax({
			  method: "POST",
			  url: "/ajax/registration",
			  contentType: "application/json",
			  dataType: 'json',
			  data: JSON.stringify({ 
			  	login: $('#login').val(), 
			  	paswd: $('#paswd').val(),
			  	name: $('#name').val(),
			  	surname: $('#surname').val(),
			  	phone: $('#phone').val(),
			  	mail: $('#mail').val(),
			  }),
			})
			.done(function(result) {
			    window.location.href= '/login'

			});
		}
	})

	$('#login_btn').on('click',function(){
		//if(validation()){
			$.ajax({
			  method: "POST",
			  url: "/ajax/login",
			  contentType: "application/json",
			  dataType: 'json',
			  data: JSON.stringify({ 
			  	login: $('#login').val(), 
			  	paswd: $('#paswd').val(),
			  }),
			})
			.done(function(result) {
			    if(result.result){
			    	window.location.href='/shopik';
			    }else{
			    	$('#login').addClass('is-invalid');
			    	$('#paswd').addClass('is-invalid');
			    	$('.invalid-feedback').html(result.error);
			    }
			});
		//}

	})
})
