import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Breed } from '../interfaces/cat';
import { Cat } from '../interfaces/cat';
import { CatImageService } from '../services/cat-image.service';

@Component({
  selector: 'app-cat-image-search',
  templateUrl: './cat-image-search.component.html',
  styleUrls: ['./cat-image-search.component.scss']
})
export class CatImageSearchComponent implements OnInit {
  searchForm: FormGroup;
  catImages$: Observable<Cat[]>;
  breeds: Breed[];
  limit = [10, 15, 30, 50];

  constructor(private catImageService: CatImageService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      breed: new FormControl(''),
      results: new FormControl(10)
    });

    this.catImageService.getBreeds().subscribe((breeds: Breed[]) => {
      this.breeds = breeds;
    });
  }

  searchImages(): void {
    const breed = this.searchForm.get('breed').value;
    const results = this.searchForm.get('results').value;

    this.catImages$ = this.catImageService.searchImages(breed, results);
  }
}
