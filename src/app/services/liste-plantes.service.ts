import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ListePlantesService {
    constructor(private httpClient: HttpClient) {}

    private apiUrl = 'http://localhost:3000/listProducts';

    public getListePlantes() {
        return this.httpClient.get(this.apiUrl);
    }
}
