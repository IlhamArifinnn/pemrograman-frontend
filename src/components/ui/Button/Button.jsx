import styled, { css } from "styled-components";
import theme from "../../../utils/constants/theme";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #10caa7;
  color: #fff;
  cursor: pointer;

  /* props variant */
  background-color: ${({ variant }) => {
    return theme.colors[variant] || theme.colors["secondary"];
  }};

  /* props full */
  ${({ full }) =>
    full &&
    css`
      dispaly: block;
      width: 100%;
    `}

  /* props size*/
  font-size: ${({ size }) => theme.size[size || "md"].fontSize};
  padding: ${({ size }) => theme.size[size || "md"].padding};
`;

export default Button;
