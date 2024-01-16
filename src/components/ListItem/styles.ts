import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div<ContainerProps>`
  margin-top: 25px;
  display: flex;
  background-color: #bb93c6;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  font-size: 20px;

  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label {
    text-decoration: ${(props) => (props.done ? 'line-through' : 'initial')};
  }
`;
