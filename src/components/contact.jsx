import styled from 'styled-components';

const Passenger= styled.div`
background-color:white;
.box1{
    display: flex;
}
`
export function Contact(){

    return (
        <Passenger>
                <div className="box1">
                <h4>Contact Detils</h4>
                <input type="email" placeholder="Email ID" value=""/>
                <input type="text" placeholder=" mobile Number"/>
                </div>
                <p>Your booking details will be sent to this email address and mobile number.</p>
               <div>
                <input type="checkbox"/>
                <p>Also send my booking details on WhatsApp </p>
                </div>
                <hr></hr>
                <h3>Traveller Information</h3>
                <p> <span>Important Note:</span> Please ensure that the names of the passengers on the travel documents is the same as on their government issued identity proof.</p>
                <div>
                <h4>Adult1</h4>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                </div>
        </Passenger>
    )

}