import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as L from 'leaflet';
import { Flag } from '../../models/flag';
import { MapService } from '../../services/map.service';
import { LatLngExpression } from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
    @Output() showAddBtn = new EventEmitter();
    private mymap: any;
    private flags: Flag[];
    private route: Flag[] = [];
    private polyline;
    isPopupSelected: boolean;

    constructor(private _mapService: MapService,
                private router: Router) { }

    ngOnInit() {
        this.createAndDrawDefaultMap();
        this.bindMapEvents();
        this.getFlagsData();
        this.bindCityChangeToMap();

        /* Initialization for the first time. */
        this._mapService.sendDefaultCoordinates();
        this._mapService.setBounds(this.mymap.getBounds()._southWest, this.mymap.getBounds()._northEast);

        this.route = this._mapService.getRoute();

        this._mapService.addSight().subscribe(sight => {
            this.route.push(sight);
            const lines = this.route.slice() as any[];
            this.polyline.setLatLngs(lines.map(item => item = L.latLng(item.latitude, item.longitude)));
            this.polyline.redraw();
        });

        this._mapService.removeSight().subscribe(sight => {
            const sightIdx = this.route.findIndex(item => item.id === sight.id);
            this.route.splice(sightIdx, 1);
            const lines = this.route.slice() as any[];
            this.polyline.setLatLngs(lines.map(item => item = L.latLng(item.latitude, item.longitude)));
            this.polyline.redraw();
        });

        // const latlngs = [
        //     [45.51, -122.68],
        //     [37.77, -122.43],
        //     [34.04, -118.2]
        // ] as LatLngExpression[];
        this.polyline = L.polyline([], {color: 'red'}).addTo(this.mymap);

        // this.mymap.fitBounds(this.polyline.getBounds());
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
            if (!this.isPopupSelected) {
                this._mapService.setBounds(this.mymap.getBounds()._southWest, this.mymap.getBounds()._northEast);
            }
        });

        this.mymap.on('moveend', () => {
            console.log(this.isPopupSelected);
            if (!this.isPopupSelected) {
                this._mapService.setBounds(this.mymap.getBounds()._southWest, this.mymap.getBounds()._northEast);
            }
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
                .on('popupopen', () => {
                    this._mapService.selectSight(this.flags[i]);
                    this.isPopupSelected = true;
                    this.router.navigate(['/home']);
                })
                .on('popupclose', () => {
                    this.reinitList();
                    this.isPopupSelected = false;
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
