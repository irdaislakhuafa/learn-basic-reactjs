import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, NavLink, Table } from 'reactstrap';
import qs from 'querystring';

const apiUrl = 'http://irdaislakhuafa.id/learn-reactjs/simpleapi';
// const apiUrl = 'http://192.168.12.1:8081/learn-reactjs/simpleapi';

export default class MahasiswaListComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mahasiswa: [],
			message: 'Default message',
			color: '',
			display: 'none'
		};
	}

	getListMahasiswa = () => {
		console.log('Start GET data mahasiswa from API');
		axios.get(apiUrl + '/mahasiswa').then((response) => {
			console.log(response.status);
			console.log(response);
			this.setState({
				mahasiswa: response.data.values
			});
			console.log('End GET data mahasiswa from API');
		});
	};
	componentDidMount() {
		this.getListMahasiswa();
	}

	// delete method
	deleteMahasiswa = (idMahasiswa) => {
		// debuging
		console.log({ id: idMahasiswa });

		// send request to api
		axios
			.delete(apiUrl + '/mahasiswa', {
				data: {
					id: idMahasiswa
				}
			})
			.then((response) => {
				// response delete data
				console.log(response.status);
				console.log(response);
				// this.props.history.push('/mahasiswa'); // failed
				this.setState({
					display: 'block',
					color: 'success',
					message: 'Berhasil Menghapus Data!'
				});
				// after delete data, get all list data back
				this.getListMahasiswa();
			});
	};

	render() {
		return (
			<div>
				<Container>
					<h1 className="text-center mt-5 pt-4 display-4">List Mahasiswa</h1>
					<hr className="col-sm-8 offset-sm-2 border border-3 border-success" />
					<NavLink href="/mahasiswa/tambah">
						<Button color="success">Tambah Data</Button>
					</NavLink>
					{/* alert */}
					<Alert color={this.state.color} style={{ display: this.state.display }}>
						{this.state.message}
					</Alert>
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
									<td>
										{/* edit */}
										<Link
											className="m-2"
											to={{
												// destionantion for object
												pathname: '/mahasiswa/edit',

												// object
												state: {
													idMahasiswa: mahasiswa.idMahasiswa,
													nim: mahasiswa.nim,
													nama: mahasiswa.nama,
													jurusan: mahasiswa.jurusan
												}
											}}
										>
											<Button color="primary">Edit</Button>
										</Link>
										{/* hapus */}
										{/* <Link> */}
										{/* <a href="/mahasiswa"> */}
										<Button
											color="danger"
											onClick={() => this.deleteMahasiswa(mahasiswa.idMahasiswa)}
										>
											Hapus
										</Button>
										{/* </a> */}
										{/* </Link> */}
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Container>
			</div>
		);
	}
}
