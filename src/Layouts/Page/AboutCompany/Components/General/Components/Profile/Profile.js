import Avatar from "./Avatar";
import styled from "styled-components";

const Text = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #64748B;
`;

function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-4 d-inline-flex flex-column justify-content-center'>
                <div className='title mb-1'>SPBEAUTY</div>
                <Text>Салон красоты</Text>
                <Text>Санкт-Петербург, Невский пр-т. 28</Text>
            </div>                  
        </div>
    );
}

export default Profile;