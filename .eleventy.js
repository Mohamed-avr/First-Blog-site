const {DateTime} = require('luxon');

module.exports  = function (eleventyConfig)  {
 
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addFilter("postDate" , (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })


    return {
        
         dir : {
             input : "src" , 
             output : "public",
         }

      
    }; 
} 

// const  buttonNavbar = document.querySelector(".menu-ham");
// const navBarContainer = document.querySelector(".topNav");
// const navFexedChild =  navBarContainer.firstElementChild ;
// // selectChildren
// const childOne = document.querySelector('.oneX')
// const childTow = document.querySelector('.towX')
// const childThree = document.querySelector('.threeX');



// // {#  the event  #}
// buttonNavbar.addEventListener('click' , function() {

//     childOne.classList.toggle("one"); 
//     childTow.classList.toggle("tow"); 
//     childThree.classList.toggle("three"); 


//     if( childOne.classList.contains("one")) {
//       alert('here you can set your script')
//     }


// })

