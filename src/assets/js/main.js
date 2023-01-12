'use strict';

/**
 * requestAnimationFrame Shim 
 */
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

$("#test").find("option").eq(2).addClass("optioncolor");

$(document).ready(function() {

    /*------Resize End Event -- Debounces resize of browser event-----------*/
    //http://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-ac
    //https://learn.jquery.com/events/introduction-to-custom-events/

    var rtime;
    var timeout = false;
    var delta = 200;
    var $windowWidth = $(window).width();

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            $windowWidth = $(window).width();
            $(document).trigger('sccResizeEnd');
        }
    }

    $(window).on('resize', function() {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    /*---------- Header image scroll n blur-----------*/

    if ($('.innerbannerwrap .innerbanner').length) {
        var scrollOptions = {
            test: $('.innerbannerwrap .innerbanner')
        };

        var scrolling = new Scroller();
        scrolling.init(scrollOptions);
    }

    /*---------- navbar menu-----------*/

    $('.navbar-toggle').on('click', function() {
        $(this).toggleClass('is-active');
        $('.nav-menu').toggleClass('open-nav');
        var wH = $(window).height();

        if ($('.nav-menu').hasClass('open-nav')) {
            $('.wrapper').css('height', wH);
        } else {
            $('.wrapper').css('height', 'auto');
        }
    });

    /*-------------- sticky up menu-----------*/

    var lastScrollTop = 0,
        scrollDelta = 5,
        navbarHeight = $('.header-lower').outerHeight(),
        st;

    //Stick Up Menu

    $(window).on('scroll', function() {
        st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= scrollDelta) {
            return;
        }

        if (st < 40) {
            $('.header-lower').removeClass('nav-down').removeClass('sticky-menu');
        } else if (st > lastScrollTop && st > navbarHeight) {
            $('.header-lower').removeClass('sticky-menu').addClass('nav-down');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('.header-lower').addClass('sticky-menu').removeClass('nav-down');
            }
        }

        lastScrollTop = st;
    });

    /* ----------- menu dropdown ------------*/

    $('.menu-bar li').on('click', function() {
        $(this).find('.sub-menu').toggleClass('addSubMenu');
    });

    /*--------- slide video ----------*/

    if ($('#videoSlide').length) {
        $('#videoSlide').slick({
            infinite: false,
            prevArrow: '.btn-down',
            nextArrow: '.btn-up',
            responsive: [{
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        vertical: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        vertical: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        vertical: false
                    }
                }
            ]
        });
    }

    /*--------------- isotope  ------------------*/
    // if($('#galleryWrapper').length){
    $('.galleryMenu a').on('click', function() {
        var el = $(this);
        el.parents('.menu-wrapper').find('a').removeClass('selected');
        el.addClass('selected');
    });
    var $container2 = $('#galleryWrapper');
    $container2.isotope({
        itemSelector: '.item',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.galleryMenu  li a').on('click', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $container2.isotope({
            filter: filterValue
        });
    });

    // }
    /* ---------- awards ------------*/

    if ($('.awards-wrap').length) {
        $('.awards-wrap').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            prevArrow: '.awards_prev',
            nextArrow: '.awards_next',
            responsive: [{
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    /* ---------- players ------------*/

    if ($('.slideHeroes').length) {
        $('.slideHeroes').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,
            centerPadding: '0px',
            prevArrow: '.prev-player',
            nextArrow: '.next-player',
            responsive: [{
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                }
            ]
        });
    }

    if ($('.socialinfo').length) {
        $('.socialinfo').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            dots: false,
        });
    }

    var slickOptions = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.club_prev',
        nextArrow: '.club_next',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            }
        ]
    };

    if (('#club_news').length) {
        $('#club_news').slick(slickOptions);
    }

    $('#world_news_button').on('shown.bs.tab', function() {
        $('#club_news').slick('unslick');
        $('#world_news').slick(slickOptions);
    });

    $('#club_news_button').on('shown.bs.tab', function() {
        $('#world_news').slick('unslick');
        $('#club_news').slick(slickOptions);
    });

    /*------------------- history slide ----------------*/

    if ($('.historyMeter').length) {
        $('.historyMeter').slick({
            infinite: true,
            slidesToShow: 12,
            arrows: false,
            dots: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    /*------------------- Club History Tab changer ----------------*/

    $('.historyMeter a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        if (target === '#') {} else {
            $('.historyMeter li').removeClass('active');
            $(this).parent().addClass('active');
            $('.historyVideoWrap .tab-pane').hide();
            $(target).show();
        }
    });

    /* ------------ masonary --------------*/

    var $grid = $('.grid');
    if ($grid.length) {
        var masonaryOptions = {
            gutter: '.gutter',
            isFitWidth: true
        };

        $grid.imagesLoaded(function() {
            $grid.masonry(masonaryOptions);
        });

        $(window).on('sccResizeEnd', function() {
            $grid.masonry(masonaryOptions);
        });
    }

    /*----------------- memberfig--------------------*/

    if ($('.boardmember').length) {
        $('.boardmember').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            prevArrow: '.prev-player',
            nextArrow: '.next-player',
            responsive: [{
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if ($('.wrap-achive').length) {
        $('.wrap-achive').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        });
    }

    if ($('.player02').length) {
        $('.player02').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            prevArrow: '.prev',
            nextArrow: '.next'
        });
    }

    if ($('.client').length) {
        $('.client').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            responsive: [{
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    /* -------- blogslider ---------*/

    if ($('.blog_slider').length) {
        $('.blog_slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            prevArrow: '.blog_prev',
            nextArrow: '.blog_next'
        });
    }

    /* -------- blogslider ---------*/

    if ($('.shop-wrap-slider').length) {
        $('.shop-wrap-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false
        });
    }


    function playerwindows() {
        var playerWh = $('.player02info').innerHeight();
        $('.player02fig .imgplayer').css('height', playerWh);
    }
    playerwindows();


    /* ------------- Hero Banner  -------------*/

    if ($('#layerSlider').length) {
        $('#layerSlider').layerSlider({
            autoStart: false,
            skin: 'noskin',
            skinsPath: '/style/skins/'
        });
    }

    /* ------------- video slide  -------------*/

    var videoElement = $('#video01');
    $('.changeVideo').on('click', function() {
        var $this = $(this);
        var parentli = $this.parent('li');
        parentli.siblings('li').removeClass('active');
        var videourl = $this.data('yt-video');
        if (videoElement.data('current-video') !== videourl) {
            videoElement.html('<iframe src="http://www.youtube.com/embed/' + videourl + '" class="liveVideo" allowfullscreen=""></iframe>');
            videoElement.attr('data-current-video', videourl);
        }
        parentli.addClass('active');
    });

    /*------------ tab animation ------------------*/

    $('#aboutTab a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    /*-------------- subcribe form -----------*/

    $('.form_mailSubscribe').submit(function(event) {
        event.preventDefault();
        var formdata = $('.form_mailSubscribe').serializeArray();
        $.ajax({
            url: 'php/subscribe-config.php',
            type: 'POST',
            async: true,
            data: formdata,
        }).done(function(messges) {
            $('.form_mailSubscribe .form-submessges').removeClass('hidden');
            $('.form_mailSubscribe .form-submessges').html(messges);
        });
    });

    /*-------------- contact form -----------*/


    $('.formcontact').submit(function(event) {
        event.preventDefault();
        var formdata = $('.formcontact').serializeArray();
        $.ajax({
            url: 'php/contact.php',
            type: 'POST',
            async: true,
            data: formdata,
        }).done(function(data) {
            $('.formcontact .form-message').removeClass('hidden').html(data);
            $('.formcontact .btn').attr('disabled', 'disabled');
            $('.formcontact').each(function() {
                this.reset(); //CLEARS THE FORM AFTER SUBMISSION
            });
        });
    });

    /* ---------------- image gallery ---------*/

    var $containergallery = $('#galleryWrapper');
    if ($containergallery.length) {

        var $boxes = $('.item');
        var masonaryOptionsGallery = {
            isAnimated: true,
            isFitWidth: true
        };
        $boxes.hide();

        $containergallery.imagesLoaded(function() {
            $boxes.fadeIn();

            $containergallery.masonry(masonaryOptionsGallery);
        });

        $(window).on('sccResizeEnd', function() {
            $containergallery.masonry(masonaryOptionsGallery);
        });

        $containergallery.one('layoutComplete', function() {
            $('#galleryLoader').hide();
        });
    }
    /* -------------- achivement -----------*/
    var heightachivement = $('.achivementwrapper .achievement li .figcontentachv').innerHeight();
    $('.achivementwrapper .achievement li .fig').css('height', heightachivement);
    $('.achivementwrapper .achievement li .fig').css('line-height', heightachivement + 'px');


    /*-------  award accordion -------*/

    $('.yr_accordion a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        if (target !== '#') {
            $('.yr_accordion li').removeClass('active');
            $(this).parent().addClass('active');
            $('.information-wrap .tab-pane').hide();
            $(target).show();
        }
    });

    /*-------  product show -------*/

    $('.product-details-slider a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        if (target !== '#') {
            $('.product-details-slider li').removeClass('active');
            $(this).parent().addClass('active');
            $('.p_wrap .product-image').hide();
            $(target).show();
        }
    });

    /* -------- shop slider -----------*/

    if ($('.product-details-slider').length) {
        $('.product-details-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '.prvProduct',
            nextArrow: '.nxtProduct'
        });
    }

    /*----------------- shop feedback ----------------*/

    $('.feedbackCust').on('click', function() {
        $('.feedbackContact').slideToggle('feedbackContact-open');
    });

    /*- ----------------- score board ----------------*/

    function scoreboard() {
        if ($windowWidth <= 991) {
            if (!$('.wrapper-score-scrollbar .wrap').hasClass('slick-initialized')) {
                $('.wrapper-score-scrollbar .wrap').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    prevArrow: '.prevScore',
                    nextArrow: '.nextScore'
                });
            }

        } else {
            if ($('.wrapper-score-scrollbar .wrap').hasClass('slick-initialized')) {
                $('.wrapper-score-scrollbar .wrap').slick('unslick');
            }
        }
    }
    scoreboard();
    $(window).on('sccResizeEnd', function() {
        scoreboard();
    });

    /*--------------- Waypoint -- Animation on scroll  ------------------*/

    function wayPoint() {
        if ($windowWidth >= 1200) {
            $('.latestResult').waypoint(function() {
                setTimeout(function() {
                    $('.figure').addClass('addfigure');
                }, 100);
                setTimeout(function() {
                    $('.team-logo').css('opacity', '1');
                }, 1000);
                setTimeout(function() {
                    $('.figure').addClass('animatefig-before');
                }, 1000);
                setTimeout(function() {
                    $('.content').css('opacity', '1');
                }, 2000);

            }, { offset: '70%' });
        }

        $('.achivementwrapper').waypoint(function() {
            setTimeout(function() {
                $('.achievement .fig img').addClass('figachvadd');
            }, 600);

        }, { offset: '70%' });


    }

    if ($windowWidth >= 992) { wayPoint(); }


    /*--------------- Magnific Popup  ------------------*/

    //Single Item
    $('.magnificPopup').magnificPopup({
        type: 'image',
        image: {
            // options for image content type
            titleSrc: 'title'
        }
    });

    //Multiple Item - Gallery
    $('.magnificPopupParent').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function 

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    /*--------------- Cart Features  ------------------*/

    var $cartitems = JSON.parse(sessionStorage.getItem('cartItems')) || [],
        $cartquantity = $cartitems.length,
        $cartTotal = 0;

    function getCartLength() {
        $cartquantity = $cartitems.length;
        $('.cartitems').html($cartquantity);
    }

    function updateSession() {
        getCartLength();
        sessionStorage.setItem('cartQuantity', $cartquantity);
        sessionStorage.setItem('cartItems', JSON.stringify($cartitems));
    }

    function addToCart(data) {
        if (!data) {
            return;
        }
        var check = true;

        for (var i = 0; i < $cartquantity; i++) {
            if (data.id === $cartitems[i].id) {
                check = false;
                $cartitems[i].quantity = $cartitems[i].quantity + 1;
                break;
            }
        }

        if (check) {
            $cartitems.push(data);
            getCartLength();

            $('.cartitems').html($cartquantity);
        }

        updateSession();
    }

    function removeProduct(id, that) {
        var check;
        for (var i = 0; i < $cartquantity; i++) {
            if (id === $cartitems[i].id) {
                $cartitems.splice(i, 1);
                break;
            }
        }

        that.parents('li').slideToggle().remove();
        getCartLength();
        updateTotal();
        updateSession();
        if ($cartquantity === 0) {
            updatehtml();
        }
    }

    function updateTotal() {
        //Dont total if page does not have carttotal
        if ($('#carttotal').length) {
            $cartTotal = 0;
            for (var i = 0; i < $cartquantity; i++) {
                $cartTotal += ($cartitems[i].price * $cartitems[i].quantity);
            }
            $('#carttotal').html('$ ' + $cartTotal);
        }
    }

    function updatehtml() {
        var html = '';
        if ($('#cartItems').length) {
            for (var i = 0; i < $cartquantity; i++) {
                html += updatetpl($cartitems[i].image, $cartitems[i].name, $cartitems[i].price, $cartitems[i].quantity, $cartitems[i].id, 1);
            }
            if (html === '') {
                html = '<div class="clearfix">' +
                    '<div class="big-content">' +
                    '<div class="product-cart-wrap">' +
                    '<h5>Sorry, you do not have any product in cart.</h5>' +
                    '</div></div></div>';
            }
            $('#cartItems').html(html);
        } else if ($('#cartItemsType2').length) {
            for (var i = 0; i < $cartquantity; i++) {
                html += updatetpl($cartitems[i].image, $cartitems[i].name, $cartitems[i].price, $cartitems[i].quantity, $cartitems[i].id, 2);
            }
            if (html === '') {
                html = '<div class="clearfix">' +
                    '<div class="big-content">' +
                    '<div class="product-cart-wrap">' +
                    '<h5>Sorry, you do not have any product in cart.</h5>' +
                    '</div></div></div>';
            }
            $('#cartItemsType2').html(html);
        }
    }

    function updatetpl(image, name, price, quantity, id, type) {
        var option = '';
        for (var i = 1; i < 5; i++) {
            option += '<option value="' + i + '"' + ((quantity === i) ? 'selected' : '') + '>' + i + ' product</option>';
        }
        if (type === 1) {
            return '<div class="clearfix">' +
                '<div class="big-content">' +
                '<div class="product-cart-wrap">' +
                '<figure>' +
                '<img src="' + image + '" alt="image">' +
                '</figure>  ' +
                '<h5>' + name + '</h5>' +
                '</div>' +
                '</div>' +
                '<div class="big-content medium-content productQuantity">' +
                '<select class="form-control" data-id="' + id + '">' +
                option +
                '</select>' +
                '</div>' +
                '<div class="big-content small-content">' +
                '<h5>$ ' + price + '</h5>' +
                '</div>' +
                '</div>';
        } else {
            return '<li class="clearfix">' +
                '<div class="item-content">' +
                '<div class="item-image">' +
                '<img src="' + image + '" alt="image">' +
                '</div>' +
                '<div class="item-details">' +
                '<h6>' + name + '</h6>' +
                '<div>' +
                '<i class="fa fa-heart"></i>' +
                '<span>1263</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="item-price">' +
                '<span>$ ' + price + '</span>' +
                '</div>' +
                '<a href="#" class="removeProduct" data-id="' + id + '">' +
                '<i class="fa fa-times"></i>' +
                '</a>' +
                '</li>';
        }
    }


    //Update Cart length at page init
    getCartLength();

    //Update Cart items in cart area
    updatehtml();

    //Update total price in cart area
    updateTotal();

    /* On Click handler for add to cart.
        Usage add ``addToCart`` class to any button
        The button should have the following data parameters
        // data-productid
            - Id of the product. This must be unique. Internally all checking is done via this parameter
        // data-productname
            - Name of the product
        // data-productprice
            - Price of the product
        // data-productimage
            - Image URL of the product
    */

    $('.addToCart').on('click', function(e) {
        e.preventDefault();
        var _this = $(this);

        var data = {
            id: _this.data('productid'),
            name: _this.data('productname'),
            price: _this.data('productprice'),
            image: _this.data('productimage'),
            quantity: 1
        };

        if (!(data.id === undefined || data.name === undefined || data.price === undefined || data.image === undefined)) {
            addToCart(data);
        }
    });

    $('.productQuantity select').on('change', function() {

        var val = $(this).val(),
            id = $(this).data('id');
        for (var i = 0; i < $cartquantity; i++) {
            if (id === $cartitems[i].id) {
                $cartitems[i].quantity = val;
                break;
            }
        }

        updateSession();
        updateTotal();
    });

    $('.removeProduct').on('click', function(e) {
        e.preventDefault();
        var id = $(this).data('id');
        removeProduct(id, $(this));
    });

    /*--------------- Google Maps -- Contact Page  ------------------*/

    var map;

    function initMap() {
        // Create a map object and specify the DOM element for display.
        var _location = new google.maps.LatLng(37.4538889, -122.1811111);
        map = new google.maps.Map(document.getElementById('map-section'), {
            scrollwheel: false,
            panControl: false,
            zoomControl: false,
            disableDefaultUI: true,
            styles: [
                { 'stylers': [{ 'hue': '#dd0d0d' }, { saturation: -100 }] },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'labels',
                    'stylers': [{ 'visibility': 'off' }]
                },
                {
                    'featureType': 'poi.business',
                    'elementType': 'geometry',
                    'stylers': [{ 'lightness': 100 },
                        { 'visibility': 'simplified' }
                    ]
                }
            ],
            zoom: 12,
            center: _location
        });
    }

    if ($('#map-section').length) {
        google.maps.event.addDomListener(window, 'load', initMap);
    }

    /*--------------- Today's Date ------------------*/

    if ($('.datetime').length) {
        var today = new Date;
        var n = today.toDateString();
        $('.datetime').html(n);
    }

    /* ------------- scrollbar ---------------*/
    if ($('.scrollable').length) {
        if ($(window).width() > 768) {
            $('.scrollable').slimScroll({
                alwaysVisible: false,
                railVisible: false,
                height: '400px',
                size: '0px',
            });
        }
    }

    /*--------------- Countdown Timer - Homepage ------------------*/

    if ($('.match_timing').length) {
        $('.match_timing').countdown('2015/10/31', function(event) {
            $(this).html(
                event.strftime('<ul class="counter-wrap ">' +
                    '<li ><span>%D</span>days</li>' +
                    '<li ><span>%H</span>hours</li>' +
                    '<li> <span>%M</span>minutes</li>' +
                    '<li ><span>%S</span>seconds</li>' +
                    '</ul>')
            );
        });
    }
});


