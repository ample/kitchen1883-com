# TODO: There is a positioning issue, likely due to the flash of fonts
$(document).ready () ->
  for imageGroup in $('.feature-group.images')
    $(imageGroup).masonry
      itemSelector: '.image'
      columnWidth: '.image'
      percentPosition: true
      gutter: 16
