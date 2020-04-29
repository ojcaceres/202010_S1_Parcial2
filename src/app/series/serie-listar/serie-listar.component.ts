import { Component, OnInit } from '@angular/core';

import{Serie} from '../serie';

import{SerieService} from '../serie.service';



@Component({

  selector: 'app-serie-listar',

  templateUrl: './serie-listar.component.html',

  styleUrls: ['./serie-listar.component.css']

})

export class SerieListarComponent implements OnInit {



  constructor(private serieService: SerieService) { }

  private series: Array<Serie>; 

  getSeries(): Array<Serie> {
    return this.series;
  }
  ngOnInit() {
    this.getSerieService();
  }

  getSerieService(): void {
    this.serieService.getSeries()
      .subscribe(series => {
        this.series = series;
      });
  }



}