import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_KEY
import 'mapbox-gl/dist/mapbox-gl.css'

class BarMap extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })

    const markerElement = document.createElement('div')
    markerElement.className = 'bar-marker'
    markerElement.innerText = '🍹'
    return new mapboxgl.Marker(markerElement)
      .setLngLat({ lat: this.props.marker.lat, lng: this.props.marker.lng})
      .addTo(this.map)
  }

  render() {
    return (
      <div className="map bar-map-show" ref={el => this.mapDiv = el}/>
    )
  }
}

export default BarMap
