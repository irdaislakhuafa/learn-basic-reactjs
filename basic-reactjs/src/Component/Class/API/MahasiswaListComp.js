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
					<h1 className="text-center mt-5 pt-4">List Mahasiswa</h1>
					<Table className="table table-striped" bordered>
						{/* header */}
						<thead>
							<tr>
								<th>NIM</th>
								<th>Nama</th>
								<th>Jurusan</th>
								<th>Aksi</th>
							</tr>
						</thead>

						{/* body */}
						<tbody>
							{this.state.mahasiswa.map((mahasiswa) => (
								<tr key={mahasiswa.idMahasiswa}>
									<td>{mahasiswa.nim}</td>
									<td>{mahasiswa.nama}</td>
									<td>{mahasiswa.jurusan}</td>
									<td>Edit | Hapus</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Container>
			</div>
		);
	}
}
