import React from 'react';
import Container from './Container';
import Divider from './Divider';
import Info from './Info';

const InfoBox = ({ geoInfo }) => {
    
    return (
        <div className='info-box'>
            <Container>
                <Info
                    label='IP ADDRESS'
                    value={geoInfo.ip}
                />
            </Container>
            <Divider />
            <Container>
                <Info
                    label='LOCATION'
                    value={geoInfo.location}
                />
            </Container>
            <Divider />
            <Container>
                <Info
                    label='TIMEZONE'
                    value={geoInfo.timezone}
                />
            </Container>
            <Divider />
            <Container>
                <Info
                    label='ISP'
                    value={geoInfo.isp}
                />
            </Container>
        </div>
    )
}

export default InfoBox;