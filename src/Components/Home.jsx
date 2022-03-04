import React, { useEffect } from "react";
import ImgSlider from "./Home Components/ImgSlider";
import NewDisney from "./Home Components/NewDisney";
import Originals from "./Home Components/Originals";
import Recommend from "./Home Components/Recommend";
import Views from "./Home Components/Views";
import Trending from "./Home Components/Trending";
//styled components
import { Container } from "./Styles Compoennts/Home";
//redux
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../feature/movie/movieSlice";
import { selectUserName } from "../feature/user/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommend = [];
  let newDisney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recomended: recommend,
          newDisney: newDisney,
          originals: original,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Views />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}
