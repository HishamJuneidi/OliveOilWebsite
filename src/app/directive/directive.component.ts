import { Component, OnInit, Directive, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})

@Directive({
  selector: '[idemPlaceHolder]',
})
export class DirectiveComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
