import styled from 'styled-components'

const SideBarWrapper = styled.div`
  background-color: #1e0059;
  min-width: var(--sidebar);
`

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <h3>Side Bar</h3>
    </SideBarWrapper>
  )
}
