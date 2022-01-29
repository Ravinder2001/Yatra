import styled from 'styled-components';


const Heading= styled.div`
border: 1px solid black;
margin: auto;
display: flex;
width: 75%;
h3{
    margin:2%
    
}
a{
    float: right;
    text-decoration: none;
}
`
export function Title(){

    return(
<Heading>
<h3>Review Your Bookings</h3>
                <a href="#">Change Flight</a>
                
</Heading>
    )
}