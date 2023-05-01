import React from 'react';
import './styles/Carousel.scss';
export interface CarouselProps {
	id: string;
	contents: string[]
}

const Carousel: React.FC<CarouselProps> = ({ contents, id }) => {
	return (
		<div id={id} className="carousel slide" data-bs-interval="false">
			<div className="carousel-indicators">
				{
					contents.length > 1 && contents.map((content, index) => <CarouselIndicator id={id} index={index} key={index} />)
				}
			</div>
			<div className="carousel-inner h-100">
				{
					contents.map((content, index) => <CarouselItem index={index} content={content} />)
				}
			</div>
			{
				contents.length > 1 && <>
					<button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</>
			}
		</div>
	);
};

interface CarouselItemProps {
	content: string;
	index: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ content, index }) => (
	<div className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`}>
		<img src={content} className="d-block w-100" alt="..." />
	</div>
)

interface CarouselIndicatorProps {
	id: string;
	index: number;
}

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({ index, id }) => (
	<button
		type="button"
		data-bs-target={`#${id}`}
		data-bs-slide-to={index}
		className={`${index === 0 ? 'active' : ''} carousel-indicator`}
		aria-current={index === 0 ? "true" : 'false'}
		aria-label={`Slide ${index + 1}`}
	></button>
)

export default Carousel;
