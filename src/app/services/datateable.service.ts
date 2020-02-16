import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TableModel } from '../models/table.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatateableService {

  private dataTable = environment.dataTable;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.dataTable);
  }

}
