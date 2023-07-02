import styled from 'styled-components';

export default function Sidebar({open, setOpen, childs, name}) {
  return (
    open &&
    <Container>
        <Transparent onClick={() => {setOpen(false)}}></Transparent>
        <RightContainer>
            <Header>
                <div>{name}</div>
                <div style={{cursor: 'pointer'}} onClick={() => {setOpen(false)}}>X</div>
            </Header>
            <Body>
                <div>dasd</div>
            </Body>
        </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
`;

const Transparent = styled.div`
  position: absolute;
  top: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 40%;
  z-index: 10;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 600px;
  height: 100%;
  z-index: 20;
  & > div:not(:last-child){
    border-bottom: 2px solid #e5eaf3;
  }
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  padding: 16px;
`;