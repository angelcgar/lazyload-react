import type { ProductCardMOCProps } from '../interfaces/interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardMoc } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
// export { ProductCard } from './ProductCard';

const ProductCard: ProductCardMOCProps = Object.assign(ProductCardMoc, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons,
});

export default ProductCard;
