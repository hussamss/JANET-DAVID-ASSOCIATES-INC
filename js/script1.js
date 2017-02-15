	// $('li.import a').on('click', function(e){
	// 	e.preventDefault();
	// 	var href = this.href;
	// 	// document.write(href)
	// 	var $this = $(this);
	// 	// $('div').removeClass('jumbotron');
	// 	$('.jumbotron').textContent = '';
	// 	// $this.addClass('exerAndResult');
	// 	// $('exerAndResult').load(href, '#ERcontent').hide().fadeIn();
	// 	// $('#mission').
	// 	// history.pushState('', $this.text, href);

	// });

// $('a.thumbnail').on('click', function(e){
// 		e.preventDefault();
// 		var href = this.href;
// 		// document.write(href);
// 		// var $this = $(this);
// 		$('div.mission').addClass('miss');
// 		$('div.miss').addClass('mission');
// 		$('div.mission').remove();
// 		$('#smart').load(href, '#thoughts').hide().fadeIn();

// 		// $('.newContent').load(href, '.newContent');
// 		// $('div').removeClass('jumbotron');
// 		// $('.jumbotron').textContent = '';
// 		// $this.addClass('exerAndResult');
// 		// $('exerAndResult').load(href, '#ERcontent').hide().fadeIn();
// 		// $('#mission').
// 		// history.pushState('', $this.text, href);

// 	});

$('a.thumbnail').on('click', function(e){
	e.preventDefault();
	var url = this.href;
	// var id = this.attr('id');
	var id = $(this).attr('id');

	// document.write(id);
	var idElement = '#'+id;
	// document.write(idElement);
	$('div.r ').remove();
	$('div.jumbotron').addClass('makewide');
	// $('#mission').load(url + idElement).hide().fadeIn(1100);
	$('#smart').load(url + ' #thoughts').hide().fadeIn(1100);



})