/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {Link} from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div css={styles}>
      {data.map((card, index) => (
        <div key={index} className="card">
          <h1>{card.title}</h1>
          <p>{card.info}</p>
          <Link to={`/cards/${card.title}`}>View More</Link>
        </div>
      ))}
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .card {
    width: 100%;
    max-width: 350px;
    border: 1px solid green;
  }
`;

export default Card;
