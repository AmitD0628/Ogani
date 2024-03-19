// Header Left Dropdown //
$(document).ready(function () {
    $("#mydropdown").slideDown();
    $(".mydropdown-shop").hide();

    $(".categories-btn").click(function () {
        $("#mydropdown").slideToggle();
    });
});
function toggleDropdown1() {
    $("#mydropdown2").slideToggle();
}


// Moving Text //
var words = $('.word');
var wordArray = [];
var currentWord = 0;

$(words[currentWord]).css('opacity', 1);

words.each(function () {
    splitLetters($(this));
});

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];

    $.each(cw, function (i) {
        animateLetterOut(cw, i);
    });

    $.each(nw, function (i) {
        $(nw[i]).removeClass().addClass('letter behind');
        nw[0].parent().css('opacity', 1);
        animateLetterIn(nw, i);
    });

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        $(cw[i]).removeClass().addClass('letter out');
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        $(nw[i]).removeClass().addClass('letter in');
    }, 340 + (i * 80));
}

function splitLetters(word) {
    var content = word.html();
    word.empty();
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = $('<span>').addClass('letter').html(content.charAt(i));
        word.append(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 2000);



// Carousel //
$(document).ready(function () {
    $('.owl-one').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        dots: false,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});

$(document).ready(function () {
    $('.owl-two').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        dots: false,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});


$(document).ready(function () {
    $('.shop-owl-one').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2500,
        dots: true,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
});

$(document).ready(function () {
    $('.shop-details-owl').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2500,
        dots: false,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});


// Image Filter Tab //
$(document).ready(function () {
    $(".gallery-filter").on("click", ".filter-item", function (event) {
        var $filterItem = $(event.target);
        if ($filterItem.hasClass("filter-item")) {
            $(".gallery-filter .active").removeClass("active");
            $filterItem.addClass("active");

            var filterValue = $filterItem.attr("data-filter");
            $(".gallery-item").each(function () {
                var $item = $(this);
                if ($item.hasClass(filterValue) || filterValue === "all") {
                    $item.removeClass("hide").addClass("show");
                } else {
                    $item.removeClass("show").addClass("hide");
                }
            });
        }
    });
});




// Dual Side Range  //
$(function () {
    var sliderRange = $("#slider-range");
    var amount = $("#amount");

    sliderRange.slider({
        range: true,
        min: 10,
        max: 540,
        values: [10, 540],
        slide: function (_event, ui) {
            amount.text(ui.values[0] + " - " + ui.values[1]);
        }
    });

    amount.text(sliderRange.slider("values", 0) +
        " - " + sliderRange.slider("values", 1));
});



// List Grid View //
var elements = $(".column");

function listView() {
    elements.css("width", "33.33333333%");
}

function gridView() {
    elements.css("width", "60%");
    elements.css("margin", "auto");
}




// // Product Count //
$(document).ready(function () {
    $(".quantity").each(function () {
        const quantityContainer = $(this);
        const minusBtn = quantityContainer.find(".minus");
        const plusBtn = quantityContainer.find(".plus");
        const inputBox = quantityContainer.find(".input-box");

        updateButtonStates();

        quantityContainer.on("click", handleButtonClick);
        inputBox.on("input", handleQuantityChange);

        function updateButtonStates() {
            const value = parseInt(inputBox.val());
            minusBtn.prop("disabled", value <= 1);
            plusBtn.prop("disabled", value >= parseInt(inputBox.attr("max")));
        }

        function handleButtonClick(event) {
            if ($(event.target).hasClass("minus")) {
                decreaseValue();
            } else if ($(event.target).hasClass("plus")) {
                increaseValue();
            }
        }

        function decreaseValue() {
            let value = parseInt(inputBox.val());
            value = isNaN(value) ? 1 : Math.max(value - 1, 1);
            inputBox.val(value);
            updateButtonStates();
            handleQuantityChange();
        }

        function increaseValue() {
            let value = parseInt(inputBox.val());
            value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.attr("max")));
            inputBox.val(value);
            updateButtonStates();
            handleQuantityChange();
        }

        function handleQuantityChange() {
            let value = parseInt(inputBox.val());
            value = isNaN(value) ? 1 : value;

            // Execute your code here based on the updated quantity value
            console.log("Quantity changed:", value);
        }
    });
});


// like button //
$(function() {
    $( ".liked-btn" ).click(function() {
      $( ".liked-btn" ).toggleClass( "press", 0 );
    });
  });