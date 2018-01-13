export default function() {

  let scrollMenu = (function() {
  const $news = $('.blog__item');
  const $item = $('.nav-blog__item');
  const $wrapMenu = $('.blog__nav');
  let positionArticle = [];
  let offsetHeight = 400;

  let _setPositionArticle = function(element) {
    const len = element.length;
    element.each(function(item) {
      positionArticle[item] = {};
      positionArticle[item].top = $(this).offset().top - offsetHeight;
      positionArticle[item].bottom =
        positionArticle[item].top + $(this).innerHeight();
    });
  };

  let _scrollPageFixMenu = function(e) {
    let scroll = window.pageYOffset;
    if (scroll < $news.offset().top) {
      $wrapMenu.removeClass('fixed');
    } else {
      $wrapMenu.addClass('fixed');
    }
  };

  let _scrollPage = function(e) {
    let scroll = window.pageYOffset;
    positionArticle.forEach( (element, index) => {
      if (
        scroll >= element.top &&
        scroll <= element.bottom
      ) {
        $item
          .eq(index)
          .addClass('nav-blog__item--active')
          .siblings()
          .removeClass('nav-blog__item--active');
      }
    });
  };

  let _clickMenu = function(e) {
    let $element = $(e.target).closest('.nav-blog__item');
    let index = $element.index();
    let sectionOffset = positionArticle[index].top;

    $(document).off('scroll', _scrollPage);
    $element.siblings().removeClass('nav-blog__item--active');
    $('body, html').animate(
      {
        scrollTop: sectionOffset
      },
      600,
      () => {
        $element.addClass('nav-blog__item--active');
        $(document).on('scroll', _scrollPage);
      }
    );
  };

  let addListener = function() {
    $('.blog__nav').on('click', _clickMenu);
    $(document).on('scroll', _scrollPage);
    $(document).on('scroll', _scrollPageFixMenu);

    _setPositionArticle($news);

    $(window).on('load', function(e) {
      _setPositionArticle($news);
    });

    $(window).on('resize', function(e) {
      _setPositionArticle($news);
    });

  };

  return {
    init: addListener
  };
})();

  let tabletsMenu = $('.blog__left');

  $('.blog').on('click', function (e) {
    if (document.documentElement.clientWidth < 769) {    
      e.preventDefault();
      // console.log(e.target);
      // console.log(e.currentTarget);

      let elem = $(e.target).closest('.blog__circle');

      if (elem.length) {
        tabletsMenu.addClass('blog__left--visually');
      } else {
        tabletsMenu.removeClass('blog__left--visually');
      }
    }
  });
    

console.log(scrollMenu);
scrollMenu.init();
}