// Check off specific to do by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	console.log(event);
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todo = $(this).val();
		$("ul").append('<li><span><i class="far fa-trash-alt"></i></span> '+ todo + '</li>');
	}
}); 

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});