  
$(document).ready(function(){
    if($('.blog-container').length)
		{
			$('.blog-container').masonry(
			{
				itemSelector:'.blog-post',
				columnWidth:'.blog-post',
				gutter:30
			});
    }
})