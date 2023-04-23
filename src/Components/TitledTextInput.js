import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    background-color: #F8FAFC;
    padding: 8px 16px !important;
    font-size: 15px;
    color: #94A3B8;
    &:hover {
        opacity: .8;
    }
    &:focus {
        color: #0F172A;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className="caption">{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;