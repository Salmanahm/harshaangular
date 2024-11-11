import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

// Every component should have atleast one template file and also maximum number of templates is one template
// implements OnInit this is optional but it is recommended to avoid issues 

// ** Data Bindings **
// it is a mechanism to read the properties form the component and show them in the template
// Check the dynamic properties of the component and use them in the component
export class DashboardComponent implements OnInit {
// declare the properties first
// if it gives no initializer error then go to tsconfig file and paste this in the first array
// "strictPropertyInitialization": false
// Designation: string;
// Username: string;
// NoOfTeamMembers: number;
// TotalCostOfAllProjects: number;
// PendingTasks: number;
// UpComingProjects: number;
// ProjectCost: number;

// CurrentExpenditure: number;
// AvailableFunds: number;
// Client:string[];
// Projects: number[]; 
// Year: number[] = [];
// TeamMembersSummary = [];
// TeamMembers=[];

// It is recommended to initialize all the properties, which we have mentioned above
Designation: string = '';
Username: string = '';
NoOfTeamMembers: number=0;
TotalCostOfAllProjects: number = 0;
PendingTasks: number = 0;
UpComingProjects: number=0;
ProjectCost: number=0;

CurrentExpenditure: number=0;
AvailableFunds: number=0;
Clients:string[] = []; // initialize the empty array for all the array types
Projects: string[]=[]; 
Years: number[] = [];
TeamMembersSummary: any = []; // use any for which we are not confirm what kind of data can be returned
TeamMembers: any=[]; // any means it can be object literal or any type of value


// To avoid errors, always initialize all the properties and specify their types


// ngOnInit is used to initialize the properties of the component and it executes automatically at the component startup
// ngOnInit is a method, it is a part of component lifecycle
ngOnInit() {
  // we can also initialize the properties using ajax request or rest api calls
this.Designation = 'Team Leader';
this.Username="Salman Ahmed";
this.NoOfTeamMembers=44;
this.TotalCostOfAllProjects=240;
this.PendingTasks=10;
this.UpComingProjects=5;
this.ProjectCost = 4455;
this.CurrentExpenditure=4433;
this.AvailableFunds=12203;
// we will display the above information in the template using data binding
// we will use angular interpolation binding that is double curly brackets {{Designation}}

this.Clients = [
  "ABC infotech ltb","Dec infotech ltb", "Ghi industries"
]
this.Projects = ['Project A', 'Project B', 'Project C', 'Project D']
// any property that is existing in the component is bydefault accessible in the template

for(var i=2019; i>= 2010; i--){
  this.Years.push(i);
}
this.TeamMembersSummary = [
  // each element in this array is an object
  {
    Region: "East", TeamMemberCount: 20, TemporarilyUnavailableMembers: 10
  },
  {
    Region: "West", TeamMemberCount: 32, TemporarilyUnavailableMembers: 6
  },
  {
    Region: "South", TeamMemberCount: 22, TemporarilyUnavailableMembers: 12
  },
  {
    Region: "North", TeamMemberCount: 60, TemporarilyUnavailableMembers: 6
  }
];

this.TeamMembersSummary = [
  {
    Region: 'East',
    TeamMembersCount: 20,
    TemporarilyUnavailableMembers: 4,
  },
  {
    Region: 'West',
    TeamMembersCount: 15,
    TemporarilyUnavailableMembers: 8,
  },
  {
    Region: 'South',
    TeamMembersCount: 17,
    TemporarilyUnavailableMembers: 1,
  },
  {
    Region: 'North',
    TeamMembersCount: 15,
    TemporarilyUnavailableMembers: 6,
  },
];

this.TeamMembers = [
  {
    Region: 'East',
    Members: [
      { ID: 1, Name: 'Ford', Status: 'Available' },
      { ID: 2, Name: 'Miller', Status: 'Available' },
      { ID: 3, Name: 'Jones', Status: 'Busy' },
      { ID: 4, Name: 'James', Status: 'Busy' },
    ],
  },
  {
    Region: 'West',
    Members: [
      { ID: 5, Name: 'Anna', Status: 'Available' },
      { ID: 6, Name: 'Arun', Status: 'Available' },
      { ID: 7, Name: 'Varun', Status: 'Busy' },
      { ID: 8, Name: 'Jasmine', Status: 'Busy' },
    ],
  },
  {
    Region: 'South',
    Members: [
      { ID: 9, Name: 'Krishna', Status: 'Available' },
      { ID: 10, Name: 'Mohan', Status: 'Available' },
      { ID: 11, Name: 'Raju', Status: 'Busy' },
      { ID: 12, Name: 'Farooq', Status: 'Busy' },
    ],
  },
  {
    Region: 'North',
    Members: [
      { ID: 13, Name: 'Jacob', Status: 'Available' },
      { ID: 14, Name: 'Smith', Status: 'Available' },
      { ID: 15, Name: 'Jones', Status: 'Busy' },
      { ID: 16, Name: 'James', Status: 'Busy' },
    ],
  },
];

}

onProjectChange($event:any){
  // We are changing the values of properties on click, this can also be done using api calls, rest api calls
console.log($event.target.innerHTML);
if($event.target.innerHTML=='Project A'){
this.ProjectCost=4002;
this.CurrentExpenditure=96700;
this.AvailableFunds = 100023;
}
else if($event.target.innerHTML=='Project B'){
  this.ProjectCost=5002;
  this.CurrentExpenditure=86700;
  this.AvailableFunds = 30023;
  }
  else if($event.target.innerHTML=='Project C'){
    this.ProjectCost=1250;
    this.CurrentExpenditure=50700;
    this.AvailableFunds = 340023;
    }
    else if($event.target.innerHTML=='Project D'){
      this.ProjectCost=1400;
      this.CurrentExpenditure=60700;
      this.AvailableFunds = 8980023;
      }
}

}


// ============== ngFor ============= 
// To read elements from an array and display them in the list or table dynamically
// To work with arrays or object array 
// ngFor is a shortform of predefined directive ngForOf 
// ngForOf is a directive 
// syntax *ngFor = let variableName of arrayName 
// let and of are used, also it is used to any tag like div, li, and so on
// the variable declared using let in ngFor is only block level variable and accessible with in the tag only
// We have used nested ngFor in the template
// We have also made data-target and id dynamic for collapse
// That means for first iteration it should generate cardbody1 and for second iteration it should generate cardbody2
// We will use property binding syntax of angular for the above dynamic Id generation 
// {{}} interpolation binding syntax
// [] property binding syntax
// data-target is an attribute so we will use attr 
// ng for with index for dynamic assign of property *ngFor="let teamMemberGroup of TeamMembers, let i=index"
// To enable the property binding syntax we use []
// [attr.data-target]="'#cardbody'+ i" then link to the id tag without hash, see below
// <div [id]="'cardbody'+ i " class="collapse show" data-parent="#accordion1">

// ============== Data Binding ============= 
// relationship between html element and component's property 
// Template html element's value will be automatically updated when user chnages in the component property and vice versa
// Angualar supports 4 types of data binding
// - interpolation {{}} prperty value as plan text 
// - property [] assign value of one property to another 
// - event () call a method when user performs and action 
// - two way binding [()] 
// onClick is an Event Attribute but (click) is an event in the angular