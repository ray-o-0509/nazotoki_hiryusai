function control(num) {
    if (num) {
        $('.enter_num_section').hide();
        $('.correct_div').css('display', 'flex');
        setTimeout(resetAll, 3000);
    } else {
        $('.enter_num_section').hide();
        $('.wrong_div').css('display', 'flex');
        setTimeout(resetAll, 1000);

    }
}

function resetAll() {
    $('.enter_num_section').show();
    $('.correct_div').css('display', 'none');
    $('.wrong_div').css('display', 'none');
}