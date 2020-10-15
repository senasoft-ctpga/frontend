



$(document).ready(function(){

	$('#product__item').click(function(e){
		// e.preventDefault();
		const id = $(this).data('id');
		const data = {
			"id": id
		};

		// $.ajax({
		// 	url: 'http://localhost/api/productos',
		// 	type: 'POST',
		// 	data: data,
		// 	dataType: 'JSON',
			// success: function(data)
			// {
				// for( let i = 0; i <= 10)
				$('#destino').html("Item");
			// }
		// });
	})
});