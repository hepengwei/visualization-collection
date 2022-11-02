import React, { useRef, useState } from "react";
import GridContent from "components/GridContent";
import book1 from "images/html/book1.jpg";
import book2 from "images/html/book2.jpg";
import book3 from "images/html/book3.jpg";
import book4 from "images/html/book4.jpg";
import book5 from "images/html/book5.jpg";
import book6 from "images/html/book6.jpg";
import styles from "./index.module.less";

const { GridBox } = GridContent;

interface Book {
  name: string;
  price: number;
  imgUrl: string;
}

type Shopping = Book & {
  num: number;
};

const bookList: Book[] = [
  { name: "一个星期学会吉他弹唱", price: 68, imgUrl: book1 },
  { name: "柳公权楷书教程入门", price: 45, imgUrl: book2 },
  { name: "世说新语", price: 52, imgUrl: book3 },
  { name: "名人传", price: 124, imgUrl: book4 },
  { name: "骆驼祥子", price: 168, imgUrl: book5 },
  { name: "阅微堂笔记", price: 56, imgUrl: book6 },
];

const DragShopping = () => {
  const [shoppingList, setShoppingList] = useState<Shopping[]>([]);
  const [totalMoney, setTotalMoney] = useState<number>(0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <GridContent
          differentScreenCols={[6, 6, 6, 3, 3]}
          rowSpace={0}
          colSpace={0}
        >
          {bookList.map((book: Book) => {
            const { name, price, imgUrl } = book;
            return (
              <GridBox key={imgUrl}>
                <div className={styles.bookBox}>
                  <img src={imgUrl} draggable="false" />
                  <p>{name}</p>
                  <p>{`￥${price}`}</p>
                </div>
              </GridBox>
            );
          })}
        </GridContent>

        <div className={styles.shoppingBox}>
          <div className={styles.tableHead}>
            <div className={styles.tableCell}>书名</div>
            <div className={styles.tableCell}>价格</div>
            <div className={styles.tableCell}>数量</div>
          </div>
          {shoppingList.map((shopping: Shopping) => {
            const { num, name, price } = shopping;
            return (
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>{num}</div>
                <div className={styles.tableCell}>{name}</div>
                <div className={styles.tableCell}>{`￥${price}`}</div>
              </div>
            );
          })}
          <span className={styles.total}>
            <span className={styles.totalMoney}>
              总计：￥<span>{totalMoney}</span>
            </span>
          </span>
          <span className={styles.tip}>拖拽到此区域进行购买</span>
        </div>
      </div>
    </div>
  );
};

export default DragShopping;
