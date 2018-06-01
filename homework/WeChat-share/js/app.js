(function(win) {
        var docEl = win.document.documentElement;
        function refreshRem() {
                var width = docEl.getBoundingClientRect().width;
                if (width > 768) { // 最大宽度
                        width = 768;
                }
                // 将屏幕宽度分成7.5份， 1份为1rem,1rem=100px
                var rem =width/7.5;
                if (rem > 100) {
                    rem = 100
                }
                docEl.style.fontSize = rem + 'px';
        }
        win.addEventListener('resize', function() {
                refreshRem();
        }, false);
        win.addEventListener('pageshow', function(e) {
                if (e.persisted) {
                        refreshRem();
                }
        }, false);
        refreshRem();
})(window);