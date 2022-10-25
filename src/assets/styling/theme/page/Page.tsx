import styled from "styled-components";
const Page = styled.div`
    display: flex;
    height: 93vh;
    flex-direction: column;
    background-color: ${(props) => props.theme.primary.light};
`;

export default Page;
