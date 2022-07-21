import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'az-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.less']
})
export class ResumeComponent implements OnInit {
 
  profileForm!: FormGroup;
  isVisible = false;
  visible = false;
  addNewSomthing: any = []
  placement: NzDrawerPlacement = 'bottom';
  checked = true

  currentStep = 1;

  resume = [
    {
      logo: '/assets/images/__avatar_url.jpg',
      name: 'Тимур Мун',
      job: 'Ветеринар'
    },
    {
      logo: '/assets/images/__avatar_url.jpg',
      name: 'Тимур Мун',
      job: 'Агроном'
    },
  ]

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: [null],
      lastName: [null],
      price: [null],
    });
   }

  ngOnInit() {
  }


  showModal(): void {
    this.currentStep = 1;
    this.isVisible = true;
  }

  showDrawer(): void {
    this.currentStep = 1;
    this.visible = true;
  }
  closeDrawer(): void {
    this.visible = false;
  }

  onSubmit(): void {
    this.addNewSomthing.push(this.profileForm.value)
  }

  pre(): void {
    this.currentStep -= 1;
  }

  next(): void {
    if (this.currentStep === 5) {
      this.isVisible = false;
    }
    this.currentStep += 1;
  }

  onCancel(): void {
    this.isVisible = false;
  }

}
