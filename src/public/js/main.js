//header
//  Scroll: make attribute data-scroll in html element to css
const debounce = (fn) => {
    let frame;
    return (...params) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    }
};
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();
//


//footer
var width = $(document).width();
var ulList = document.getElementsByClassName('footer-company__list');
var paddingFooterHTML = document.getElementsByClassName('footer-space');
var paddingFooter = paddingFooterHTML[paddingFooterHTML.length - 1];
if (width < 740) {
    hideUlList();
}

$(window).resize(function() {
    var width = $(document).width();
    if (width >= 740) {
        showUlList();
    }
});

function controlCompanyFooter() {
    if ($(window).width() < 740) {
        var status = document.getElementById('footer-company__checkbox');
        if (status.checked == true) {
            //hide
            hideUlList();
        } else {
            showUlList();
        }
    }
}

function hideUlList() {
    paddingFooter.style.padding = "30px 20px";
    for (var i = 0; i < ulList.length; i++) {
        ulList[i].style.display = "none";
    }
}

function showUlList() {
    for (var i = 0; i < ulList.length; i++) {
        ulList[i].style.display = "block";
    }
}