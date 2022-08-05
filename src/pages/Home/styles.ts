import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  button {
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
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
