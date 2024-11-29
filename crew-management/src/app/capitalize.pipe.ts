import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // name: 'capitalize',
  name: 'fileSize',
  standalone: true,
  // To make it impure pipe
  pure: false
})
export class CapitalizePipe implements PipeTransform {

  // transform(value: string, ...args: unknown[]): unknown {
  // transform(value: any, ...args: unknown[]): unknown {

  // Impure Pipe transform syntax
  transform(users: any[], searchTerm: string){

    // if(!value) return value;

    // // return value.replace(/\b\w/g, (char) => char.toUpperCase());

    // const k = 1024;
    // const size = ["Bytes", "KB", "MB", "GB", "TB"];
    // const i = Math.floor(Math.log(value)/Math.log(k));
    // // return `${value.toFixed(2)} ${size[i]}`;
    // return parseFloat((value/Math.pow(k, i)).toFixed(2)) + " " + size[i];

    if(!users || !searchTerm){
      return users;
    }

    searchTerm = searchTerm.toLowerCase();
    return users.filter(user => user.toLowerCase().includes(searchTerm));

  }

}

