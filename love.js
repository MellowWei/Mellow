var c = 0;

var when = ["looked at me", "touch my hair and brush it", "always be my first reader", "wrote a song based on my melody", "tolerate my bad temper", "give me emotional support", "tell me I am great", "cooked a burnt egg for me", "are always positive"];

function shuffle(array) {
    array.sort(()=>Math.random() - 0.5);
}

// shuffle on start
$(function() {
    shuffle(when);
});

$(document).click(function(e) {

    if (e.button == 0) {

        $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);

        c++;

        if (c == when.length) {

            $("<p>love me too </p>").hide().prependTo("#when-you").fadeIn(2000);

            $("body").css('background', '#000');
            $("#g p").css('color', '#fff');

            $(document).unbind("click");

        }

    }
});
