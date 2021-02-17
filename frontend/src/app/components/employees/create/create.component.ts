import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employe } from 'src/app/_models/employe';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  employe: Employe = {name: '', phone: '', job: ''};

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.employeeService.save(this.employe)
      .subscribe((response: any) => {
        this.toaster.success(response.messages);
        this.router.navigate(['/employees']);
      }, errors => {
        this.toaster.error(errors.error.message);
      });
  }

}
