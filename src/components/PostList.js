import React, { useEffect } from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { baslangicNotlari } from "../actions";
import { verileriSil } from "../actions";

const PostList = () => {
  const dispatch = useDispatch();

  const notlar = useSelector((store) => store.notlar);

  useEffect(() => {
    dispatch(baslangicNotlari());
  }, []);

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
      <button
        onClick={() => dispatch(verileriSil())}
        className="text-center px-12 py-4 bg-red-500 transition-colors hover:bg-red-800 block mx-auto my-12 rounded-md"
        type="button"
      >
        Tüm geçmiş verilerini siliniz.
      </button>
    </div>
  );
};

export default PostList;
