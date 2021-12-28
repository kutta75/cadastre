$(function() { 
	var $divdiv =$("div div");
	var $div = $("div") ; 
	$divdiv.click(function(e) {
		mythis=this ;
		$divdiv.css('font-weight','normal');	
		$divdiv.css('background-color','white');
		mythis.style.fontWeight="bold" ;
		mythis.style.backgroundColor="lightgrey" ;
	} )
	
   }
   );