import { Component } from 'react';
import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import qs from 'querystring';
import axios from 'axios';

const apiUrl = 'http://irdaislakhuafa.id/learn-reactjs/simpleapi';
// const apiUrl = 'http://192.168.12.1:8081/learn-reactjs/simpleapi';

export default class EditComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// data to api
			idMahasiswa: this.props.location.state.idMahasiswa,
			nim: this.props.location.state.nim,
			nama: this.props.location.state.nama,
			jurusan: this.props.location.state.jurusan,

			// data for local
			message: '',
			color: '',
			display: 'none'
		};
	}

	handleInputData = (input) => {
		this.setState({
			[input.target.name]: input.target.value
		});
	};

	updateDataMahasiswa = (idMahasiswaForUpdate) => {
		// // assign object to variable
		// let dataUpdate = qs.stringify({
		// 	idMahasiswa: idMahasiswaForUpdate,
		// 	nim: this.state.nim,
		// 	nama: this.state.nama,
		// 	jurusan: this.state.jurusan
		// });
		// console.log(dataUpdate);

		// // parse dataUpdate to Object (default Strings)
		// let newDataUpdate = JSON.parse(dataUpdate);

		// send object to api
		axios
			.put(apiUrl + '/mahasiswa', {
				// object ready to send
				idMahasiswa: idMahasiswaForUpdate,
				nim: this.state.nim,
				nama: this.state.nama,
				jurusan: this.state.jurusan
			})
			.then((response) => {
				console.log('MAHASISWA -> UPDATE DATA');
				console.log(response);
				this.setState({
					display: 'block',
					color: response.data.color,
					message: 'Berhasil Mengubah Data!'
				});
			});
	};

	render() {
		return (
			<div>
				<Container className="mt-5 pt-5">
					{/* {console.log(this.state.idMahasiswa)}
					{console.log(this.state.nim)}
					{console.log(this.state.nama)}
					{console.log(this.state.jurusan)} */}
					{/* title form */}
					<h2 className="text-center">Update Data</h2>
					<hr className="w-50 mx-auto border border-2 border-primary" />

					{/* alert message */}
					<div className="col-sm-8 offset-sm-2 p-2">
						<Alert color={this.state.color} style={{ display: this.state.display }}>
							{this.state.message}
						</Alert>
					</div>

					{/* start form */}
					<Form>
						<Row>
							<Col className="col-sm-8 offset-sm-2 ">
								<div className="mx-sm-auto border p-5 py-3 mb-5 border-info border-3 rounded-3">
									{/* nim */}
									<FormGroup className="mb-sm-3">
										<Label for="nim">NIM</Label>
										<Input
											id="nim"
											name="nim"
											type="text"
											required="required"
											placeholder="Masukan NIM baru"
											value={this.state.nim}
											onChange={this.handleInputData}
										/>
									</FormGroup>

									{/* nama */}
									<FormGroup className="mb-sm-3">
										<Label for="nama">Nama</Label>
										<Input
											id="nama"
											name="nama"
											type="text"
											required="required"
											placeholder="Masukan Nama baru"
											value={this.state.nama}
											onChange={this.handleInputData}
										/>
									</FormGroup>

									{/* jurusan */}
									<FormGroup className="mb-sm-3">
										<Label for="jurusan">Jurusan</Label>
										<Input
											id="jurusan"
											name="jurusan"
											type="text"
											placeholder="Masukan Jurusan baru"
											value={this.state.jurusan}
											onChange={this.handleInputData}
										/>
									</FormGroup>

									{/* buttons */}
									<FormGroup className="mb-sm-3">
										<Button
											color="primary"
											className="m-3 ms-0"
											type="button"
											onClick={() => this.updateDataMahasiswa(this.state.idMahasiswa)}
										>
											Update
										</Button>
										<a href="/mahasiswa">
											<Button color="danger" type="button">
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
