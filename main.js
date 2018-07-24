$(document).ready(function(){
	var temp = '';
	for(var i = 0; i < list_of_disciplines.length; i++) {
		temp += ('<li><a href="#' + list_of_disciplines[i][0] + '">' + list_of_disciplines[i][1] + '</a></li>');
	}
	$('.header-list').html(temp)

	// Добавляем (Обновляем) заголовок в right блоке 
	$('.header-list li a').click(function() {
		var name_of_selected_section = this.text;


		$('.left h1').html(''); 
		$('.right h1').html(list_of_disciplines[number_of_disciplines.indexOf(this.text)][2]); 
		// Очищаем содержимое правого блока с контентом при переходе в другой раздел
		$(".right-content").html('<h1 style="cursor: pointer; background: lightgray; display: inline-block">← выбери тему</h1>');


		// Собираем контент блока - left-list
		var temp = '';
		for(var i = 0; i < sections_of_the_discipline[this.text].length; i++) {
			// temp += ('<li><a href="' + sections_of_the_discipline[this.text][i][1] + '">' + sections_of_the_discipline[this.text][i][0] + '</a></li>');
			temp += ('<li><a href="#">' + sections_of_the_discipline[this.text][i][0] + '</a></li>');
		}
		$('.left-list').html(temp);


		$('.left-list li a').click(function() {		
			$('.right-content').load('templates/' + 
										// ИСПРАВИТЬ
										// по тексту ссылки я нахожу название html файла 
										sections_of_the_discipline[name_of_selected_section][number_sections_of_the_discipline.indexOf(this.text)][1] + 
										'.html', function(response, status, xhr) {
				if(status == "error") {
					$(".right-content").html("An error occured: " + xhr.status + " " + xhr.statusText);
				}
			});
		});

	});

});