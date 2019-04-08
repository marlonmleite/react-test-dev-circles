import styled, { css } from 'styled-components'

const getPrimaryStyle = (props) => props.primary && css`
  background: #61DAFB;
  color: #282C34;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #61DAFB;
  color: #61DAFB;
  font-weight: bold;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${getPrimaryStyle}

  :hover {
    cursor: pointer;
  }
`;

export default Button;

/*<style>
  .my-button {
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
  }

  .my-button-primary {
    background: palevioletred;
    color: white;
  }
</style>

<button class="my-button my-button-primary" />*/