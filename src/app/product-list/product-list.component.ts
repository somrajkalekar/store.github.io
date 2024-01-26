import { Component, OnInit } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  myStyle = {
    'height.px' : 300,
    'width.px'  : 200,
  }
  //filterBy : string | null = ''
  private _filterBy = '';
  get filterBy():any{
    return this._filterBy;
  }

  set filterBy(fb:any){
    //console.log(fb);
    this._filterBy = fb;
    //filtering
    this.filterProducts(fb);
  }
  // jara mala ts file madhe product ch error pahije tar mala interface class karav lagato 
  // step 1: product.ts file create karayach mag interface class karun 
  // step 2 : procut.component.ts file madhe product[] asa karaych
  products : product[] = [
    {
      id : 1,
      name : 'iphone 14',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident pariatur praesentium, odio temporibus tenetur hic cumque',
      price : 145000,
      image : '/assets/iphone14.jpg'
    },
    {
      id : 2,
      name : 'Samsung 11',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident pariatur praesentium, odio temporibus tenetur hic cumque',
      price : 110000,
      image : '/assets/samsung11.jpg'
    },
    {
      id : 3,
      name : 'Redmi 16',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident pariatur praesentium, odio temporibus tenetur hic cumque',
      price : 35000,
      image : '/assets/redmi 16.jpg'
    },
    {
      id : 4,
      name : 'OnePlus 11',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident pariatur praesentium, odio temporibus tenetur hic cumque',
      price : 96000,
      image : '/assets/oneplus11.jpg'
    },
    {
      id : 5,
      name : 'oppo max',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident pariatur praesentium, odio temporibus tenetur hic cumque',
      price : 14000,
      image : '/assets/oppo max.jpg'
    },
    {
      id : 6,
      name : 'vivo lite',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident pariatur praesentium, odio temporibus tenetur hic cumque',
      price : 11000,
      image : '/assets/vivo lite.jpg'
    },
    {
      id : 7,
      name : 'LG TV',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident pariatur praesentium, odio temporibus tenetur hic cumque',
      price : 46000,
      image : '/assets/Lg.jpg'
    },
    {
      id : 8,
      name : 'whaching machine',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident pariatur praesentium, odio temporibus tenetur hic cumque',
      price : 75000,
      image : '/assets/lg8.jpg'
    },
    {
      id : 9,
      name : 'cooler',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident pariatur praesentium, odio temporibus tenetur hic cumque',
      price : 7000,
      image : '/assets/coller.jpg'
    }
    ];
    filteredProducts = this.products;

    currentDate = new Date;
  constructor () {

  }
  ngOnInit(): void {
    
  }

  addtocart(event : any,product:any): void{
    console.log(event);
  }

  filterProducts(data:any):void{
    this.filteredProducts = this.products.filter(product => {
      return product.name.toLowerCase().includes(data.toLowerCase());
    });
  }

  /* onInput(event:any):void{
    console.log(event);
    this.filterBy = event.target.value;
  } */
}
