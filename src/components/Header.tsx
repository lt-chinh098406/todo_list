import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background-color: black;
  min-height: var(--header);
  width: 100%;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <h3 className="tw-text-white">Header</h3>
    </HeaderWrapper>
  )
}
