import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-ludan-carousel';
import { LibraryCarouselComponent } from './library-carousel.component';

@NgModule({
  imports: [CarouselModule, CommonModule],
  declarations: [LibraryCarouselComponent],
  exports: [LibraryCarouselComponent]
})
export class LibraryCarouselModule {}
