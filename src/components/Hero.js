/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "./Container";
import Card from "./Card"

const Hero = ({data}) => {
  return (
    <section className="hero">
      <Container>
        <Card data={data} />
      </Container>
    </section>
  );
};

export default Hero;
