import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() styleStr:string;
  constructor() { }
  static dark:boolean = false;

  ngOnInit(): void {
  }

  public static switchStyle(styleStr:string):void{
    if(styleStr === 'dark'){
      ContainerComponent.dark =true;
    }
    else if(styleStr === 'light') {ContainerComponent.dark = false;}
  }

  setClasses(){
    let classes = {
      dark: ContainerComponent.dark,
      'lightArticleContainer': ContainerComponent.dark,
      'darkArticleContainer': ContainerComponent.dark
    }
    return classes;
  }

}
