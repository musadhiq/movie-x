import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <Container>
        <Content>
          <Typography variant="subtitle2">
            Design & Developed by
            <Link href="https://github.com/musadhiq" target="_blank">
              Musadhiq 💕
            </Link>
          </Typography>
        </Content>
      </Container>
    </>
  );
}
const Container = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #161b22;
  padding: 10px;
`;
const Content = styled.div`
  margin: 0 auto;
  width: 250px;
  color: #60e9cd;
`;
const Link = styled.a`
  color: #60e9cd;
  text-decoration: none;
  margin-left: 10px;
`;
export default Footer;
