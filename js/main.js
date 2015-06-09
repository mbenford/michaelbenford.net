$(function() {
    setMailtoLink();

    function setMailtoLink() {
        var part1 = 'michael',
            part2 = 'michaelbenford',
            part3 = 'net';

        $('#email').attr('href', 'mailto:' + part1 + '@' + part2 + '.' + part3).removeAttr('id');
    }
});
