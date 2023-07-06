import styled from "styled-components";
import CheckboxMini from "./checkboxMini";
export default function Table({ titles, children, setTitle, checkbox=false, CheckedList=null, checkedAction=null, tableData=null }) {

    return (
        <>
            <Container>
                <TableContainer>
                    <Header>
                        <Row>
                            {
                                checkbox && (
                                    <Title>
                                        <CheckboxMini handler={(status) => tableData.map(a => checkedAction(status, a))} value={tableData.length <= CheckedList.length} uniqueId="all-checked"/>
                                    </Title>
                                )
                            }
                            {titles.map((title, index) => {
                                return (
                                    <Title key={index} sort={title.sort} onClick={() => {setTitle(title.name)}}>
                                            {title.name}
                                            {title.sort ? (
                                                <i className="dms-icon-arrow-down-short-wide" style={{color: "#13192140"}}></i>
                                            ) : null}
                                        </Title>
                                    
                                );
                            })}
                        </Row>
                    </Header>
                    <Body>{children}</Body>
                </TableContainer>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    & > span {
        font-size: 11px;
        padding: 12px 0 0 12px;
    }
    overflow-x: auto;
    padding: 48px;
`;

const TableContainer = styled.table`
    table-layout: auto;
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    height: auto;
    font-size: 13px;
    border-collapse: collapse;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.02);
`;

const Header = styled.thead``;

const Title = styled.th`
    cursor: ${props => props.sort ? "pointer" : "normal"};
    font-weight: 800;
    padding: 12px 15px;
    text-align: left;
    vertical-align: middle;
    & > i {
        width: 10px;
        height: 7px;
        vertical-align: middle;
        padding: 0px 6px;
    }
`;

const Body = styled.tbody`
    overflow-y: auto;
`;

const Row = styled.tr`
    border-bottom: 2px solid #e5eaf3;
    border-top: 2px solid #e5eaf3;
    background-color: #f7f7fa;
`;
