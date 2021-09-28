import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "./styled/Hamburger";
import { useQuery } from "@apollo/client";
import {DaasQuery } from "./App";






function Banner({ dark }) {
    const {data} = useQuery(DaasQuery);
  const [click, setClick] = useState();

  const banner = data.page.banner;

  return (
    <MyBanner>
      <video
        src={dark ? `${banner.darkVideo.mediaItemUrl}` : `${banner.lightVideo.mediaItemUrl}`}
        autoPlay
        loop
        muted
      />
      <div className="overlay"></div>
      <Hamburger click={click} setClick={setClick} />
      <BannerInner>
        <Title>{banner.title}</Title>
        <BannerP>
          {banner.bannerParagraph}
        </BannerP>
      </BannerInner>
      <BannerLogo
        src={
          click && !dark ? `${banner.darkLogo.sourceUrl}` : `${banner.lightLogo.sourceUrl}`
        }
      />
    </MyBanner>
  );
}

const MyBanner = styled.section`
  height: 660px;
  overflow: hidden;
  width: 100%;
  background-size: cover;
  background-position-x: right;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media (min-width: 1200px) {
    height: 100vh;
  }
  .overlay {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.58),
      rgba(0, 0, 0, 0.6)
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
  }
  video {
    height: 660px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: scale(4);
    @media (min-width: 768px) {
      transform: scale(2);
    }
    @media (min-width: 1200px) {
      height: 100vh;
    }
  }
`;

const BannerInner = styled.div`
  width: 85%;
  position: relative;
  z-index: 10;
  @media (min-width: 992px) {
    padding-top: 150px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 45px;
  color: white;

  @media (min-width: 992px) {
    font-size: 72px;
  }
`;

const BannerP = styled.p`
  color: white !important;
  font-size: 18px;

  line-height: 30px;
  @media (min-width: 992px) {
    width: 50%;
    font-size: 22px;
  }
`;

const BannerLogo = styled.img`
  width: 180px;
  position: absolute;
  bottom: 0;
  transition: 0.7s;
  right: 8%;
  z-index: 15;
  @media (min-width: 992px) {
    width: 200px;
  }
`;

export default Banner;
