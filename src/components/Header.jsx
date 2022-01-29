import styled from "styled-components";

export function Header() {
  return (
    <Head id="head">
      <ImageHead
        src="https://www.yatra.com/fresco/resources/beetle/images/newIcons/yatra_logo.svg"
        alt="YatraLogo"
      />
    </Head>
  );
}

const Head = styled.div`
  background: white;

  width: 99%;
  height: 40px;
  padding: 0.5%;
  box-shadow: 1px 1px 2px silver;
`;

const ImageHead = styled.img`
  margin-left: 10%;
  height: 96%;
`;
