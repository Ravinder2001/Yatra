import styled from 'styled-components';

const Div = styled.div`
width:62%;
background:white;
border: 1px solid rgb(161, 161, 161);
border-left:none;
`

function CreditCard(){
    return (
			<Div>
				<img
					alt='ravi'
					src='https://blogger.googleusercontent.com/img/a/AVvXsEj_pb97un6HxsXkRZshSEETsQ00-Xcrn0ShH2eEp45NwkU3gxISXdnTm1h2YvLL_HVvOujnEv_C3f8t0gVeMTR4l50j4XA3FgqSUtPFXxVljvBf5qKPOOw0icqC1v8zC2QgLDv64fTvsEpSHoivsdtiqdqubSVBQrJSKKlVKsbPXwEDGXA6-gSsn7lmlg=w631-h402'></img>
			</Div>
		);
}
export {CreditCard}