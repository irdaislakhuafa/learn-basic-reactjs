import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export const CardComp = (props) => {
	return (
		<div>
			<Card>
				<CardImg top height="385px" width="auto" src={props.imgSrc} alt="Card image cap" className="px-1" />
				<CardBody>
					<CardTitle tag="h2">{props.title}</CardTitle>
					<CardSubtitle tag="h6" className="my-2 mb-3 text-muted">
						{props.date}
					</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button color="success">Details</Button>
				</CardBody>
			</Card>
		</div>
	);
};
