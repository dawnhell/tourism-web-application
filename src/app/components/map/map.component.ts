import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as L from 'leaflet';
import { Flag } from '../../models/flag';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
    @Output() showAddBtn = new EventEmitter();
    private mymap: any;
    private flags: Flag[];
    isPopupSelected: boolean;

    constructor(private _mapService: MapService) { }

    ngOnInit() {
        this.createAndDrawDefaultMap();
        this.bindMapEvents();
        this.getFlagsData();
        this.bindCityChangeToMap();

        /* Initialization for the first time. */
        this._mapService.sendDefaultCoordinates();
        this._mapService.setBounds(this.mymap.getBounds()._southWest, this.mymap.getBounds()._northEast);
    }

    createAndDrawDefaultMap() {
        this.mymap = L.map('mapid');

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            id: 'mapbox.streets',
            attribution: 'Open Street Map'
        }).addTo(this.mymap);
    }

    bindMapEvents() {
        this.mymap.on('zoomend', () => {
            this._mapService.setBounds(this.mymap.getBounds()._southWest, this.mymap.getBounds()._northEast);
        });

        this.mymap.on('moveend', () => {
            this._mapService.setBounds(this.mymap.getBounds()._southWest, this.mymap.getBounds()._northEast);
        });
    }

    setFlagCircles() {
        for (let i = 0; i < this.flags.length; ++i) {
            const circle = L.circle([this.flags[i].latitude, this.flags[i].longitude], {
                color: '#013ADF',
                fillColor: '#CECEF6',
                fillOpacity: 0.5,
                radius: this.flags[i].popularity * 10
            }).addTo(this.mymap);
        }
    }

    setFlagMarkers() {
        for (let i = 0; i < this.flags.length; ++i) {
            const icon = L.icon({
                iconSize: [ 30, 40 ],
                iconAnchor: [ 15, 40 ],
                iconUrl: '../../../assets/map-marker.png'
            });

            const marker = L.marker([this.flags[i].latitude, this.flags[i].longitude], { icon: icon })
                .addTo(this.mymap)
                .on('click', () => {
                    this._mapService.selectSight(this.flags[i]);
                    this.isPopupSelected = true;
                });

            /* This is HTML markup for marker popup. */
            marker.bindPopup(`
                <strong>` + this.flags[i].name + `</strong>
                <br>
                <span>` + this.flags[i].address + `</span>
                <br>
                <span>Popularity: ` + this.flags[i].popularity + `</span>
            `);
        }
    }

    getFlagsData() {
        this._mapService.getAllSigts()
            .subscribe(
                data => {
                    this.flags = data;
                    this.setFlagCircles();
                    this.setFlagMarkers();
                },
                error => {
                    console.log(error);
                }
            );
    }

    reinitList() {
        if (this.isPopupSelected) {
            this._mapService.setBounds(this.mymap.getBounds()._southWest, this.mymap.getBounds()._northEast);
        }
    }

    bindCityChangeToMap() {
        this._mapService.getCityCoordinates().subscribe(
            data => {
                this.mymap.setView([data.lat, data.lon], 12);
            },
            error => {
                console.log(error);
            }
        );
    }
}