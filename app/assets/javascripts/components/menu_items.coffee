$(document).ready () ->
  $('.feature-group.menu-items').masonry
    itemSelector: '.menu-item'
    columnWidth: '.menu-item'
    percentPosition: true
    gutter: 48
