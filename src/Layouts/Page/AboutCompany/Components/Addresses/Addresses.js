import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";

const Lining = styled.div`
    border: 1px solid rgba(100, 116, 139, 0.12);
    border-radius: 8px;
    padding: 24px;
`;

function Addresses() {
    return (
        <Lining className='d-inline-flex flex-column justify-content-between gap-2 col-6'>
            <div className='d-inline-flex flex-column gap-3'>
                <div className='title'>Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <div >
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </Lining>
    );
}

export default Addresses;