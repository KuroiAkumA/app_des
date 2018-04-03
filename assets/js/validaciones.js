$(document).ready(function () {

	$('#nombre, #email, #tel, form').on('keyup focus change', function() {
		if($('#nombre').data('valid')=='true' && $('#email').data('valid')=='true' && $('#tel').data('valid')=='true' && $('#asunto').val()!='0'){
			$('#enviar').removeClass('btn-danger');
			$('#enviar').addClass('btn-success');
			$('#enviar').removeAttr('disabled');
		}else{
			$('#enviar').removeClass('btn-success');
			$('#enviar').addClass('btn-danger');
			$('#enviar').attr('disabled', 'disabled');
		}
	});

	$('#nombre').on('keyup focus', function () {
		var nombre = $(this).val();
		if(nombre.length > 3){
			$('#nombre').data('valid', 'true');
			$(this).removeClass('is-invalid');
			$(this).addClass('is-valid');
			$('#nombre_feed').removeClass('invalid-feedback');
			$('#nombre_feed').addClass('valid-feedback');
			$('#nombre_feed').html('Correcto');
		}else{
			$('#nombre').data('valid', 'false');
			$(this).removeClass('is-valid');
			$(this).addClass('is-invalid');
			if(nombre.length <= 0){
				$('#nombre_feed').addClass('invalid-feedback');
				$('#nombre_feed').html('Debe ingresar un nombre');
			}else{
				$('#nombre_feed').addClass('invalid-feedback');
				$('#nombre_feed').html('El nombre debe ser mayor a 3 carateres');
			}
		}
	});

	$('#email').on('keyup focus', function () {
		var email = $(this).val();
		var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
		if(reg.exec(email)){
			$('#email').data('valid', 'true');
			$(this).removeClass('is-invalid');
			$(this).addClass('is-valid');
			$('#email_feed').removeClass('invalid-feedback');
			$('#email_feed').addClass('valid-feedback');
			$('#email_feed').html('Correcto');
		}else{	
			$('#email').data('valid', 'false');		
			$(this).removeClass('is-valid');
			$(this).addClass('is-invalid');
			if(email.length <= 0){
				$('#email_feed').addClass('invalid-feedback');
				$('#email_feed').html('Debe ingresar un email');
			}else{
				$('#email_feed').addClass('invalid-feedback');
				$('#email_feed').html('El email debe cumplir con el formato ejem: ejemplo@ejemplo.cl');
			}
		}
	});

	$('#tel').on('keyup focus', function () {
		var tel = $(this).val();
		if(tel > 99999999 && tel < 999999999){
			$('#tel').data('valid', 'true');
			$(this).removeClass('is-invalid');
			$(this).addClass('is-valid');
			$('#tel_feed').removeClass('invalid-feedback');
			$('#tel_feed').addClass('valid-feedback');
			$('#tel_feed').html('Correcto');
		}else{
			$('#tel').data('valid', 'false');
			$(this).removeClass('is-valid');
			$(this).addClass('is-invalid');
			if(tel===''){
				$('#tel_feed').addClass('invalid-feedback');
				$('#tel_feed').html('Debe ingresar un telefono');
			}else{
				$('#tel_feed').addClass('invalid-feedback');
				$('#tel_feed').html('El telefono debe tener 9 digitos');
			}
		}
	});

	$('#asunto').on('change focus', function () {
		var asunto = $(this).val();
		if(asunto!='0'){
			$(this).removeClass('is-invalid');
			$(this).addClass('is-valid');
			$('#asunto_feed').removeClass('invalid-feedback');
			$('#asunto_feed').addClass('valid-feedback');
			$('#asunto_feed').html('Correcto');
		}else{
			$(this).removeClass('is-valid');
			$(this).addClass('is-invalid');			
			$('#asunto_feed').addClass('invalid-feedback');
			$('#asunto_feed').html('Debe seleccionar un asunto');
		}		
	});

});