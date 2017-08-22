$ ->

  Kitchen.grid = $('.masonry').masonry
    itemSelector: '.grid-item'
    percentPosition: true

  Kitchen.grid.imagesLoaded().progress => Kitchen.grid.masonry('layout')
