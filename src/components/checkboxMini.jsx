import styled from 'styled-components'

export default function CheckboxMini({uniqueId, handler, value, ...props}) {
    return (
        <Wrapper>
            <input onChange={(e) => handler(e.target.checked)} checked={value} className={"hover-pointer"} id={uniqueId} type="checkbox"/>
            <label htmlFor={uniqueId}></label>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  position: relative;

  &:hover {
    cursor: pointer !important;
  }

  & > input {
    position: absolute;
    opacity: 0;
  }

  & > input + label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    border: 1px solid #9CA6B7;
    border-radius: 2px;
  }

  & > input:checked + label {
    background: #007EF3;
    border-color: #007EF3;
    color: #fff;

    &:before {
      content: "✓";
      position: absolute;
      font-family: 'font-icon' !important;
    }
  }
`