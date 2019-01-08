import {Component, OnInit} from '@angular/core';
import {WorkModel} from '../../models/work.model';
import {CategoryModel} from '../../models/category.model';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

    works: WorkModel[] = WorkModel.getWorks();
    filterWorks = [];
    category = CategoryModel;
    activeFilter = 'all';
    gridView = true;

    constructor() {
    }

    applyFilter(filter) {
        this.activeFilter = filter;
        if (filter === 'all') {
            this.filterWorks = [...this.works];
            return;
        }
        const works: any = this.works.filter(work => work.category === filter);
        this.filterWorks = works;
    }

    ngOnInit() {
        this.filterWorks = [...this.works];
    }

}
