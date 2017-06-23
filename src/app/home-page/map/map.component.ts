import { Component, OnInit } from '@angular/core';
import { MapModel          } from './map.model';
import { FLAGS             } from './mock-data';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
    LAYER_OSM = {
        id: 'openstreetmap',
        name: 'Open Street Map',
        enabled: false,
        layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Open Street Map'
        })
    };

    flags = [];
    model = new MapModel(
        [ this.LAYER_OSM],
        this.LAYER_OSM.id,
        this.flags
    );

    layers: L.Layer[];
    options = {
        zoom: 12,
        center: L.latLng([ 53.9, 27.6 ])
    };

    drawMap() {
        const baseLayer = this.model.baseLayers.find((l) => { return l.id === this.model.baseLayer; });
        const newLayers = this.model.overlayLayers
            .filter((l) => { return l.enabled; })
            .map((l) => { return l.layer; });
        newLayers.unshift(baseLayer.layer);

        this.layers = newLayers;
    }

    setFlagCircles() {
      for (let i = 0; i < FLAGS.length; ++i) {
        this.flags.push({
          id: 'circle',
          name: FLAGS[i].name,
          enabled: true,
          layer: L.circle([ FLAGS[i].location.lat, FLAGS[i].location.lng ], { radius: FLAGS[i].popularity * 10 })
        });
      }
    }

    setFlagMarkers() {
        for (let i = 0; i < FLAGS.length; ++i) {
            this.flags.push({
                id: 'marker',
                name: FLAGS[i].name,
                enabled: true,
                layer: L.marker([ FLAGS[i].location.lat, FLAGS[i].location.lng ], {
                    icon: L.icon({
                        iconSize: [ 40, 40 ],
                        iconAnchor: [ 20, 40 ],
                        iconUrl: '../../../assets/map-marker.png'/*,
                        shadowUrl: '44a526eed258222515aa21eaffd14a96.png'*/
                    })
                })
            });

            this.flags[i + FLAGS.length].layer.bindPopup(`
                <strong>` + FLAGS[i].name + `</strong>
                <br>
                <span>Popularity: ` + FLAGS[i].popularity + `</span>
                <br>
                <a href="#">More...</a>
            `).openPopup();
        }
    }

    constructor() {
        this.setFlagCircles();
        this.setFlagMarkers();
        this.drawMap();
    }

    ngOnInit() {
    }
}
