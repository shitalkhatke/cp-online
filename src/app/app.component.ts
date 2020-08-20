import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private fileeventarray :any[];
  private files = [];
  private url:any;
  private msg:string = "";
  private isimg:boolean;
constructor(){
this.fileeventarray = [];
this.files = [];
this.isimg= false;
}

  onClickPreview(event){
    // $("#Filesdiv").empty();
    this.fileeventarray = [];
   
    $("#preview").attr("disabled", false);
    for(let i=0; i<event.target.files.length;i++){
    
		if(!event.target.files[i] || event.target.files[i].length == 0) {
			this.msg = 'You must select an File';
			return;
		}
		    
    this.fileeventarray.push(event);
		
    }
  }

  onPreviewButton()
  {
    if( this.fileeventarray.length == 0) {
      this.msg = 'You must select an File';
      return;
    }

    $("#preview").attr("disabled", true);
    for(let i=0; i<this.fileeventarray.length;i++){
      var reader = new FileReader();
      var mimeType =this.fileeventarray[i].target.files[i].type;

       if (mimeType.match(/image\/*/) !== null) {
       	this.msg = "Only images are supported";
        
         const file = this.fileeventarray[i].target.files[i];
         reader.readAsDataURL(file);
         
          reader.onload = (_event:any) => {
           this.msg = "";
           this.url = _event.target.result; 
           this.files.unshift(this.url);
            this.isimg =true;
           
        }
        
      }
  }

}
}
