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