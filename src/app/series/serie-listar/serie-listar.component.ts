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
  private i: number;
  private s: number;


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
  sacarPromedio(): number{
    this.i = 0;
    while(this.series.length>this.i)
    {
      this.s= this.s + this.series[this.i].seasons;
      this.i=(this.i+1);
    }
    return this.s/this.series.length
  }



}