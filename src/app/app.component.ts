import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  st!: string;
  isDark=true;
  // isSuccess=false;
  movies:any[]=[]
  search() {
    fetch(`https://www.omdbapi.com/?s=${this.st}&apikey=37faa72a`)
      .then((res) => res.json())
      .then((data) => this.movies= data.Search);
      // this.isSuccess=true;
  }
  change()
  {
    if(this.isDark)
    this.isDark=false
  else
    this.isDark=true
  }
}
