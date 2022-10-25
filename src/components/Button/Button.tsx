import Props from "../../Props";
import styled from "styled-components";

const StyledButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${(props) => props.theme.common.light};
`;

const Button = (prop: Props) => {
    return <StyledButton href={prop.reference}>{prop.label}</StyledButton>;
};
export default Button;
