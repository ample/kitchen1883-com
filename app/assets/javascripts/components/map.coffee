class Kitchen.Map

  constructor: ->
    @setVars()
    @initMap()
    @applyStyles()
    @addMarker()

  @init: ->
    new Kitchen.Map()

  setVars: ->
    @container = $('#map').first()
    @location =
      lat: @container.data('lat')
      lng: @container.data('lng')

  initMap: ->
    @container =
    @map = new google.maps.Map(@container[0],
      zoom: 13
      center: @location
      disableDefaultUI: true
      mapTypeControlOptions:
        mapTypeIds: ['roadmap', 'styled_map']
    );

  applyStyles: ->
    @map.mapTypes.set('styled_map', @styles());
    @map.setMapTypeId('styled_map');

  addMarker: ->
    @marker = new google.maps.Marker(
      position: @location
      icon: MAP_ICON_URL
      map: @map
    )

  styles: ->
    new (google.maps.StyledMapType)([
      {
        'elementType': 'geometry'
        'stylers': [ { 'color': '#f5f5f5' } ]
      }
      {
        'elementType': 'labels.icon'
        'stylers': [ { 'visibility': 'off' } ]
      }
      {
        'elementType': 'labels.text.fill'
        'stylers': [ { 'color': '#616161' } ]
      }
      {
        'elementType': 'labels.text.stroke'
        'stylers': [ { 'color': '#f5f5f5' } ]
      }
      {
        'featureType': 'administrative.land_parcel'
        'elementType': 'labels.text.fill'
        'stylers': [ { 'color': '#bdbdbd' } ]
      }
      {
        'featureType': 'poi'
        'elementType': 'geometry'
        'stylers': [ { 'color': '#eeeeee' } ]
      }
      {
        'featureType': 'poi'
        'elementType': 'labels.text.fill'
        'stylers': [ { 'color': '#757575' } ]
      }
      {
        'featureType': 'poi.park'
        'elementType': 'geometry'
        'stylers': [ { 'color': '#e5e5e5' } ]
      }
      {
        'featureType': 'poi.park'
        'elementType': 'labels.text.fill'
        'stylers': [ { 'color': '#9e9e9e' } ]
      }
      {
        'featureType': 'road'
        'elementType': 'geometry'
        'stylers': [ { 'color': '#ffffff' } ]
      }
      {
        'featureType': 'road.arterial'
        'elementType': 'labels.text.fill'
        'stylers': [ { 'color': '#757575' } ]
      }
      {
        'featureType': 'road.highway'
        'elementType': 'geometry'
        'stylers': [ { 'color': '#dadada' } ]
      }
      {
        'featureType': 'road.highway'
        'elementType': 'labels.text.fill'
        'stylers': [ { 'color': '#616161' } ]
      }
      {
        'featureType': 'road.local'
        'elementType': 'labels.text.fill'
        'stylers': [ { 'color': '#9e9e9e' } ]
      }
      {
        'featureType': 'transit.line'
        'elementType': 'geometry'
        'stylers': [ { 'color': '#e5e5e5' } ]
      }
      {
        'featureType': 'transit.station'
        'elementType': 'geometry'
        'stylers': [ { 'color': '#eeeeee' } ]
      }
      {
        'featureType': 'water'
        'elementType': 'geometry'
        'stylers': [ { 'color': '#c9c9c9' } ]
      }
      {
        'featureType': 'water'
        'elementType': 'labels.text.fill'
        'stylers': [ { 'color': '#9e9e9e' } ]
      }
    ])
