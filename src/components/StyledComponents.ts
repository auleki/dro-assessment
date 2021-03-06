import styled, { css } from "styled-components";
import { IModalProps, IRowProps } from "../utilities/types";
import { colors as c, fonts as f } from "./constants";

export const PageWrapper = styled.div(
  () => css`
    background: ${c.bg};
    height: 100vh;
    overflow-y: auto;
    font-family: ${f.main};
    top: 0;
    padding: 1rem 3rem 2rem 3rem;
    &::-webkit-scrollbar {
      width: .5rem;
      background: whitesmoke;
    }

    &::-webkit-scrollbar-align-tracks {
      background: orange;
    }

    &::-webkit-scrollbar-thumb {
      background: ${c.button};
      border-radius: 1.2rem;
      width: .5rem;
    }
  `
)

export const ModalContainer = styled.div(
  () => css`
    height: 100%;
    padding: 0 3rem;
  `
)

export const SCloseIcon = styled.div(
  (p: IModalProps) => css`
    position: fixed;
    display: ${!p.modalState ? 'none': 'block'};
  `
)

export const SModal = styled.div(
  (p: IModalProps) => css`
    position: fixed;
    left: 0;
    bottom: ${!p.modalState ? '-100%' : 0};
    opacity: ${!p.modalState ? 0 : 1};
    right: 0;
    overflow-y: auto;
    height: 100vh;
    background: ${c.subHeadline};
    z-index: 10;
    color: white;
    transition: bottom 150ms ease-in-out,
    opacity 150ms ease-in-out;

    &::-webkit-scrollbar {
      width: .5rem;
      background: whitesmoke;
    }

    &::-webkit-scrollbar-align-tracks {
      background: orange;
    }

    &::-webkit-scrollbar-thumb {
      background: ${c.button};
      border-radius: 1.2rem;
      width: .5rem;
    }
  `
)

export const SIconButton = styled.button(
  () => css`
    background: crimson;
    border-radius: 50%;
    border: 0;
    height: 2.5rem;
    border: 3px solid white;
    width: 2.5rem;
    color: white;
    position: fixed;
    right: 1.5rem;
    top: 1rem;
    cursor: pointer;
    transition: 300ms ease-in;
    
    &:hover {
      background: transparent;
    }

    &:active {
      transform: translateY(.5rem);
    }
  `
)

export const SSearchHeader = styled.section(
  () => css`
    display: flex;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .searchSelect {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  `
)

// use this to serve both the searchModal and home 
export const SJumbotron = styled.div(
  () => css`
      overflow: hidden;
      padding-bottom: 1rem;
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
    font-size: 2rem;
    `
)

export const SubTitle = styled.h2(
  () => css`
    font-size: 2.5rem;
  `
)

export const SLogo = styled.h1(
  () => css`
    font-family: ${f.handwriting};
    `
)

export const SNavbar = styled.nav(
  () => css`
    display: flex;
    padding: 1em;
    justify-content: space-between;
    `
)



export const SPagination = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;

    .pageNumber {
      display: inline-flex;
      color: white;
      padding: .5rem;
      background: crimson;
      box-shadow: 1px 2px 10px crimson;
    }
  `
)

export const SButton = styled.button(
  () => css`
    border: 0;
    padding: 1rem 1.5rem;
    outline: 0;
    font-family: ${f.main};
    background: ${c.button};
    color: whitesmoke;
    transition: 300ms ease-in;
    border-radius: .2rem;

    &:hover {
      background: #1a1a1a;
      cursor: pointer;
    }
  `
)

export const SSearchInput = styled.div(
  () => css`
    width: 100%;
    /* background: whitesmoke; */
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    /* border: 1px solid crimson; */
  `
)

export const SInput = styled.input(
  () => css`
    padding: 1rem;
    color: white;
    border: 0;
    background: ${c.headline};


    &:focus {
      border: 0;
      outline: 0;
    }
  `
)

export const SCards = styled.section(
  () => css`
  display: flex;
  flex-direction: column;
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `
)

export const SCard = styled.div(
  () => css`
    border: 2px dashed transparent;
    padding: 1rem 1.5rem;
    background: ${c.cardBg};
    display: flex;
    flex-direction: column;
    flex: 1 1 15rem;
    width: 15rem;
    border-radius: .3rem;
    transition: 200ms border ease-in,
    100ms transform ease-in;
    box-shadow: 4px 2px 16px #f582ae90;

    &:hover {
      /* border: 2px dashed transparent; */
      border: 2px dashed crimson;
      background: transparent;
      transform: translateY(.1rem);
      box-shadow: none;
    }

    .isbn, .released {
      h4 {
        border: 1px solid #33333340;
        background: ${c.subHeadline};
        color: white;
        border-radius: .2rem;
        padding: .5rem 0;
      }
    }

    .authors {
      h4 {
        text-align: right;
      }
    }

    .authors, .published {
      h4 {
        display: inline-flex;
        padding: 0 .5rem .1rem .5rem;
        border-bottom: crimson .15rem solid;
        margin: 0;
      }

      p,  ul {
        margin: .3rem 0 0;
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
        font-size: .8rem;
      }
    }
  `
)

// make this resuable by adding properties
export const Row = styled.div(
  (p: IRowProps) => css`
    display: flex;
    justify-content: ${p.alignment || " space-between"};
    padding: ${p.padding || 0};
  `
)

export const CardContainer = styled.section(
  () => css`
    h1 {
      text-align: center;
    }
  `
)