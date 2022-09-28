import { Directive, ElementRef ,HostBinding,HostListener,Input,OnChanges,OnInit,Renderer2, SimpleChanges} from "@angular/core";

@Directive({
    //selector:'[red-text-color]'
    selector:'[textColor]'
})

export class RedTextColorDirective implements OnInit,OnChanges
{
    @Input() textColor:string="";
    
    ngOnInit():void{
        this.changeColor();
    }
    ngOnChanges(changes:SimpleChanges):void{
        this.changeColor();
    }
    constructor(private targetelement:ElementRef,private domApi:Renderer2){
        console.log(targetelement.nativeElement);
        domApi.setStyle(targetelement.nativeElement,"color",this.textColor ||"red");
    }

    
    changeColor(){
        //this.domApi.setStyle(this.targetelement.nativeElement,"color",this.textColor || "red");
   this.color=this.textColor || "red";
    }


    @HostBinding("style.color")
     color="red";
    

    /*@HostListener('mouseover')
    onMouseOver() {
            
        this.color = "yellow";
    }*/
    
    @HostListener('mouseenter')
    onMouseEnter() {
            
        this.color = "yellow";
    }
    
    @HostListener('mouseleave')    onMouseLeave() {
            
        this.color = "brown";
    }
        
    
     
      /*  //bind eventhandler with hostelement event
    @HostListener(‘mouseleave’) onMouseLeave() {
        this.changeBackgroundColor(‘green’);
        this.border = ‘5px solid yellow’;
    }*/
}