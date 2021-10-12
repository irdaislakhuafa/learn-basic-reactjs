import { JumbotronComp } from './JumbotronComp';

export const DetailComp = (props) => {
	return (
		<div>
			<JumbotronComp
				imgSrc={props.location.state.imgSrc}
				title={props.location.state.title}
				btnText="Learn more.."
			/>
		</div>
	);
};
