import styled, { css } from "styled-components";
import { colors as c, fonts as f } from "./constants";

export const PageWrapper = styled.div(
  () => css`
    background: ${c.bg};
    height: 100vh;
    overflow-y: scroll;
    padding: 0 3rem;
  `
)

export const CJumbotron = styled.div(
  () => css`
      overflow: hidden;
      height: 50vh;
      .headerText {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-bottom: 2rem;
        flex-direction: column;
        .title {
          justify-content: center;
          align-items: center;
          gap: .5rem;
          display: flex;
        }
        h2 {
          font-weight: 400;
        }

        .searchTransition {
          padding: 1em;
          background: transparent;
          border: none;
          border-bottom: 2px solid crimson;
          width: 40%;
          outline: 0;
          &:focus {
            outline: 0;
          }
        }
      }
    `
)

export const Title = styled.h1(
  () => css`
    font-size: 1rem;
    `
)

export const SLogo = styled.h1(
  () => css`
    font-family: ${f.logo};
    `
)

export const SNavbar = styled.nav(
  () => css`
    display: flex;
    padding: 1em;
    justify-content: space-between;
    `
)

export const SCards = styled.section(
  () => css`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 3fr);
  
  `
)

export const SCard = styled.div(
  () => css`
    border: 2px dashed crimson;
    padding: 0 1rem;
    transition: 200ms border ease-in,
    100ms transform ease-in;

    &:hover {
      border: 2px solid crimson;
      transform: translateY(.1rem);
    }

    .isbn, .released {
      h4 {
        border: 1px solid #33333340;
        border-radius: .1rem;
      }
    }

    .authorsList {
      list-style: none;
    }

    .isbn, .released, .authors, .published {
      text-align: center;
      padding: 0;
      margin: 0;
      
      h4 {
        font-weight: 400;
      }
    }
  `
)

// make this resuable by adding properties
export const Row = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
  `
)

export const CardContainer = styled.section(
  () => css`
    h1 {
      text-align: center;
    }
  `
)