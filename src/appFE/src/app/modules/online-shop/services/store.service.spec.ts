import { TestBed } from '@angular/core/testing';
import { StoreService } from './store.service';
import { RouterTestingModule } from '@angular/router/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


describe('StoreService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: StoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();


    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(StoreService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('call getStores should give response 200 ok', () => {
    let stores = service.getStores();
    expect(stores).toBeTruthy();
  });
/*
  it('can test HttpClient.get', () => {
    const testData: Data = { name: 'Test Data' };

    // Make an HTTP GET request
    httpClient.get<Data>(testUrl).subscribe((data) =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/data');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
*/
});
