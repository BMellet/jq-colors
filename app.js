$(document).ready(function()
{
	
	
	$('.color').each(function(){

		var color = $(this).attr('data-color');
		this.style.backgroundColor = color;
	});

	

	$('.color').click(function()
	{
		var color = $(this).attr('data-color');
		var check = $('#modify-texte').is(':checked')

		if (check)
		{
			$(".main").css("color",color);
		}
		else
		{
			$(".main").css("background-color",color);
		}


	});

});// good luck !
