/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useParams } from "react-router-dom";

const FullCard = ({ data }) => {
  const { title } = useParams();
  return (
    <div>
      {data
        .filter((card) => card.title === title)
        .map((card, index) => (
          <div key={index}>
            <h1>{card.title}</h1>
            <p>{card.info}</p>
          </div>
        ))}
    </div>
  );
};

export default FullCard;
