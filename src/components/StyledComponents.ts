import styled, { css } from "styled-components";
import { colors as c } from "./constants";

export const PageWrapper = styled.div(
  () => css`
    background: ${c.bg};
    height: 100vh;
    overflow-y: scroll;
  `
)