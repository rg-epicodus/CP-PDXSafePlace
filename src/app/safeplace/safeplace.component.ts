import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource.model';
import { Router } from '@angular/router';
import { ResourceService } from '../resource.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-safeplace',
  templateUrl: './safeplace.component.html',
  styleUrls: ['./safeplace.component.css'],
  providers: [ResourceService]
})
export class SafeplaceComponent implements OnInit {
  resources: FirebaseListObservable<any[]>;

  constructor(private router: Router, private resourceService: ResourceService) { }

  ngOnInit() {
  }

}