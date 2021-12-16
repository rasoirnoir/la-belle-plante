import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { ListePlantesService } from 'src/app/services/liste-plantes.service';

@Component({
    selector: 'app-page-accueil',
    templateUrl: './page-accueil.component.html',
    styleUrls: ['./page-accueil.component.scss'],
})
export class PageAccueilComponent implements OnInit {
    public filterCat: string[];
    public listeProducts: object[];

    constructor(private listPlantes: ListePlantesService) {
        this.filterCat = [];
        this.listeProducts = [];
    }

    ngOnInit(): void {
        this.extractData();
    }

    /**
     * Extrait les données sur les plantes
     */
    extractData() {
        this.listPlantes.getListePlantes().subscribe((result: any) => {
            this.listeProducts = result;
            this.extractCategories();
            this.listeProducts.length = 20;
            console.log(this.listeProducts);
        });
    }

    /**
     * Extrait les catégories de plante
     */
    extractCategories() {
        const tmp = this.listeProducts.map(
            (value: any) => value['product_breadcrumb_label']
        );
        this.filterCat = _.uniq(tmp);
    }
}
