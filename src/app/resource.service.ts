import { Injectable } from '@angular/core';
import { Resource } from './resource.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ResourceService {
  resources: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.resources = database.list('resources')
  }

}
