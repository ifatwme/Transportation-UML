import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Driver } from 'src/app/logic/entities/driver';
import { Reservation } from 'src/app/logic/entities/reservation';
import { DriverService } from 'src/app/logic/services/driver.service';
import { ReservationService } from 'src/app/logic/services/reservation.service';
import { __assign } from 'tslib';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  selectedReservation!:number|null
  allReservations:any[] = []
  allDrivers:Driver[] = []

  constructor(
    private fb:FormBuilder,
    private snack: MatSnackBar,
    private reservationService: ReservationService,
    private drivers:DriverService,
  ){}

  ngOnInit(){
    this.allDrivers = this.drivers.findAll()
    this.allReservations = this.reservationService.findAll()        
    
  }

  reject(reservation:Reservation){
    this.reservationService.setStatus(reservation,"Rejected")
  }

  assign(driver:Driver,reservation:Reservation){
    this.drivers.assignReservation(reservation,driver)
  }

  getDriver(driverId:number){
    return this.drivers.findAll().find(driver=>driver.id == driverId)!
  }

}
