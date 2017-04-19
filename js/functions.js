export function parkApp() {
    (function() {
        let estate = $('.estate-jumbotron');
        let jumboElements = $('.jumbo');
        let jumbo1 = $('.jumbo-1');
        let jumbo2 = $('.jumbo-2');
        let jumbo3 = $('.jumbo-3');
        let jumboInfo = $('.jumbo-info');

        const estateHeight = jumboInfo.height();
        estate.css('height', estateHeight);

        jumboElements.css('display', 'none');
        jumbo1.css('display', 'flex');


        let nextMapBtn = $('.to-next-map');

        nextMapBtn.on('click', function() {
            console.log(nextMapBtn);

            $(this).parent(".jumbo").css('display', 'none');
            $(this).parent('.jumbo').next('.jumbo').css('display', 'flex');


        })
        // let toFloorBtn = $('#toFloorBtn');
        // toFloorBtn.on('click', function() {
        //     jumbo1.css('display', 'none');
        //     jumbo2.css('display', 'flex');
        // })
        //
        // let toMapBtn = $('#toMapBtn');
        // toMapBtn.on('click', function() {
        //
        //     jumbo2.css('display', 'none');
        //     jumbo3.css('display', 'flex');
        // })








    })();

}
