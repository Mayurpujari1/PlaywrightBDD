import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  public readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addProductToCart(productName: string): Promise<void> {
    const productCard = this.page
      .locator('.inventory_item')
      .filter({ has: this.page.locator('.inventory_item_name', { hasText: productName }) });

    await productCard.locator('button').click();
  }

  async getCartItemByName(productName: string): Promise<Locator> {
    await this.page.locator('.shopping_cart_link').click();
    return this.page
      .locator('.cart_item')
      .filter({ has: this.page.locator('.inventory_item_name', { hasText: productName }) });
  }
}
