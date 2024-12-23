import type { Props as ProductButtonsProps } from '../components/ProductButtons';
import type { Props as ProductCardProps } from '../components/ProductCard';
import type { Props as ProductImageProps } from '../components/ProductImage';
import type { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
	id: 		string;
	title: 	string;
	img?: 	string;
}

export interface ProductContextProps {
	counter: 		number;
	product: 		Product;
	increaseBy: (value: number) => void;
}

export interface ProductCardMOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Buttons: 	(Props: ProductButtonsProps) 	=> JSX.Element;
	Image: 		(Props: ProductImageProps) 		=> JSX.Element;
	Title: 		(Props: ProductTitleProps) 		=> JSX.Element;
}
