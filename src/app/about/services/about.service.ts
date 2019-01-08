import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root'})
export class AboutService {
    constructor(private http: HttpClient) {}

    getAboutContent() {
        return this.http.get('http://localhost:3000/aboutUs');
    }
}
