ymaps.ready(init);
ymaps.option.presetStorage.add();
function init () {
    var myMap = new ymaps.Map('map', {
            center: [59.938, 30.3],
            zoom: 9
        }, {
            restrictMapArea: [
                [55.901877, 48.858541],
                [55.708393, 49.380976]
            ]
        }),

        objectManager = new ymaps.ObjectManager({
            clusterize: true,
            gridSize: 32,
            clusterDisableClickZoom: true
        });
    objectManager.objects.options.set({
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'https://i.imgur.com/tA8sV2x.png',
        // Размеры метки.
        iconImageSize: [20, 25],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -10]
    });
    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    //objectManager.objects.options.set({preset:'islands#redDotIcon', },);

    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "data.json"
    }).done(function(data) {
        objectManager.add(data);
    });





}