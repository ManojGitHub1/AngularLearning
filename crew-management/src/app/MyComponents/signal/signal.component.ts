import { Component, effect, Injector, signal } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  // number
  counter = signal(0);

  // string
  username = signal('MJ');
  
  // array
  user = signal([
    'Manoj',
    'Jivanagi'
  ]);

  // object
  video = signal({
    title: 'Angular tutorials',
    description: 'Awesometutorial.com'
  });

  setCounter(){
    this.counter.set(300);
    this.counterEffect();
  }

  setVideo(){
    this.video.set({
      "title": "My name is khan",
      "description": "Die"
    })
  }

  updateCounter(){
    this.counter.update(counter => counter+50);
  }

  constructor(private injector: Injector){
    // everytime counter changes it prints (logs the activities) (tracks, monitors activities)
    // effect(() => {
    //   console.log("Value of counter "+this.counter());
    // })

  }

  // This function will track when we need by calling it in other function required
  counterEffect(){
    effect(() => {
      console.log("Value of counter "+this.counter());
    }, {injector: this.injector});
  }


}
