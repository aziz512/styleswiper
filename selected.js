var displayImages = function(images, $selected){
    $selected.empty();
    
    for (var number = 0; number < images.length; number = number + 1) {
        var image = images[number]
        $selected.append(`
            <div col-md-6>
                <p>${image.name}</p>
                <img class="img-responsive"  src = "${image.src}">
                <p>${image.tags}</p>
            </div>
        `);
    }
};


jQuery(function(){
    displayImages(images, jQuery('#selected'));
});


var addResults = function(result){
    debugger;
}

var userTags = ['sneakers', 'dresses', 'jewelry'];

function getImages( tags, callback ){
    var waiting = tags.length;
    var result = [];
    
    userTags.map(function(tag){
    return $.getJSON('https://api.instagram.com/v1/tags/sneakers/media/recent?client_id=5fc1f7dfcecd4e6baa114415c258e0ab&callback=?', function(c){
        waiting--;
        result = result.concat(c.data);
        if(waiting === 0){
            callback({data: result});
        }

    });
});
    
}
getImages(tags, function(){
    debugger;
);