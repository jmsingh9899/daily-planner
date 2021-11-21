
var timeDisplay = $('#timeDisplay')
timeDisplay.text(`Current moment of existence: ${moment().format("MMM Do YY")}`);

for (i = 9; i < 19; i++) {
    timeBlock = $(`#${i}`)
    entry = localStorage.getItem(`${timeBlock.attr('id')}`)
    if (entry == null) {
        timeBlock.text('')
    } else {
        timeBlock.text(`${entry}`)
    }
    timeBlock.removeClass("past present future")
    currentTime = parseInt(moment().format('H'))
    if (i === currentTime) {
        timeBlock.addClass('present')
    } else if (i < currentTime) {
        timeBlock.addClass('past')
    } else {
        timeBlock.addClass('future')
    }
}
$('.saveBtn').click(function () {
    var clickedBtn = $(this);
    var element = clickedBtn.parent().children().eq(1).attr('id')
    let text = $(`#${element}`).val();
    localStorage.setItem(`${element}`, `${text}`)
})
