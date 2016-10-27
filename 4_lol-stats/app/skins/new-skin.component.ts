import { Component, OnInit } from '@angular/core';
import { Skin } from '../model/skin.model';
import { RestHttp } from '../servicios/rest.http';
@Component({
    moduleId: module.id,
    selector: 'new-skin',
    templateUrl: 'new-skin.component.html'
})
export class NewSkinComponent implements OnInit {
   
    constructor(private servicios : RestHttp) { 
      
    }



    ngOnInit() { }

   
onSubmit(form: any): void {
    var skin : Skin;

    skin = new Skin(form.skinId, form.championId, 
    form.skinUrl, form.skinName)

    console.log(JSON.stringify(form));

    this.servicios.addSkin(skin).subscribe(
        res => console.log(res)
    );
}

}