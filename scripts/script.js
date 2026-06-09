function bpSmall() {
    //console.log("bpSmall() called");
    jQuery("#masthead .gnb .btn-menu").on("click", function() {
        jQuery("#sidebar, #sidebar-overlay").addClass("is-open");
    });
    jQuery("#sidebar .ctrl .btn-close, #sidebar-overlay").on("click", function() {
        jQuery("#sidebar, #sidebar-overlay").removeClass("is-open");
    });
}
function bpMedium() {
    //console.log("bpMedium() called");
}
function bpLarge() {
    //console.log("bpLarge() called");
}

jQuery(document).ready(function() {
    if(jQuery(window).width() <= 1023) {
        bpSmall();
    }
    else if(1024 <= jQuery(window).width() && jQuery(window).width() <= 1200) {
        bpMedium();
    }
    else {
        bpLarge();
    }

    jQuery(window).resize(function() {
        jQuery("#masthead .gnb *").off();

        if(jQuery(window).width() <= 1023) {
            bpSmall();
        }
        else if(1024 <= jQuery(window).width() && jQuery(window).width() <= 1200) {
            bpMedium();
        }
        else {
            bpLarge();
        }
    });
});
