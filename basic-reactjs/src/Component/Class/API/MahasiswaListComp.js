import axios from 'axios';
import { Component } from 'react';
import { Container, Row, Table } from 'reactstrap';

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
					<h1 className="text-center mt-5">List Mahasiswa</h1>
					<Table className="table table-striped">
						{/* header */}
						<thead>
							<tr>
								<th>Nama</th>
								<th>NIM</th>
								<th>Jurusan</th>
								<th>Aksi</th>
							</tr>
						</thead>

						{/* body */}
						<tbody>
							{this.state.mahasiswa.map((mahasiswa) => {
								<tr key={mahasiswa.id}>
									<td>{mahasiswa.nama}</td>
								</tr>;
							})}
						</tbody>
					</Table>
				</Container>
			</div>
		);
	}
}
