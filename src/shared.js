import React from "react";
import { css as emoCSS } from "emotion";
import styled from "@emotion/styled";

const css = (...args) => ({ className: emoCSS(...args) });

const onAttention = "&:hover, &:focus";
const Input = styled("input")({
  width: "100%",
  fontSize: 14,
  wordWrap: "break-word",
  lineHeight: "1em",
  outline: 0,
  whiteSpace: "normal",
  background: "#fff",
  display: "inline-block",
  padding: ".5em",
  color: "rgba(0,0,0,.87)",
  boxShadow: "none",
  border: "1px solid rgba(34,36,38,.15)",
  borderRadius: ".30em",
  transition: "box-shadow .1s ease,width .1s ease",
  [onAttention]: {
    boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)"
  }
});

const Item = styled("li")(
  {
    position: "relative",
    cursor: "pointer",
    display: "block",
    border: "none",
    height: "auto",
    textAlign: "left",
    lineHeight: "1.125rem",
    color: "rgba(0,0,0,.87)",
    fontSize: "1rem",
    transform: "none",
    fontWeight: "400",
    boxShadow: "none",
    padding: ".4rem .8rem",
    whiteSpace: "normal",
    wordWrap: "normal"
  },
  ({ isActive, isSelected }) => {
    const styles = [];
    if (isActive) {
      styles.push({
        color: "rgba(0,0,0,.95)",
        background: "rgba(0,0,0,.03)"
      });
    }
    if (isSelected) {
      styles.push({
        color: "rgba(0,0,0,.95)",
        fontWeight: "700"
      });
    }
    return styles;
  }
);

const Label = styled("label")({
  display: "block",
  fontWeight: "bold",
  marginBottom: 10
});

const BaseMenu = styled("ul")(
  {
    padding: 0,
    marginTop: 0,
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    maxHeight: "20rem",
    overflowY: "auto",
    overflowX: "hidden",
    outline: "0",
    transition: "opacity .1s ease",
    borderRadius: "0 0 .28571429rem .28571429rem",
    boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)",
    borderColor: "#96c8da",
    borderTopWidth: "0",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid"
  },
  ({ isOpen }) => ({
    border: isOpen ? null : "none"
  })
);

const Menu = React.forwardRef((props, ref) => (
  <BaseMenu ref={ref} {...props} />
));

export { Menu, Label, Item, Input, css };
