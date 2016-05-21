var displayImages = function(images, $selected){
    $selected.empty();
    
    for (var number = 0; number < images.length; number = number + 1) {
        console.log(images[number]);
        var image = images[number]
        $selected.append(`
            <div>
                <h1>${image.name}</h1>
                <img src = "${image.src}">
            </div>
        `);
    }
};

var transform = function(response){
   debugger 
}

jQuery(function(){
    displayImages(images, jQuery('#selected'));
    transform(response);
});