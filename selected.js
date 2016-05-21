var displayImages = function(images, $selected){
    $selected.empty();
    
    for (var number = 0; number < images.length; number = number + 1) {
        var image = images[number]
        $selected.append(`
            <div class="col-md-offset-2 col-md-8">
                <p>${image.name}</p>
                <img class="img-responsive"  src = "${image.src}">
                <p>${image.tags}</p>
            </div>
        `);
    }
};




var addResults = function(result){
     ;
}

var transform = function(response){
    return response.data.map(function(object){
        return { 
            name : object.caption.text,
            src : object.images.low_resolution.url,
            tags : object.tags,
        } 
    });
}

var userTags = [];

function getImages( tags, callback ){
    var waiting = tags.length;
    var result = [];
    
    //  ^ these variables wait for the images from instagram and calls them and. Adds them as a result.  
    
    tags.map(function(tag){
        return $.getJSON('https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id=5fc1f7dfcecd4e6baa114415c258e0ab&callback=?', function(c){
            waiting--;
            result = result.concat(c.data);
            if(waiting === 0){
                callback({data: result});
            }
        });
    });
};
    
    
jQuery(function(){
    getImages(userTags, function(result){
         displayImages(transform(result), jQuery('#selected'));
    });
});
//