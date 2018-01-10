export default function() {

    let aviatitle = {
        generate: function (string, block) {
          let wordsArray = string.split(' '),
            stringArray = string.split(''),
            sentence = [],
            word = '';
          console.log(wordsArray);
          console.log(stringArray);
          block.text('');
    
          wordsArray.forEach(function (currentWord) {
            let wordsArray = currentWord.split('');
    
            wordsArray.forEach(function (letter) {
              let letterHtml = '<span class="letter-span">' + letter + '</span>';
    
              word += letterHtml;
            });
    
            let wordHTML = '<span class="letter-word">' + word + '</span>'
    
            sentence.push(wordHTML);
            word = '';
          });
    
          block.append(sentence.join(' '));
    
          
          let
            letters = block.find('.letter-span'), 
            duration = 500 / stringArray.length; 
    
          $.each(letters, function (item, elem) {
            setTimeout(function () {
              $(elem).addClass('active');
            }, duration * item);
          });
    
        }
      }


    let Slider = function (container) {
        let nextBtn = container.find('.works-slider__control-btn--left'),// левая  кнопка
        prevBtn = container.find('.works-slider__control-btn--right'), // правая кнопка
        items = nextBtn.find('.works-slider__control-item'), // слайды
        display = container.find('.works-slider__display'), // Витрина слайдера
        title = container.find('.subtitle'), // заголовок слайда
        skills = container.find('.works__content-desc'), // технологии
        link = container.find('.works__content-view'), // ссылка
        itemsLength = items.length, // количество слайдов
        duration = 500, 
        flag = true;
        
    
        let timeout;
    
        this.counter = 0;
    
        // private Генерация разметки кнопки следующий слайд
        let generateMarkups = function () {
        let list = nextBtn.find('.works-slider__control-list'),
            markups = list.clone();
    
        prevBtn
            .append(markups);
            // .find('.works-slider__control-item')
            // .removeClass('active')
            // .eq(this.counter + 1)
            // .addClass('active');
        }
        // Вытащить данные из дата атрибутов для левой части слайдера
        let getDataArrays = function () {
        let dataObject = {
            pics: [],
            title: [],
            skills: [],
            link: []
        };
    
        $.each(items, function () {
            let $this = $(this);
    
            dataObject
            .pics
            .push($this.data('full'));
            dataObject
            .title
            .push($this.data('title'));
            dataObject
            .skills
            .push($this.data('skills'));
            dataObject
            .link
            .push($this.data('link'));
        });
    
        return dataObject;
        }
    
        let slideInLeftBtn = function (slide) {
        let reqItem = items.eq(slide - 1),
            activeItem = items.filter('.active');
    
        activeItem
            .stop(true, true)
            .animate({
            'top': '100%'
            }, duration);
    
        reqItem
            .stop(true, true)
            .animate({
            'top': '0%'
            }, duration, function () {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active')
                .css('top', '-100%')
            });
    
        }
    
        let slideInRightBtn = function (slide) {
        let items = prevBtn.find('.works-slider__control-item'),
            activeItem = items.filter('.active'),
            reqSlide = slide + 1;
    
        if (reqSlide > itemsLength - 1) {
            reqSlide = 0;
        }
    
        let reqItem = items.eq(reqSlide);
    
        activeItem
            .stop(true, true)
            .animate({
            'top': '-100%'
            }, duration);
    
        reqItem
            .stop(true, true)
            .animate({
            'top': '0%'
            }, duration, function () {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active')
                .css('top', '100%')
            });
        };
    
        let changeMainPicture = function (slide) {
        let image = display.find('.works-slider__display-pic');
        let data = getDataArrays();
    
        image
            .stop(true, true)
            .fadeOut(duration / 2, function () {
            image.attr('src', data.pics[slide]);
            $(this).fadeIn(duration / 2);
            });
        }
    
        let changeTextData = function (slide) {
        let data = getDataArrays();
    
        // название работы
        aviatitle.generate(data.title[slide], title, 'ru');
    
        // описание технологий
        aviatitle.generate(data.skills[slide], skills, 'en');
    
        // ссылка
        link.attr('href', data.link[slide]);
        }
    
        // public
        this.setDefaults = function () {
        let _that = this,
            data = getDataArrays();
        console.log(data);
        // создаем разметку
        generateMarkups();
    
        // левая кнопка
        nextBtn
            .find('.works-slider__control-item')
            .eq(_that.counter - 1)
            .addClass('active');
    
        // правая кнопка
        prevBtn
            .find('.works-slider__control-item')
            .eq(_that.counter + 1)
            .addClass('active');
    
        // основное изображение
        display
            .find('.works-slider__display-pic')
            .attr('src', data.pics[_that.counter]);
    
        // текстовые описания
        changeTextData(_that.counter);
    
        };
    
        this.moveSlide = function (direction) {
        let _that = this;
        // if (direction === "next") {
        //   if (_that.counter < itemsLength - 1) {
        //     _that.counter++;
        //   } else {
        //     _that.counter = 0;
        //   }
        // } else {
        //   if (_that.counter > 0) {
        //     _that.counter--;
        //   } else {
        //     _that.counter = itemsLength - 1;
        //   }
        // }
    
        let directions = {
            next: function () {
            // закольцовывание слайдера
            if (_that.counter < itemsLength - 1) {
                _that.counter++;
            } else {
                _that.counter = 0;
            }
            },
    
            prev: function () {
            if (_that.counter > 0) {
                _that.counter--;
            } else {
                _that.counter = itemsLength - 1;
            }
            }
        };
    
        directions[direction]();
    
        if (flag) {
            flag = false;
    
            if (typeof timeout != 'undefined') {
            clearTimeout(timeout);
            }
    
            timeout = setTimeout(function () {
            flag = true;
            }, duration + 50);
    
            slideInLeftBtn(_that.counter);
            slideInRightBtn(_that.counter);
            changeMainPicture(_that.counter);
            changeTextData(_that.counter);
        }
        };
    };
    
    let slider = new Slider($('.works'));
    slider.setDefaults();
    
    $('.works-slider__control-btn--left').on('click', function (e) {
        e.preventDefault();
        slider.moveSlide('prev');
    });
    
    $('.works-slider__control-btn--right').on('click', function (e) {
        e.preventDefault();
        slider.moveSlide('next');
    });
    
    console.dir(slider);
 
}