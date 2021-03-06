export function parkApp() {

    let estate = $('.estate-jumbotron');
    let jumboElements = $('.jumbo');
    let jumbo1 = $('.jumbo-1');
    let jumbo2 = $('.jumbo-2');
    let jumbo3 = $('.jumbo-3');
    let jumboInfo = $('.jumbo-info');
    let toPrevMap = $('.to-prev-map');
    let nextMapBtn = $('.to-next-map');
    let flatBtn3 = $('#flat-3');

    let toPrice = $('.to-price');

    init();

    function init() {
        setJumboHeight();
        hideJumbo()
        navHandler();
    }

    function setJumboHeight() {
        const estateHeight = jumboInfo.height();
        estate.css('height', estateHeight);
    }

    function hideJumbo() {
        jumboElements.css('display', 'none');
        jumbo1.css('display', 'flex');
    }

    function navHandler() {
        toPrevMap.on('click', goToPrev);
        nextMapBtn.on('click', goToNext);
    }

    function goToNext() {
        $(this).parent('.jumbo').css('display', 'none').next('.jumbo').css('display', 'flex');
    }

    function goToPrev() {
        $(this).closest('.jumbo').css('display', 'none').prev('.jumbo').css('display', 'flex');
    }

    flatBtn3.on('click', function() {
        $(this).closest('.jumbo').css('display', 'none').next('.jumbo').css('display', 'flex');
    })

    toPrice.on('click', function() {
        console.log("click działa");
        $(this).closest('.jumbo').css('display', 'none').next('.jumbo').css('display', 'flex');
    })

}
