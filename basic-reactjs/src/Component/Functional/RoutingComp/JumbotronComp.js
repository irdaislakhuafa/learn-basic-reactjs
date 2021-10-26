import { Jumbotron, Button, Container, CardImg } from 'reactstrap';

export const JumbotronComp = (props) => {
	return (
		<div>
			<Container>
				<CardImg className="img-responsive w-50 mx-auto d-block" src={props.imgSrc} />
				<Jumbotron>
					<h1 className="display-3 text-center mb-5 mt-5 pt-4">{props.title}</h1>
					<p className="lead">
						This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to
						featured content or information.
					</p>
					<hr className="my-2" />
					<p>
						It uses utility classes for typography and spacing to space content out within the larger
						container.
					</p>
					<p className="lead">
						<Button color="primary" href={props.goto}>
							{props.btnText}
						</Button>
					</p>
				</Jumbotron>
			</Container>
		</div>
	);
};
