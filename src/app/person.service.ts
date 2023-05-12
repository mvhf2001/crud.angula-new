import { getPackageVersionFromPackageJson } from '@angular/cdk/schematics/ng-add/package-config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getProjectTsConfigPaths } from '@angular/core/schematics/utils/project_tsconfig_paths';

import { Product } from './product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }
}

getperson() {
  
  return this.http
  .toPromise()
  .then(res => <Product[]>res.data)
  .then(data => { return data; });
}