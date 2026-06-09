function bpSmall() {
    //console.log("bpSmall() called");
    jQuery("#masthead .gnb .btn-menu").on("click", function() {
        jQuery("#sidebar, #sidebar-overlay").show();
    });
    jQuery("#sidebar .ctrl .btn-close, #sidebar-overlay").on("click", function() {
        jQuery("#sidebar, #sidebar-overlay").hide();
    });
}
function bpMedium() {
    //console.log("bpMedium() called");
    jQuery("#masthead .gnb .btn-menu").on("click", function() {
        jQuery("#sidebar, #sidebar-overlay").show();
    });
    jQuery("#sidebar .ctrl .btn-close, #sidebar-overlay").on("click", function() {
        jQuery("#sidebar, #sidebar-overlay").hide();
    });
}
function bpLarge() {
    //console.log("bpLarge() called");
}

jQuery(document).ready(function() {
    if(jQuery(window).width() <= 1024) {
        bpSmall();
    }
    else if(1025 <= jQuery(window).width() && jQuery(window).width() <= 1200) {
        bpMedium();
    }
    else {
        bpLarge();
    }

    jQuery(window).resize(function() {
        jQuery("#masthead .gnb *").off();
        if(jQuery(window).width() <= 1024) {
            bpSmall();
        }
        else if(1025 <= jQuery(window).width() && jQuery(window).width() <= 1200) {
            bpMedium();
        }
        else {
            bpLarge();
        }
    });
});
