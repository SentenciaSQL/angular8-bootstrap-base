import { Component, OnInit } from '@angular/core';
import { DatateableService } from 'src/app/services/datateable.service';
import { TableModel } from 'src/app/models/table.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  datos: TableModel[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private datateableService: DatateableService) {
    $('#dataTable').DataTable();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10
    };
    this.datateableService.getData().subscribe( resp => {
      // @ts-ignore
      this.datos = resp;
      console.log(resp);
      this.dtTrigger.next();
    })
  }


}
