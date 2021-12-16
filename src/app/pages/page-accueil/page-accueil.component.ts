import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { ListePlantesService } from 'src/app/services/liste-plantes.service';

@Component({
    selector: 'app-page-accueil',
    templateUrl: './page-accueil.component.html',
    styleUrls: ['./page-accueil.component.scss'],
})
export class PageAccueilComponent implements OnInit {
    public filterCat!: string[];

    constructor(private listPlantes: ListePlantesService) {
        this.filterCat = [];
    }

    ngOnInit(): void {
        this.extractCategories();
    }

    extractCategories() {
        this.listPlantes.getListePlantes().subscribe((result: any) => {
            const tmp = result.map(
                (value: any) => value['product_breadcrumb_label']
            );
            this.filterCat = _.uniq(tmp);
        });
    }
}
