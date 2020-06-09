import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls, FullScreen } from 'ol/control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'map-finder';
  map: any;
  ngOnInit(): void {
    this.map = new Map({
      controls: defaultControls().extend([new FullScreen()]),
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [47.43694, 9.13332],
        zoom: 0,
      }),
    });
  }
}
