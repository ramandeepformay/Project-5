// lightbox plugin
lightbox.option({
    alwaysShowNavOnTouchDevices:true,
    albumLabel: "",
    fitImagesInViewport:true,
    maxWidth:"70%",
    positionFromTop:100,
    resizeDuration:	1000,
    wrapAround:true,
    maxWidth:900,
    maxHeight:600,
    disableScrolling:true
})

// search and filter
$("#search").on("keyup", function(){
    // declaring variables
    let value, data, dataLower;
    // getting input value
     value = $(this).val().toLowerCase();
    // looping through all the achor tags
        $("a").each(function(){
            //  getting captions
            data = $(this).attr("data-title")
            dataLower = data.toLowerCase();
            //  using conditionals to check the string present in the caption
            if(dataLower.indexOf(value)>-1){
                // if present show those elements
                $(this).css('display', 'block');
            } 
            else{
                $(this).css('display', 'none');
            }
        })
    });