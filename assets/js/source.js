
$(document).ready(function(){
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.tablet__image',
    })
        .setClassToggle('.tablet__image', 'fade-in') // add class to project01
        // .addIndicators({
        //     name: 'fade scene',
        //     colorTrigger: 'black',
        //     indent: 200,
        //     colorStart: '#75C695'
        // }) // this requires a plugin
        .addTo(controller);

});

// $(document).ready(function(){
//     $(".our-work").hover(function(){
//         $(this).toggleClass("js-our-work-hover");
//     });
// });




// homepage
$(document).ready(function(){
    $(".project").each(function(){
        // Init ScrollMagic
        var controller = new ScrollMagic.Controller();

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this, /*img*/
            triggerHook:0.9, /*controlls how far down you scroll down page to activate scene*/
            reverse:false /*only fades in once*/
        })
            .setClassToggle(this, 'fade-in') // add class to project01
            // .addIndicators({
            //     name: 'fade scene',
            //     colorTrigger: 'black',
            //     indent: 200,
            //     colorStart: '#75C695'
            // }) // this requires a plugin
            .addTo(controller);
    });
});

// Init ScrollMagic
var controllerPin = new ScrollMagic.Controller();


var pinScene = new ScrollMagic.Scene({
    triggerElement: '.js-pin-hook',
    triggerHook: 0.8,
    duration: '85%'
})
    .setPin('.js-pin-hook', {pushFollowers: false})
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        indent: 200,
        colorStart: '#75C695'
    }) // this requires a plugin
    .addTo(controllerPin);

// // our projects
// $(document).ready(function(){
//     $(".our-work-css").each(function(){
//         // Init ScrollMagic
//         var controller = new ScrollMagic.Controller();
//
//         // build a scene
//         var ourScene = new ScrollMagic.Scene({
//             triggerElement: this, /*img*/
//             triggerHook:0.4, /*controlls how far down you scroll down page to activate scene*/
//             reverse:false /*only fades in once*/
//         })
//             .setClassToggle(this, 'fade-in') // add class to project01
//             .addIndicators({
//                 name: 'fade scene hello',
//                 colorTrigger: 'black',
//                 colorStart: '#75C695'
//             }) // this requires a plugin
//             .addTo(controller);
//     });
// });


$(document).ready(function(){
    $('.services__text').hover(function(){
        $(this).addClass('animated bounce');
    });
});




