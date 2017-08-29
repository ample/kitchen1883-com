# TODO: There is a positioning issue, likely due to the flash of fonts
$(document).ready () ->
  for itemGroup in $('.feature-group.menu-items')
    $(itemGroup).masonry
      itemSelector: '.menu-item'
      columnWidth: '.menu-item'
      percentPosition: true
      gutter: 48
