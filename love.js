var c = 0;

var when = ["looked at me", "touch my hair and brush it", "always be my first reader", "wrote a song based on my melody", "tolerate my bad temper", "give me emotional support", "tell me I am great", "cooked a burnt egg for me", "are always positive", "write poems and read them for me", "are close to me", "walk with me randomly in the city", "remember what I like and dislike", "create romances and surprises", "are being vulnerable", "embrace my vulnerability", "are being nice and timely", "watch films with me even you don't really like them", "help me exploring my creativty", "tell me I could make everything happen", "are full of creative ideas", "show your great musician potential", "are very confident towards our relationship"];

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
