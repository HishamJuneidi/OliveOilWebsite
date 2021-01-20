import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Directive, ViewContainerRef } from '@angular/core';
import { IdemComponent } from '../idem/idem.component';
import { DirectiveComponent} from '../directive/directive.component';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})




export class DisplaylistComponent implements OnInit {

  allow = false;
  enterV = '';
  clicked = false;
  @ViewChild(DirectiveComponent) idemPlaceHolder : DirectiveComponent;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    setTimeout(() => {
      this.allow = true;
  }, 2000);

   }

   onAllow(){
     this.clicked = true;
    this.allow = false;
   }
   
  ngOnInit() {
  }

  private showIdems(Idem: IdemComponent){
      const IdemComponentFactory = this.componentFactoryResolver.resolveComponentFactory(IdemComponent);
      const hostViewContainerRef = this.idemPlaceHolder.viewContainerRef;
      hostViewContainerRef.clear();

      const componentRef = hostViewContainerRef.createComponent(IdemComponentFactory);
      //componentRef.instance
    }

}
