import { Component, OnInit } from '@angular/core';
import { PLACES } from './strip-mock-data';
import { Place } from './place/place.model';

@Component({
  selector: 'app-preview-strip',
  templateUrl: './preview-strip.component.html',
  styleUrls: ['./preview-strip.component.scss']
})
export class PreviewStripComponent implements OnInit {

    places: Place[] =  PLACES;

    constructor() {
    }

    ngOnInit() {
    }
}
