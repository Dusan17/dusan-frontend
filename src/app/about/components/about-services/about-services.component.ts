import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about-services',
    templateUrl: './about-services.component.html',
    styleUrls: ['./about-services.component.css']
})
export class AboutServicesComponent implements OnInit {

    activeTab = 'photo';
    constructor() {
    }

    ngOnInit() {
    }

}
