var fs = requere('fs');

fs.stat('./view/page.html', function(err, stats){

	console.log('Is file -->' + stats.isFile());

	console.log(stats);

});