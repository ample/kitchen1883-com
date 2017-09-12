$(document).ready () ->
  svg4everybody()

$(document).ready () ->
  for imageGroup in $('.feature-group.images')
    $(imageGroup).masonry
      itemSelector: '.image'
      columnWidth: '.image'
      percentPosition: true
      gutter: 16
