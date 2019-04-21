ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.938, 30.3],
        zoom: 9,
        controls: ['smallMapDefaultSet']
    }, {
        restrictMapArea: [
            [55.901877, 48.858541],
            [55.708393, 49.380976]
        ]
    });
    myPlacemark = new ymaps.Placemark([55.744088, 49.175541], {
        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        balloonContentHeader: "Площадка имени Кукушкина",
        balloonContentBody:'<img src="images/test.jpg" height="150" width="200">',
        balloonContentFooter: "Подвал",
        hintContent: "Хинт метки"
    });
    myMap.geoObjects.add(myPlacemark);
})




