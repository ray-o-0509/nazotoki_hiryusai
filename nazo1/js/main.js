let pw_text = '';

function clicedNum(num) {
    pw_text += num;
    $('.pw_text').text(pw_text);
    if (pw_text.length == 4) {
        if (pw_text == '4357') {
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
    $('.pw_text').text('xxxx');
    $('.enter_num_section').show();
    $('.correct_div').css('display', 'none');
    $('.wrong_div').css('display', 'none');
}