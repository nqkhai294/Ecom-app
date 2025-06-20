import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product';

interface IProduct {
  id: number;
  sku: string;
  name: string;
  price: number;
  shortName: string;
  description: string;
  createdDate: Date;
  deliveryTime: string;
  categoryId: number;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  isSidePanelVisible: boolean = false;
  productObj: IProduct = {
    id: 0,
    sku: '',
    name: '',
    price: 0,
    shortName: '',
    description: '',
    createdDate: new Date(),
    deliveryTime: '',
    categoryId: 0,
    imageUrl: '',
  };
  categoryList: any[] = []; // Assuming categoryList is an array of categories

  constructor(private productService: ProductService) {
    // Initialize productObj or fetch data if needed
  }

  ngOnInit(): void {
      this.getAllCategory();
  }

  getAllCategory() {
    this.productService.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    })
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
