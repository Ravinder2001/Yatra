import styled from 'styled-components';

const Div = styled.div`
width:62%;
background:white;
border: 1px solid rgb(161, 161, 161);
border-left:none;
`

function DebitCard(){
    return (
			<Div>
				<img
					alt=''
					src='https://blogger.googleusercontent.com/img/a/AVvXsEieS0T_92BFsB1EYg-yfy3waSK5GNlQJTVKdC2YYogFjGIoS-_yl68a-m8kDSMI-CEN8aR-fJmazYOwXcMK-ht4-OqTWnHXL9jOyx5uJFKY5tpDT1T_E-nHGOg0oRVmDaryyUHRjlh8Nty92bHqo7Z_PlcFwcARoEjtfcxO7ihhoqDaw549pdrjtcCFOQ=w665-h463'></img>
			</Div>
		);
}
export {DebitCard}