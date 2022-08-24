import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  step = 0;
  control = new FormControl('');
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]> | undefined;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  ageControl = new FormControl('', [Validators.required, Validators.min(1)]);

  constructor() { }

  ngOnInit(): void {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  private _filter(value: string): string[] {
    const filterValue = ProfileComponent._normalizeValue(value);
    return this.streets.filter(street => ProfileComponent._normalizeValue(street).includes(filterValue));
  }

  private static _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
