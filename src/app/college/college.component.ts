import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent /* implements AfterViewInit,AfterContentInit */ {
 

  @ViewChild('navbar') navList!: ElementRef<any>;

  togglenavbar(): void {
    console.log('vertical navbar', this);

    const toggleNav: any = document.getElementById('navbar');

    if (toggleNav?.style.display !== 'flex') {
      toggleNav.style.display = 'flex';
      console.log('true', toggleNav.style.display);
    } else {
      toggleNav.style.display = 'none';
      console.log('false===>', toggleNav.style.display);
    }

    // console.log('wasuup==> ', toggleNav.style.display)

  }

  ngAfterViewInit() { }

  
}
