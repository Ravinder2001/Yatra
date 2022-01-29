import styled from 'styled-components';

const Timings= styled.div``

export function Flight({name,time,date,airport}){

    return(
<div>
    <Timings>
        <p>
            {name}
            <br>
            </br>
            <strong>{time}</strong>
            <br>
            </br>
            <span>
                {date}
            </span>
            <br>
            </br>
       {airport}
            
        </p>
        <p></p>
    </Timings>
</div>
    )

}
