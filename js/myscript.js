
// on paste event function
document.onpaste = function(event){
	var items = (event.clipboardData || event.originalEvent.clipboardData).items;
	for (var index in items) {
        var item = items[index];
        if (item.kind === 'file') {
            var blob = item.getAsFile();
            var reader = new FileReader();
            reader.onload = function (event) {
                console.log(event.target.result);
            }; 
            reader.readAsDataURL(blob);
        }
    }
}
