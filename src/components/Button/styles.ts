import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  outline: none;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-500']};
  padding: 0.6rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  border: 0;
  border-radius: 8px;

  transition: all 0.1s ease-in;

  &:hover {
    background: ${(props) => `${props.theme['green-500']}70`};
    color: ${(props) => props.theme.white};
  }

  &:disabled {
    opacity: 0.7;
    color: ${(props) => props.theme['gray-100']};
  }
`