/* #############################################################################################################################*/
/**
 * Template Name: NiceAdmin - v2.5.0
 * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function() {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        if (all) {
            select(el, all).forEach(e => e.addEventListener(type, listener))
        } else {
            select(el, all).addEventListener(type, listener)
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Sidebar toggle
     */
    if (select('.toggle-sidebar-btn')) {
        on('click', '.toggle-sidebar-btn', function(e) {
            select('body').classList.toggle('toggle-sidebar')
        })
    }

    /**
     * Search bar toggle
     */
    if (select('.search-bar-toggle')) {
        on('click', '.search-bar-toggle', function(e) {
            select('.search-bar').classList.toggle('search-bar-show')
        })
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    /**
     * Initiate tooltips
     */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    /**
     * Initiate quill editors
     */
    if (select('.quill-editor-default')) {
        new Quill('.quill-editor-default', {
            theme: 'snow'
        });
    }

    if (select('.quill-editor-bubble')) {
        new Quill('.quill-editor-bubble', {
            theme: 'bubble'
        });
    }

    if (select('.quill-editor-full')) {
        new Quill(".quill-editor-full", {
            modules: {
                toolbar: [
                    [{
                        font: []
                    }, {
                        size: []
                    }],
                    ["bold", "italic", "underline", "strike"],
                    [{
                            color: []
                        },
                        {
                            background: []
                        }
                    ],
                    [{
                            script: "super"
                        },
                        {
                            script: "sub"
                        }
                    ],
                    [{
                            list: "ordered"
                        },
                        {
                            list: "bullet"
                        },
                        {
                            indent: "-1"
                        },
                        {
                            indent: "+1"
                        }
                    ],
                    ["direction", {
                        align: []
                    }],
                    ["link", "image", "video"],
                    ["clean"]
                ]
            },
            theme: "snow"
        });
    }

    /**
     * Initiate TinyMCE Editor
     */
    const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

    tinymce.init({
        selector: 'textarea.tinymce-editor',
        plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
        editimage_cors_hosts: ['picsum.photos'],
        menubar: 'file edit view insert format tools table help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        toolbar_sticky: true,
        toolbar_sticky_offset: isSmallScreen ? 102 : 108,
        autosave_ask_before_unload: true,
        autosave_interval: '30s',
        autosave_prefix: '{path}{query}-{id}-',
        autosave_restore_when_empty: false,
        autosave_retention: '2m',
        image_advtab: true,
        link_list: [{
                title: 'My page 1',
                value: 'https://www.tiny.cloud'
            },
            {
                title: 'My page 2',
                value: 'http://www.moxiecode.com'
            }
        ],
        image_list: [{
                title: 'My page 1',
                value: 'https://www.tiny.cloud'
            },
            {
                title: 'My page 2',
                value: 'http://www.moxiecode.com'
            }
        ],
        image_class_list: [{
                title: 'None',
                value: ''
            },
            {
                title: 'Some class',
                value: 'class-name'
            }
        ],
        importcss_append: true,
        file_picker_callback: (callback, value, meta) => {
            /* Provide file and text for the link dialog */
            if (meta.filetype === 'file') {
                callback('https://www.google.com/logos/google.jpg', {
                    text: 'My text'
                });
            }

            /* Provide image and alt text for the image dialog */
            if (meta.filetype === 'image') {
                callback('https://www.google.com/logos/google.jpg', {
                    alt: 'My alt text'
                });
            }

            /* Provide alternative source and posted for the media dialog */
            if (meta.filetype === 'media') {
                callback('movie.mp4', {
                    source2: 'alt.ogg',
                    poster: 'https://www.google.com/logos/google.jpg'
                });
            }
        },
        templates: [{
                title: 'New Table',
                description: 'creates a new table',
                content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
            },
            {
                title: 'Starting my story',
                description: 'A cure for writers block',
                content: 'Once upon a time...'
            },
            {
                title: 'New list with dates',
                description: 'New List with dates',
                content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
            }
        ],
        template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
        template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
        height: 600,
        image_caption: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        noneditable_class: 'mceNonEditable',
        toolbar_mode: 'sliding',
        contextmenu: 'link image table',
        skin: useDarkMode ? 'oxide-dark' : 'oxide',
        content_css: useDarkMode ? 'dark' : 'default',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
    });

    /**
     * Initiate Bootstrap validation check
     */
    var needsValidation = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(needsValidation)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })

    /**
     * Initiate Datatables
     */
    const datatables = select('.datatable', true)
    datatables.forEach(datatable => {
        new simpleDatatables.DataTable(datatable);
    })

    /**
     * Autoresize echart charts
     */
    const mainContainer = select('#main');
    if (mainContainer) {
        setTimeout(() => {
            new ResizeObserver(function() {
                select('.echart', true).forEach(getEchart => {
                    echarts.getInstanceByDom(getEchart).resize();
                })
            }).observe(mainContainer);
        }, 200);
    }

})();