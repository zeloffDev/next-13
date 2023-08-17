"use client";
import { useEffect, useState } from "react";
import { getData } from "@/service/blogService";
import useSWR from "swr";
import style from "./blog.module.css";

const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => res.json());

export default function Page() {
  // const [data, setData] = useState<Array<typeDataBlog>>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data: typeDataBlog[] = await getData();
  //       setData(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) return <div>Lấy dữ liệu thất bại</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={style.row}>
      <div className={style.col}>
        <h1>My Blog</h1>
        <p>
          Chào mừng bạn đến với Blog cũa tôi ,nơi mà chả có cái đéo gì để xem cả
        </p>
        <button className={style.button}>Chi tiết</button>
      </div>

      <div className={style.col}>
        <div className={`${style.card} ${style.card1}`}>
          <h5 >title</h5>
          <p >description</p>
        </div>
        <div className={`${style.card} ${style.card2}`}>
          <h5 >title</h5>
          <p >description</p>
        </div>
        <div className={`${style.card} ${style.card3}`}>
          <h5 >title</h5>
          <p >description</p>
        </div>
        <div className={`${style.card} ${style.card}`}>
          <h5 >title</h5>
          <p >description</p>
        </div>
      </div>
    </div>
  );
}
