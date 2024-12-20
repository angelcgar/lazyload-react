import 	ProductCard,{
	ProductButtons,
	ProductImage,
	ProductTitle,

} from '../components';

const product = {
	id: '1',
	title: 'Coffe Mog',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				<ProductCard product={product}>
					<ProductCard.Image img={product.img} />
					<ProductCard.Title title="cafe" />
					<ProductCard.Buttons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};
