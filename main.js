$(document).ready(function(){
	var temp = '';
	for(var i = 0; i < list_of_disciplines.length; i++) {
		temp += ('<li><a href="#' + list_of_disciplines[i][0] + '">' + list_of_disciplines[i][1] + '</a></li>');
	}
	$('.header-list').html(temp)

	// Добавляем (Обновляем) заголовок в right блоке 
	$('.header-list li a').click(function() {
		$('.left h1').html(''); 
		$('.right h1').html(list_of_disciplines[number_of_disciplines.indexOf(this.text)][2]); 

		// Собираем контент блока - left-list
		var temp = '';
		for(var i = 0; i < sections_of_the_discipline[this.text].length; i++) {
			temp += ('<li><a href="' + sections_of_the_discipline[this.text][i][1] + '">' + sections_of_the_discipline[this.text][i][0] + '</a></li>');
		}
		$('.left-list').html(temp);


		$('.left-list li a').click(function() {
			console.log('ok');
		});
	});


	$('.right-content').load('templates/limits.html', function(response, status, xhr) {
		if(status == "error") {
			$(".right-content").html("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});

});