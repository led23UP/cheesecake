eventHandler = function() {
 	<!-- Checks if user inputed "vegan". If so, alert them. If not, give them a order complete message with their provided details -->
			if($("#txtArea").val().toLowerCase().indexOf("vegan") !== -1)
		{
			alert("Warning: The cheesecake contains dairy");
		}
		else
		{
			var topping = $('input[name="toppings"]:checked').val();
			var quantity = ($('#quantity :selected').text());
			var txt = $("#txtArea").val();
				
				
			$("#comText").text("Thank you! Your order has been placed: "+"toppings: "+topping+", Quantity: "+quantity+", notes: "+txt);

					
			$("#notes").hide();
			$("#options").hide();
			$("#txtArea").hide();
			$("#obtn").hide();
		}
}
$(function() {
	$("#obtn").click(eventHandler);


//https://stackoverflow.com/questions/4599975/html-select-box-options-on-hover
//https://css-tricks.com/almanac/selectors/n/not/
$('#selectUl li:not(":first")').addClass('unselected'); // any item that is not "first" is unselected in css
	$('#selectUl').hover(
    		function(){
        		$(this).find('li').click(
           			function(){

				//deselects current selected and unselects everything else

               			$('.unselected').removeClass('unselected'); 
               			$(this).siblings('li').addClass('unselected');
				//choose the selected option
               			var index = $(this).index();
               			$('select[name=size]')
                    		.find('option:eq(' + index + ')')
                    		.attr('selected',true);
            	});
    	},
    	function(){
    	});

});

