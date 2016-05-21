$( document ).ready(function() {
    console.log( "ready!" );
    
    // ? we're defining the userTags to get input from the user. so he or she can 
    

    // ? When you click the button it pushes the button text to a array.
     $('.fashiontag').click(function() {
      if ($(this).data("selected") != "true") {
       $(this).data("selected", "true");
       $(this).css("background-color", "cyan");
       console.log($(this).text() );
       userTags.push($(this).text());
       console.log(userTags);
      }
      else
      {
       userTags.splice(userTags.indexOf($(this).text()), 1);
       $(this).css("background-color", "white");
       $(this).data("selected", "false");
       console.log(userTags);
      }
     });
        
    // we're pushing the button.text to the array. to search instagram for the hashtags 
    // 
    
    var arrayLength = userTags.length;
     for (var i = 0; i < arrayLength; i++) {
       console.log(userTags[i]);
    //Do something
    }
    
    function get(name){
     if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      {
        return decodeURIComponent(name[1]);
      }
    }
    
    
    
    
});