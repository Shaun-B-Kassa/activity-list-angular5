import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recentActivities: any;
  updatedRecentActivities: any;
  constructor(private dataService: DataService){}

  ngOnInit(){
    this.recentActivities = this.dataService.activityData.data.recentActivities;
    this.updatedRecentActivities = this.recentActivities.slice();
    this.updatedRecentActivities.forEach((value)=>{

      if(value.nodeTypeString === "Comment"){
         value.nodeTypeString = "commented on the idea";
      }
      if(value.nodeTypeString === "Idea"){
         value.nodeTypeString = "posted an idea";
      }
      if(value.nodeTypeString === "Reply"){
         value.nodeTypeString = "replied to a comment on the idea";
      }
    })
    this.recentActivities = this.updatedRecentActivities;
  }
}
