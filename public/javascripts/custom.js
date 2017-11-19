


/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
            METIS MENU 
            ======================================*/
            $('#main-menu').metisMenu();

            /*====================================
              LOAD APPROPRIATE MENU BAR
           ======================================*/
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });

          
     
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementsByClassName("btn btn-danger btn-span");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

/*for(var i=0; i<btn.length; i++) { 
    btn[i].onclick = function(id){
        modal.style.display='block';
    }
}*/

function deletar(clickned_id){
    modal.style.display='block';
    const id = "/delete/act/" + clickned_id;
    $("#modalExclui").attr('href', id);
}
// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    
}

modalCancel.onclick = function() {
    modal.style.display = "none";
}
modalExclui.onclick = function(){

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
