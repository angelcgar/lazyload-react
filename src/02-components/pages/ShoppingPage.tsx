import ProductCard, {
	ProductButtons,
	ProductImage,
	ProductTitle,
} from '../components';

import '../styles/custom-styles.css';

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
				<ProductCard product={product} className="bg-dark text-white">
					<ProductCard.Image
						img={product.img}
						className={'custom-image'}
						style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
					/>
					<ProductCard.Title title="cafe" className={'text-white text-bold'} />
					<ProductCard.Buttons className={'custom-buttons'} />
				</ProductCard>

				<ProductCard product={product} className="bg-dark text-white">
					<ProductImage className={'custom-image'} />
					<ProductTitle className={'text-white text-bold'} />
					<ProductButtons className={'custom-buttons'} />
				</ProductCard>

				<ProductCard product={product} style={{ background: '#70D1F8' }}>
					<ProductImage
						style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
					/>
					<ProductTitle style={{ fontWeight: 'bold' }} />
					<ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
				</ProductCard>
			</div>
		</div>
	);
};
