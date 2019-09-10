import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // 2. declare a new object (as an attribute of a Dom element, just like class, id, src, href)
  public userInfo: any = {
    // 4. store default value. Value could be replaced when Dom element userName changed(because two-way data binding)
    userName: '111',
    gender: 'male',
    cities: ['Richmond', 'Arlington', 'Fairfax'],
    city: 'Richmond',
    hobbies: [
      {
        title: 'Food',
        checked: false
      },
      {
        title: 'Nap',
        checked: false
      },
      {
        title: 'Coding',
        checked: true
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  clickSubmit() {
    console.log(this.userInfo)
  }

}
