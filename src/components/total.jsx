import styled from 'styled-components';

const Payment=styled.div`
div{
    display: flex;
    gap:5%
}
p{
margin-left: 2%;
}
.price{
    margin-left: 20%;
   
}
.price1{
    margin-left: 29%;
}
.price2{
    margin-left: 36%;
}
.price3{
    margin-left: 45%;
}
.price4{
    margin-left: 43%;
    
}
.amount{
    border: 1px solid rgba(80, 75, 75, 0.521);
    font-weight:bold;
 background-color: rgb(226, 226, 226);
}
span{
    color:#FFB300;
}

`

export function Total({base,fee,fare,total,cash}){

    return (
       <Payment>
            <div>
                    <p>Base Fare (1 traveler)</p>
                    <p className="price">{base}</p>
                    </div>
                    <div>
                    <p>Fees&subcharges</p>
                    <p className="price1" >{fee}</p></div>
                    <hr></hr>
                    <div>
                   <p> Payment Fare </p><p className="price2">
                   {fare} </p></div>
                    
                    <div className="amount">
                    <p>You Pay: </p><p className="price3">{total}</p></div>
                    <div>
                        <p>Earn <span>eCash</span></p>
                        <p className="price4">{cash}</p>
                    </div>
       </Payment>
    )
}