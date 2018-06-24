$(document).ready(function(){
    var temp = '';
    for(var i = 0; i < list_of_disciplines.length; i++) {
      temp += ('<li><a href="#' + list_of_disciplines[i][0] + '">' + list_of_disciplines[i][1] + '</a></li>');
    }
    $('.header-list').html(temp)


  $('.header-list li a').click(function() {
    $('.left h1').html(this.text); 

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


  $('.right').load('templates/limits.html', function(response, status, xhr) {
      if(status == "error") {
         $(".right").html("An error occured: " + xhr.status + " " + xhr.statusText);
      }
  });


});