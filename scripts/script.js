function bpSmall() {
    //console.log("bpSmall() called");
    /*
    jQuery("#gnb .btn-menu").on("click", function() {
        jQuery("#gnb").toggleClass("open");
    });
    */
    jQuery("#masthead .gnb .btn-menu").on("click", function() {
        alert(".btn-menu clicked!!");
    });
}
function bpMedium() {
    //console.log("bpMedium() called");
    jQuery("#masthead .gnb .btn-menu").on("click", function() {
        alert(".btn-menu clicked!!");
    });
}
function bpLarge() {
    //console.log("bpLarge() called");
}

jQuery(document).ready(function() {
    if(jQuery(window).width() <= 640) {
        bpSmall();
    }
    else if(641 <= jQuery(window).width() && jQuery(window).width() <= 1024) {
        bpMedium();
    }
    else {
        bpLarge();
    }

    jQuery(window).resize(function() {
        jQuery("#masthead .gnb *").off();
        if(jQuery(window).width() <= 640) {
            bpSmall();
        }
        else if(641 <= jQuery(window).width() && jQuery(window).width() <= 1024) {
            bpMedium();
        }
        else {
            bpLarge();
        }
    });
});


