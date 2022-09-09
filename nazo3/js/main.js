let pw_text = '';

function clicedNum(num) {
    pw_text += num;
    if (pw_text.length == 5) {
        pw_text += ':';
    }
    $('.pw_text').text(pw_text);
    if (pw_text.length == 8) {
        if (pw_text == 'ASTRO:2A') {
            $('.enter_num_section').hide();
            $('.correct_div').css('display', 'flex');
            setTimeout(resetAll, 3000);
        } else {
            $('.enter_num_section').hide();
            $('.wrong_div').css('display', 'flex');
            setTimeout(resetAll, 1000);

        }
    }
}

function resetAll() {
    pw_text = '';
    $('.pw_text').text('xxxxx:xx');
    $('.enter_num_section').show();
    $('.correct_div').css('display', 'none');
    $('.wrong_div').css('display', 'none');
}