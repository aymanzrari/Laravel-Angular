import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employe } from 'src/app/_models/employe';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  employe: Employe = {name: '', phone: '', job: ''};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.populateFrom();
  }

  populateFrom() {
    let id = this.route.snapshot.params.id;
    this.employeeService.findById(id)
      .subscribe((response: any) => {
        this.employe = response.employe
      });
  }

  update() {
    this.employeeService.update(this.employe)
      .subscribe((response: any) => {
        this.toaster.success(response.messages);
        this.router.navigate(['/employees']);
      }, errors => {
        this.toaster.error(errors.error.message);
      });
  }

}
