import { Component, OnInit, Input } from '@angular/core';
import { OtherCategoriesComponent } from '../other-categories/other-categories.component';
import { OtherCategory } from 'src/app/models/otherCategory';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-other-categories-item',
  templateUrl: './other-categories-item.component.html',
  styleUrls: ['./other-categories-item.component.css']
})
export class OtherCategoriesItemComponent implements OnInit {

  @Input() category:OtherCategory;

  constructor(private otherCategoriesComponent:OtherCategoriesComponent, private sidenav: MatSidenav) { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.sidenav.mode === 'push'){
      this.sidenav.toggle();
    }
  }
}
