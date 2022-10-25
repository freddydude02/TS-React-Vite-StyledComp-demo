import styled from "styled-components";
import Button from "../../components/Button/Button";

const SNavBar = styled.div`
    height: 7vh;
    background-color: ${(props) => props.theme.primary.main};
    display: flex;
`;

const LogoContainer = styled.div`
    width: 20vw;
`;

const NavListDiv = styled.div`
    width: 80vw;
`;
const NavList = styled.ul`
    display: flex;
    // flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    // width: 100%;
    height 100%;
`;
const List = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100px;
`;

const NavBar = () => {
    return (
        <SNavBar>
            <LogoContainer>HI</LogoContainer>
            <NavListDiv>
                <NavList>
                    <List>
                        <Button reference="google.com" label="hi"></Button>
                    </List>
                    <List>
                        <Button reference="youtube.com" label="hi"></Button>
                    </List>
                </NavList>
            </NavListDiv>
        </SNavBar>
    );
};
export default NavBar;
