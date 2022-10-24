import Props from "../../Props";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 150px;
    height: 150px;
    color: ${(props) => props.theme.secondary.light};
`;

const Button = (prop: Props) => {
    return <StyledButton>{prop.label}</StyledButton>;
};
export default Button;
