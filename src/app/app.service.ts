import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {

    private url = 'http://localhost:3000/';

    constructor(private _http: Http, private sanitizer: DomSanitizer) {}

    getHttp(uri: string, page?: number, limit?: number): any {
        let queryParams = '?';

        queryParams = page ? queryParams + '&_page=' + page : queryParams;
        queryParams = limit ? queryParams + '&_limit=' + limit : queryParams;

        /* tslint:disable */ let url = this.url + uri + queryParams;

        return this._http.get(url).toPromise().then(response => response.json());
    }

    getPage(uri: string): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(uri);
    }
}
