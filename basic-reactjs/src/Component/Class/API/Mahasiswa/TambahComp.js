import axios from 'axios';
import { Component } from 'react';
import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

// const apiUrl = 'http://irdaislakhuafa.id/learn-reactjs/simpleapi';
const apiUrl = 'http://192.168.12.1:8081/learn-reactjs/simpleapi';

export default class TambahComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: '',
			nama: '',
			jurusan: '',
			message: '',
			display: 'none',
			color: ''
		};
	}

	ifChange = (input) => {
		this.setState({
			[input.target.name]: input.target.value
		});
	};

	sendDataMahasiswa = () => {
		axios
			.post(apiUrl + '/mahasiswa', {
				nim: this.state.nim,
				nama: this.state.nama,
				jurusan: this.state.jurusan
			})
			.then((response) => {
				console.log('MAHASISWA -> TAMBAH DATA');
				console.log(response);
				this.setState({
					message: response.data.message,
					display: 'block',
					color: response.data.color
				});
			});
	};

	render() {
		return (
			<div>
				<Container className="mt-5 pt-5">
					{/* title form */}
					<h2 className=" text-center">Tambah Data</h2>
					<hr className="w-50 mx-auto border border-2 border-success" />

					{/* alert */}
					<div className="col-sm-8 offset-sm-2 p-2">
						<Alert color="success" style={{ display: this.state.display }}>
							{this.state.message}
						</Alert>
					</div>
					<Form>
						<Row>
							<Col className="col-sm-8 offset-sm-2">
								<div className="mx-sm-auto border p-5 py-3 mb-5 border-success border-3 rounded-3">
									{/* NIM */}
									<FormGroup className="mb-sm-3">
										<Label for="nim">NIM</Label>
										<Input
											id="nim"
											type="text"
											name="nim"
											placeholder="Masukan NIM"
											value={this.state.nim}
											required="required"
											onChange={this.ifChange}
										/>
									</FormGroup>

									{/* Nama */}
									<FormGroup className="mb-sm-3">
										<Label for="nama">Nama</Label>
										<Input
											id="nama"
											type="text"
											name="nama"
											placeholder="Masukan Nama Mahasiswa"
											value={this.state.nama}
											required="required"
											onChange={this.ifChange}
										/>
									</FormGroup>

									{/* Jurusan */}
									<FormGroup className="mb-sm-3">
										<Label for="jurusan">Jurusan</Label>
										<Input
											id="jurusan"
											type="text"
											name="jurusan"
											placeholder="Masukan Jurusan"
											value={this.state.jurusan}
											required="required"
											onChange={this.ifChange}
										/>
									</FormGroup>

									{/* button */}
									<FormGroup>
										{/* tambah */}
										<Button color="success m-3" type="button" onClick={this.sendDataMahasiswa}>
											Tambah
										</Button>

										{/* kembali */}
										<a href="/mahasiswa">
											<Button color="danger" type="button" onClick={this.sendDataMahasiswa}>
												Kembali
											</Button>
										</a>
									</FormGroup>
								</div>
							</Col>
						</Row>
					</Form>
				</Container>
			</div>
		);
	}
}
