window.onscroll = function() {scroll()};

[].map.call(document.querySelectorAll('[anim="ripple"]'), function (el) {
    el.addEventListener('click', function (e) {
        e = e.touches ? e.touches[0] : e;
        var r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
        el.style.cssText = "--s: 0; --o: 1;";
        el.offsetTop;
        el.style.cssText = "--t: 1; --o: 0; --d: " + d + "; --x:" + (e.clientX - r.left) + "; --y:" + (e.clientY - r.top) + ";";
    });
});

window.onscroll = function() {scroll()};

function scroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollBar").style.width = scrolled + "%";}