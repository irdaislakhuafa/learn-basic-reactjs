import { Col, Container, Row } from 'reactstrap';
import { CardComp } from './CardComp';
import { JumbotronComp } from './JumbotronComp';

export const AboutComp = () => {
	return (
		<div>
			<JumbotronComp goto="/" btnText="Go to Home" title="About Us" />
			<Container>
				<Row>
					<Col>
						<CardComp
							id="1"
							title="Belajar Java Spring"
							date="01 Januari 2021"
							imgSrc="https://pbs.twimg.com/profile_images/1235870003292856320/iRG4_ojf_400x400.png"
						/>
					</Col>
					<Col>
						<CardComp
							id="2"
							title="Belajar React JS"
							date="02 Januari 2021"
							imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGKhbmUs9DK-F-aPp50s6HN_95yvGxdfWss-fA3fzwu48R8_z94ShYXfbuKP4rpNrgT4&usqp=CAU"
						/>
					</Col>
					<Col>
						<CardComp
							id="3"
							title="Belajar Node JS"
							date="03 Januari 2021"
							imgSrc="https://data.appus.software/resources/img/site_section_images/d8dbae64f62cffa8b9747090cae3c49b"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
