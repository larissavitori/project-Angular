import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

//imports dos componentes PhotoComponent e PhotoListComponent
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/photos/filter-by-description.pipe';



@NgModule({
    declarations: [
        //declaração dos componentes
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotosComponent,
        FilterByDescription
    ],
    imports: [
        HttpClientModule,
        // acessa as diretivas do angular NGFOR, NGIF, etc
        CommonModule
    ]
})
export class PhotosModule {}