import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breed } from '../interfaces/cat';
import { Cat } from '../interfaces/cat';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CatImageService {

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<Breed[]> {
    const url = 'https://api.thecatapi.com/v1/breeds';

    return this.http.get<Breed[]>(url, { headers: { 'x-api-key': environment.API_KEY } });
  }

  searchImages(breed: string, results: number): Observable<any> {
    let url = `https://api.thecatapi.com/v1/images/search?limit=${results}`;

    if (breed) {
      url += `&breed_ids=${breed}`;
    }

    return this.http.get(url, { headers: { 'x-api-key': environment.API_KEY } })
      .pipe(
        map((response: Cat[]) => {
          return response.map((image: Cat) => {
            return {
              id: image.id,
              url: image.url
            };
          });
        })
      );
  }
}
