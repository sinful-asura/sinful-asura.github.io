//@ts-nocheck  <<< Disable typescript checking for this file as it is only a template
//If you don't see a red text below in vscode, install extension 'Better comments'
/**
 * ! IMPORTANT ! 
 * ! Remove this comment and the comment with '@ts-nocheck' above
 * ! when using this file in a real application !!!
 */
import { Directive, ElementRef, HostListener, NgZone } from '@angular/core';

@Directive({
  selector: '[appPhoneField]'
})
export class PhoneFieldDirective {

  constructor(private ngZone: NgZone, private elRef: ElementRef) { 
  }

  @HostListener("keydown", ['$event'])
  checkCurrentKey(e: KeyboardEvent){
    this.ngZone.runOutsideAngular(()=>{
    switch(e.key){
      case '+':
        if(!this.elRef.nativeElement.value){
          //If it's the first character, enable +
          break;
        } else{
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      case 'Backspace':
      break;
      case 'a': case 'A':
        if(e.ctrlKey){
          break;
        } else{
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      default:
        for(let i = 0; i <= 9; i++){
          if(e.key == i.toString()){
            break;
          }
          if(i==9){
            e.stopPropagation();
            e.preventDefault();
          }
        }
      break;
    }
    
    })
  }
}
