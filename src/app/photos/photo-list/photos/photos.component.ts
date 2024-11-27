import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges{

  //Input é um decorator que indica entrada e fornece metadados de configuração.Dom
 @Input() 
  photos: Photo[] = [];
  filter: string = '';
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      //slice cria um novo array a partir de um array existente 
      //cortando o array original a partir do index até o index + 3 "fatiando" o array. Ou seja, quando o primeiro index é 0,
      // o outro vale 3, e o slice() pegará a fatia de 0 a 2
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
