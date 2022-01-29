import styled from 'styled-components';

const Detail= styled.div`
p{
    margin: auto;
    margin-left: 50px;
}
img{
    margin-left: 0%;
}
a{
    text-decoration: none;
 
}
`
export function Info({duration,meal,classs}){
return (
	<Detail>
		<p>
			{duration} | {meal} |{classs}
		</p>
		<img src='./flight.jpg' alt='detail'></img>
		<p>
			15kg | <a href='https://yatra.vercel.app/'>View Fare Rules</a>{" "}
		</p>
	</Detail>
);
}