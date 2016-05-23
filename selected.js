var displayImages = function(images, $selected){
    $selected.empty();
    
    for (var number = 0; number < images.length; number = number + 1) {
        var image = images[number]
        $selected.append(`
            <div class="row col-md-offset-3 col-md-8" style="max-width:600px; margin-top:5px; margin-bottom:5px; background:#DADFE1; padding-top: 20px;padding-bottom: 20px;border-radius: 5%;">
                <p style="word-wrap:break-word; font-size:15pt;">${image.name}</p>
                <img class="img-responsive" style="display:inline-block;"  src = "${image.src}">
                <p style="word-wrap:break-word;">${image.tags}</p>
            </div>
        `);
    }
};




var addResults = function(result){
     ;
}


var transform = function(response){
    return response.data.map(function(object){
        if (object.caption) {
            return { 
                name : object.caption.text,
                src : object.images.low_resolution.url,
                tags : object.tags,
            } 
        }
        else{
            return { 
            name : "",
            src : object.images.low_resolution.url,
            tags : object.tags,
        } 
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