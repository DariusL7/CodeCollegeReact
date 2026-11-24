import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Container, Row, Col, Spinner } from "react-bootstrap";

function GitHub() {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setError] = useState(false);
	const [count, setCount] = useState(10);

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);
		getData();
	};

	useEffect(() => {}, [searchTerm]);

	const getData = async () => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 3000)); // temporary: 3-second delay
			const res = await axios.get(`https://api.github.com/search/users`, {
				params: { q: searchTerm, per_page: count },
			});
			setData(res.data.items);
			setError("");
		} catch (err) {
			setError("Could not get users from GitHub. ...");
		}
		setIsLoading(false);
	};

	const listUsers = data.map((user) => (
		<Container key={user.id} style={{ width: 500, marginTop: 5 }}>
			<Row>
				<a href={user.html_url}>
					<img
						width={64}
						height={64}
						className="mr-3"
						src={user.avatar_url}
						alt="Generic placeholder"
					/>
				</a>
				<Col>
					<h5>Login: {user.login}</h5>
					<p>Id: {user.id}</p>
				</Col>
			</Row>
		</Container>
	));

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
				<input
					type="number"
					min="1"
					max="100"
					value={count}
					onChange={(event) => setCount(event.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
			<h3>GitHub Users Results</h3>
			{isLoading && (
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			)}
			{listUsers}
		</div>
	);
}
export default GitHub;
