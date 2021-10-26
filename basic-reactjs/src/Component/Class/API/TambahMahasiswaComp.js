import axios from 'axios';
import { Component } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import './Style.css';

// const apiUrl = 'http://irdaislakhuafa.id/learn-reactjs/simpleapi';
const apiUrl = 'http://192.168.12.1:8081/learn-reactjs/simpleapi';

export default class TambahMahasiswaComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: '',
			nama: '',
			jurusan: '',
			status: ''
		};
	}

	ifChange = (paramater) => {
		this.setState({
			[paramater.target.name]: paramater.target.value
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
				this.setState({
					status: response.data.status
				});
			});
	};

	render() {
		return (
			<div>
				<Container>
					<h3 className="mt-5 pt-4 text-center">Tambah Data</h3>
					<hr className="w-50 mx-auto border border-2 border-success" />
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
											onChange={this.ifChange}
											required="required"
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
