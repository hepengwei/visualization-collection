// @ts-nocheck
import React, { useEffect, useRef } from "react";
import G6, { IGroup, IShape, ModelConfig } from "@antv/g6";
import styles from "../index.module.scss";

const padding = 6;
const fontSize = 6;
const lineHeight = 9;

// 注册自定义的每个块的图形
G6.registerNode(
  "custom-node",
  {
    drawShape: (cfg: ModelConfig | undefined, group: IGroup | undefined) => {
      if (cfg && group) {
        let bgColor = "#fff";
        let titleColor = "#0d1b3f";
        let codeColor = "#6e768c";
        switch (cfg.level) {
          case 1:
            bgColor = "#3b4fcc";
            titleColor = "#fff";
            codeColor = "#fff";
            break;
          case 2:
            bgColor = "#86B6F6";
            break;
        }
        // 添加最外层的矩形框
        const box: IShape = group.addShape("rect", {
          attrs: {
            fill: bgColor,
            stroke: bgColor,
            radius: 6,
          },
          name: "box-shape",
        });
        // 添加标题(每行20个字符)
        const text = `【第${cfg.level}层】${cfg.title}`.replace(
          /(.{20})/g,
          "$1\n"
        );
        const title = group.addShape("text", {
          attrs: {
            text,
            fontSize,
            lineHeight,
            fontWeight: 500,
            textAlign: "left",
            textBaseline: "middle",
            fill: titleColor,
          },
          capture: false, // 不接受鼠标事件
          name: "title-shape",
        });
        const titleBox = title.getBBox();
        // 根据标题显示的宽高调整标题的位置
        title.attr({
          x: -titleBox.width / 2,
          y: 0,
        });
        const rows = Math.floor((titleBox.height - fontSize) / lineHeight) + 1; // 标题行数
        let y = titleBox.height;
        if (rows <= 1) {
          y += 4;
        } else {
          y -= Math.ceil((rows - 2) * 3.5);
        }
        // 添加编号
        const code = group.addShape("text", {
          attrs: {
            text: cfg.code,
            x: -titleBox.width / 2,
            y,
            fontSize,
            lineHeight,
            textAlign: "left",
            textBaseline: "middle",
            fill: codeColor,
          },
          capture: false, // 不接受鼠标事件
          name: "code-shape",
        });
        // 根据显示的标题和编号的宽高来最终确定最外面矩形框的宽高和位置
        const codeBox = code.getBBox();
        box.attr({
          x: -titleBox.width / 2 - padding,
          y: -titleBox.height / 2 - padding,
          width: titleBox.width + padding * 2,
          height: Math.ceil(
            titleBox.height + codeBox.height + padding * 2 + rows * 1.5
          ),
        });
        // 非第1层且有字节的要增加展开收起按钮
        if (cfg.level > 1 && cfg.children && cfg.children.length > 0) {
          // 添加展开收起按钮的边框
          group.addShape("circle", {
            attrs: {
              x: 0,
              y: y + 10,
              r: 6,
              fill: "#fff",
              stroke: "#cfd1d9",
              lineWidth: 0.5,
              cursor: "pointer",
            },
            name: "collapse-icon",
          });
          if (group.cfg?.item) {
            const { collapsed } = group.cfg.item.getModel();
            // 添加展开收起按钮在默认展开时显示的图标
            group.addShape("marker", {
              attrs: {
                x: 0,
                y: y + 10,
                r: 2, // 必须要有，否则拖动时会有残影
                fill: "#fff",
                stroke: "#0d1b3f",
                cursor: "pointer",
                symbol: (x: number, y: number, r: number) => {
                  return [
                    ["M", x - r, y + r / 2],
                    ["L", x, y - r / 2],
                    ["L", x + r, y + r / 2],
                  ];
                },
              },
              visible: !collapsed,
              capture: false, // 不接受鼠标事件
              name: "collapse-marker",
            });
            // 添加展开收起按钮在收起时显示的数字
            group.addShape("text", {
              attrs: {
                text: cfg.children.length,
                x: 0,
                y: y + 10.5,
                fontSize,
                lineHeight,
                textAlign: "center",
                textBaseline: "middle",
                fill: "#0d1b3f",
                cursor: "pointer",
              },
              visible: !!collapsed,
              capture: false, // 不接受鼠标事件
              name: "num-text",
            });
          }
        }
        return box;
      }
      return null;
    },
    setState: (name, value, item) => {
      // 如果是展开收起状态发生改变，则分别将展开收起的图标和文字进行切换显示
      if (name === "collapsed") {
        const group = item?.getContainer();
        if (group) {
          const expandMarker = group.find(
            (e) => e.get("name") === "collapse-marker"
          );
          expandMarker?.set("visible", !value);
          const numText = group.find((e) => e.get("name") === "num-text");
          numText?.set("visible", value);
        }
      }
    },
  },
  "single-node"
);

