$(document).ready(() ->
  new Kitchen.Links
)

class Kitchen.Links

  constructor: ->
    @initExternalLinks()

  initExternalLinks: ->
    for link in $('a')
      if @isExternal($(link).attr('href'))
        $(link).attr('target','_blank')
      else
        $(link).attr('data-load','true')

  isExternal: (url) ->
    if url.match(/kitchen1883\.com/i) != null
      return false
    match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/)
    if (typeof match[1] == "string" && match[1].length > 0 && match[1].toLowerCase() != location.protocol)
      return true
    if (typeof match[2] == "string" && match[2].length > 0 && match[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"), "") != location.host)
      return true
    false


