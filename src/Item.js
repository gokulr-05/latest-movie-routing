import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ id, img, title, summary, ratings, reactionArrHandler }) => {
  let color = ratings > 8 ? "green" : "red";
  let [showSummary, setShowSummary] = useState(false);
  let [likes, setLikes] = useState(0);
  let [dislikes, setDislikes] = useState(0);

  let showSummaryHandler = () => {
    setShowSummary(true);
  };

  let hideSummaryHandler = () => {
    setShowSummary(false);
  };
  let likeHandler = (e) => {
    e.preventDefault();
    setLikes((prev) => {
      return prev + 1;
    });
  };

  let dislikeHandler = (e) => {
    e.preventDefault();
    setDislikes((prev) => {
      return prev + 1;
    });
  };
  return (
    <div style={{ background: "black", width: "100%" }} className="my-5 py-5">
      <div className="" style={{ width: "100%", margin: "auto" }}>
        <img
          className=" "
          style={{ height: "100%", width: "100%" }}
          src={img}
          alt="vj"
        />
      </div>
      <h2 className="text-capitalize text-center">{title}</h2>
      <div
        className="my-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <p style={{ color: color }} className="text-capitalize text-center m-0">
          ⭐{ratings}
        </p>
        {!showSummary && (
          <button
            style={{ height: "30px", width: "30px", padding: "0", margin: "0" }}
            className="btn btn-primary "
            onClick={() => {
              showSummaryHandler();
            }}
          >
            <i className="fa-solid fa-chevron-down p-0 m-0"></i>
          </button>
        )}
        {showSummary && (
          <button
            style={{ height: "30px", width: "30px", padding: "0", margin: "0" }}
            className="btn btn-primary"
            onClick={() => {
              hideSummaryHandler();
            }}
          >
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        )}

        <Link
          onClick={() => {
            reactionArrHandler([
              { name: "likes", count: likes },
              { name: "dislikes", count: dislikes },
            ]);
          }}
          to={`/${id}/movieDetails`}
        >
          <i className="fa-solid fa-circle-info fs-4"></i>
        </Link>
      </div>
      {showSummary && (
        <div className="w-100">
          <p
            style={{
              width: "50%",
              margin: "auto",
              textJustify: "inter-word",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            {summary}
          </p>
        </div>
      )}

      <div
        style={{ margin: "20px" }}
        className="text-center d-flex align-items-center justify-content-center gap-5"
      >
        <div className="d-flex align-items-center justify-content-center gap-3">
          <button className="btn btn-success" onClick={likeHandler}>
            👍
          </button>
          <p className="m-0">{likes}</p>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <button className="btn btn-danger" onClick={dislikeHandler}>
            👎
          </button>
          <p className="m-0">{dislikes}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