const Tree1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<G6.TreeGraph | null>(null);

  const getData = () => {
    const data = {
      id: "ID1",
      level: 1,
      title: "这是标题这是标题这是标题这是标题这是标题",
      code: "1004353453453425",
      children: [
        {
          id: "ID11",
          level: 2,
          title: "这是标题这是标题这是标题这是标题这是标题",
          code: "10056575674576576",
          children: [
            {
              id: "ID111",
              level: 3,
              title: "这是标题这是标题这是标题这是标题这是标题",
              code: "100665756756786657",
              children: [
                {
                  id: "ID1111",
                  level: 4,
                  title: "这是标题这是标题这是标题这是标题这是标题",
                  code: "100665756756786657",
                },
                {
                  id: "ID1112",
                  level: 4,
                  title: "这是标题这是标题这是标题这是标题这是标题",
                  code: "100665756756786657",
                },
              ],
            },
            {
              id: "ID112",
              level: 3,
              title:
                "这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题",
              code: "100665756756786657",
              children: [
                {
                  id: "ID1121",
                  level: 4,
                  title: "这是标题这是标题这是标题这是标题这是标题",
                  code: "100665756756786657",
                },
                {
                  id: "ID1122",
                  level: 4,
                  title: "这是标题这是标题这是标题这是标题这是标题",
                  code: "100665756756786657",
                },
                {
                  id: "ID1123",
                  level: 4,
                  title: "这是标题这是标题这是标题这是标题这是标题",
                  code: "100665756756786657",
                },
              ],
            },
            {
              id: "ID113",
              level: 3,
              title: "这是标题这是标题这是标题这是标题这是标题",
              code: "100665756756786657",
              children: [
                {
                  id: "ID1131",
                  level: 4,
                  title: "这是标题这是标题这是标题这是标题这是标题",
                  code: "100665756756786657",
                },
              ],
            },
          ],
        },
      ],
    };

    if (graphRef.current) {
      // G6.Util.traverseTree(data, (item)=>{
      //   item.id = item.name;
      // });
      graphRef.current.data(data);
      // 监听每个node块的点击事件
      graphRef.current.off("node:click").on("node:click", (e: any) => {
        // 判断如果点击的是展开收起按钮，则做相应的操作
        if (e.target.get("name") === "collapse-icon") {
          e.item.getModel().collapsed = !e.item.getModel().collapsed;
          graphRef.current.setItemState(
            e.item,
            "collapsed",
            e.item.getModel().collapsed
          );
          graphRef.current.layout();
        }
      });
      graphRef.current.render();
    }
  };

  const createGraph = () => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth || 500;
      const height = containerRef.current.clientHeight || 300;
      if (!graphRef.current) {
        graphRef.current = new G6.TreeGraph({
          container: containerRef.current,
          width,
          height,
          fitView: true, // 开启自适应画布大小
          fitViewPadding: 80, // 自适应时四周的边距
          modes: {
            default: ["drag-canvas", "zoom-canvas", "drag-node"],
          },
          defaultNode: {
            type: "custom-node",
          },
          // 连线相关配置
          defaultEdge: {
            type: "cubic-vertical",
            style: {
              stroke: "#cfd1d9",
              lineWidth: 1,
              endArrow: {
                path: G6.Arrow.circle(2, 0),
                d: 0,
                fill: "#cfd1d9",
              },
            },
          },
          layout: {
            type: "compactBox",
            direction: "TB",
            getId: (d: any) => {
              return d.id;
            },
            getVGap: () => 22,
            getHGap: () => 60,
          },
        });
      }
    }
  };

  useEffect(() => {
    createGraph();
    getData();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (
        !graphRef.current ||
        graphRef.current.get("destroyed") ||
        !containerRef.current
      )
        return;
      graphRef.current.changeSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      graphRef.current.fitView();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <div className={styles.echart} ref={containerRef}></div>;
};

export default Tree1;
