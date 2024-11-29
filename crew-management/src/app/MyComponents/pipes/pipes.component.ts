import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CapitalizePipe } from '../../capitalize.pipe';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [ CommonModule, CapitalizePipe, FormsModule ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})

export class PipesComponent implements OnInit {

  // Built-in Pipes
  today: Date = new Date();
  text: string = "Manoj";
  amount: number = 123.45;
  percentVal: number = 0.729;
  jsonVal: object = {
    name: "Manoj",
    version: "1.0.0"
  }
  myArray: string[] = [ "apple", "banana", "cherry" ];
  myObject: {[key: string]: any} = {  name: "Manoj", age: 30, city: "New York" };

  // Custom Pipes
  // capitalizePipe: CapitalizePipe = new CapitalizePipe();
  fileSizes: number[] = [0, 1024, 104857, 102224182, 2099241824, 1099511627776];

  // Impure Pipes
  users: string[] = ["Manoj", "John", "Jane"];
  searchTerm: string = "";

  id: string | null = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
      })
  }

}
