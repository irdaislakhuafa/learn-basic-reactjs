import { JumbotronComp } from './JumbotronComp';

export const HomeComp = () => {
	return (
		<div>
			<JumbotronComp goto="/about" btnText="Go to About" title="Home Page" />
		</div>
	);
};
