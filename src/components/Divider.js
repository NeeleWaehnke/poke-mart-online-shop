import styled from 'styled-components';

export default function Divider() {
  return <StyledDivider></StyledDivider>;
}

const StyledDivider = styled.div`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid lightgray;
  margin-bottom: 5em;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;
