import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import MainLayout from '../components/MainLayout';

const Header = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: cyan;
`;

class Comidas extends React.Component {

	render() {

		return (
			<MainLayout>
        <Header>asdas</Header>
				Hola soy la comidas
			</MainLayout>
		);
	}
}

export default Comidas;
