//Инициализация
new Swiper('.image-slider', {
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        //Буллеты
        clickable: true,

        // Динамические буллеты
        // dynamicBullets: true,

        //Фракции
        // type: 'fraction',

        //Прогерсбар
        // type: 'progressbar',
    },
    //Скрол
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     //Возможность перетаскивать скролл
    //     draggable: true,
    // },

    //Включение/выкл
    //Перетаскивание на пк
    simulateTouch: true,
    // Чувствительность свойства
    touchRatio: 4,
    // Угол срабатывания свайпа/перетаскивание
    touchAngle: 45,
    // Курсор перетаскивание
    grabCursor: true,

    //Переключение на слайд при клике
    //когда показывает не 1 картинку
    slideToClickedSlide: true,

    //Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },

    // Управление клавиатурой
    keyboard: {
        // Вкл/выкл
        enabled: true,
        // Вкл/выкл
        // только когда слайдер
        // в приделах вьюпорта
        onlyInViewport: true,
        // Вкл/выкл
        // управление клавишами 
        // pageUo, pageDown
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс обьекта на котором 
        // будет срабатывать прокрутка мышью
        // (если слайдеров много будет
        // работать на всех)
        eventsTarget: '.image-slider',
    },

    // Автовысота
    autoHeight: true,

    // Кол-во слайдов для показа
    // можно не целые цифры
    slidesPerView: 1,
    // Отключение ф-нала если
    // слайдов меньше чем нужно
    watchOverflow: true,
    //Отступ между слайдами
    spaceBetween: 30,
    //Кол-во пролистываемых слайдов
    slidesPerGroup: 1,
    //Активный слайд по центру
    centeredSlides: true,

    //Изменить номер активного слайда
    //стартовый слайд
    // initialSlide: 1,

    //Мультирядность, нужно офф
    //автовысоту и изм цсс
    // slidesPerColumn: 2,

    //Бесконечный слайдер
    loop: true,
    //Свободный режим
    freeMode: false,

    // Автопрокрутка
    // autoplay: {
    //     // Пауза между прокруткой
    //     delay: 2000,
    //     // Закончить на последнем слайде
    //     stopOnLastSlide: true,
    //     // Отключить после ручного переключения
    //     disableOnInteraction: true,
    // },

    // Скорость для автопрокрутки и прокрутки
    speed: 300, //по умолчанию

    // Вертикальный слайдер
    // direction: 'vertical',

    // Эффекты переключения слайдов:
    // Листание, по умолчанию
    // effect: 'slide',

    // Смена прозрачности
    // effect: 'fade',
    // // Дополнение к fade
    // fadeEffect: {
    //     // Паралельная смена прозрачности
    //     crossFade: true,
    // },

    // Переворот
    // effect: 'flip',
    // Дополнение к flip
    // flipEffect: {
    //     // Тень
    //     slideShadows: true,
    //     // Показ только активного слайда
    //     limitRotaton: true,
    // }

    // Брейкпоинты (адаптив)
    // Ширина экрана
    // breakpoints: {
    //     480: {
    //         slidesPerView: 1,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     }
    // },

});