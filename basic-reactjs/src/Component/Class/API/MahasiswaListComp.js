import axios from 'axios';
import { Component } from 'react';
import { Container, Row } from 'reactstrap';

const apiUrl = 'http://irdaislakhuafa.id/learn-reactjs/simpleapi';

export default class MahasiswaListComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mahasiswa: []
		};
	}

	componentDidMount() {
		console.log('Start GET data mahasiswa from API');
		axios.get(apiUrl + '/mahasiswa').then((response) => {
			this.setState({
				mahasiswa: response.data.values
			});
			console.log('End GET data mahasiswa from API');
		});
	}
	render() {
		return (
			<div>
				<Container>
					<Row>
						<h1 className="text-center">List Mahasiswa</h1>
					</Row>
				</Container>
			</div>
		);
	}
}
