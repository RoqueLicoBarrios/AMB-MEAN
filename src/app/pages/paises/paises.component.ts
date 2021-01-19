import { Agilis, tableRow, UiNotificationHelper } from '@agilis/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
//import { Console } from 'console';
//import { ConsoleReporter } from 'jasmine';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { from } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GEO } from 'src/app/models/geo';
import { ACPaisService } from 'src/app/services/ac-pais.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  modalSearchRef: BsModalRef;
  modalDataRef: BsModalRef;
  loading: boolean = false;

  tablerows: tableRow[] = [
    new tableRow(4, "Nombre", "Nombre", true),
    new tableRow(3, "A2", "A2", true),
    new tableRow(3, "A3", "A3", true),
    new tableRow(1,"EDITAR","EDITAR ",true),
    new tableRow(1,"BORRAR","BORRAR ",true)
  ];
   data: GEO.Pais[] = [];
  nameSearch: GEO.Pais;
  paisName :string ='';
  
  searchNombre: string = '';
  itemSelected: GEO.Pais;
  
  constructor(
    private modalService: BsModalService,
    private uihelper: UiNotificationHelper,
    private paisService: ACPaisService) { }

  ngOnInit(): void {
  }


  searchShow(formSearchRef: TemplateRef<any>) {
    try {
      this.modalSearchRef = this.modalService.show(formSearchRef);
    } catch (error) {
      this.uihelper.toastCustom(error);
    }
  }
  searchClose() {
    if (this.modalSearchRef) this.modalSearchRef.hide();
  }
  dataShow(formDataRef: TemplateRef<any>) {
    try {
      this.itemSelected = new GEO.Pais();
      this.modalDataRef = this.modalService.show(formDataRef, { ignoreBackdropClick: true });
    } catch (error) {
      this.uihelper.toastCustom(error);
    }
  }
  dataClose() {
    if (this.modalDataRef) this.modalDataRef.hide();
  }

  get() {
    this.searchClose();
    this.loading = true;
    this.paisService
   
      .get(new GEO.Pais)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
       
       data => this.data = data.filter(dato => { 
         if (!this.paisName) {return dato } 

       else (this.paisName) 
      return dato.Nombre === this.paisName})
        
     )}

  set() {
    this.dataClose();
    this.loading = true;
    this.paisService
      .set(this.itemSelected, Agilis.Operacion.ADD)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        () => this.get()
      );
  }
  update(){
    
    this.dataClose();
    this.loading = true;
    console.log(this.itemSelected)
    this.paisService.set(this.itemSelected,Agilis.Operacion.UPDATE)
    .pipe(
      
      finalize(() => this.loading = false )
    )
    .subscribe(
      
      ()=>this.get()
    );}

  delete(item: GEO.Pais) {
   console.log(item.toString())
    this.paisService.set( item ,Agilis.Operacion.DELETE)
    
    .subscribe(
      ()=>this.get()
    )
    }
 }

