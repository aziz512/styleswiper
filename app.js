$( document ).ready(function() {
    console.log( "ready!" );
    // declare empty array


 var userTags = [];
 


    
    
     $('.fashiontag').click(function() {
            console.log($(this).text() );
// add this.text to empty array
// console log array
userTags.push($(this).text());

console.log(userTags);
        });
    
    
    
    
    
    
    
});