import styled from 'styled-components';
import { Button } from './Button';
import { Input } from './Input';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
`

const StyledTitle = styled.h3`
    margin: 0;
    font-weight: 500;
    align-self: flex-start;
    font-size: 1rem;
    color: var(--grey-text);
`

function EditName() {
    return (
            <StyledWrapper>
                <StyledTitle>Edit Name:</StyledTitle>
                <Input variant='user' width='100%'/>
                <Button text='Save' size='small'/>
            </StyledWrapper>
    );
}

export { EditName };