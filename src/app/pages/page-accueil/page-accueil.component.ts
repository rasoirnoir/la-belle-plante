import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { list_products } from 'src/app/data';

@Component({
    selector: 'app-page-accueil',
    templateUrl: './page-accueil.component.html',
    styleUrls: ['./page-accueil.component.scss'],
})
export class PageAccueilComponent implements OnInit {
    public filterCat!: string[];

    constructor() {
        this.filterCat = [];
    }

    ngOnInit(): void {
        this.filterCat = this.extractCategories();
    }

    extractCategories(): string[] {
        const categories = list_products.map(
            (value) => value['product_breadcrumb_label']
        );
        return _.uniq(categories);
    }
}
