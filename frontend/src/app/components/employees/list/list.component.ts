import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employe } from 'src/app/_models/employe';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public employees: Employe[] = [];

  constructor(
    private serviceEmploye: EmployeeService,
    private toaster: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.serviceEmploye.findAll()
      .subscribe((response: any) => {
        this.employees = response.employes;
      })
  }

  delete(employeeID) {
    this.serviceEmploye.delete(employeeID)
      .subscribe((response: any) => {
        this.toaster.success(response.messages);
        this.loadAllEmployees();
      }, errors => {
        this.toaster.error(errors.error.message);
      });
  }
}
