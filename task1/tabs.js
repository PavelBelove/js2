
$(document).ready(function() {

$('ul.tabs li').css('cursor', 'pointer');

$('ul.tabs.tabs1 li').click(function(){
	var thisClass = this.className.slice(0,2);
	$('div.t1').hide();
	$('div.t2').hide();
	$('div.t3').hide();
	$('div.t4').hide();
	$('div.' + thisClass).show();
	$('ul.tabs.tabs1 li').removeClass('tab-current');
	$(this).addClass('tab-current');
	});

});