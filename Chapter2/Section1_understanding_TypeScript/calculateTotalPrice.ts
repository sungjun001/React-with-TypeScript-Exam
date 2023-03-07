
// You can see that "price" is expressed in a red line with an error.
// If you change it to "Price" => "unitPrice," the error disappears.
function calculateTotalPriceTS(product: { name: string; unitPrice: number }, quantity: number, discount: number) {
    const priceWithoutDiscount = product.price * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}