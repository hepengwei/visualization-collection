import React, { useEffect, useState } from "react";
import StackedRowBar from "components/Echarts/StackedRowBar";
import styles from "../index.module.scss";

const Bar3 = () => {
  const [echartData, setEchartData] = useState<Record<string, any>>({});

  const getData = () => {
    const data = {
      "first party": {
        Live: ["绝地求生", "无限法则", "重生边缘"],
        Development: [
          "新天龙部",
          "魔域",
          "战神觉醒",
          "热血合击",
          "神戒",
          "原神",
          "神武4",
        ],
        Legacy: ["贪玩蓝月", "赤月传说2", "超激斗梦境", "仙侠世界2"],
        "Pre-planned": ["裁决战歌", "绿茵信仰"],
        Canceled: ["流放之路", "战", "大皇帝传奇世界", "生死狙击2"],
        Finished: ["王者荣耀", "英雄联盟"],
      },
      "second party": {
        Live: ["我的世界"],
        Development: [
          "最终幻想14",
          "守望先锋",
          "DOTA2",
          "激战2",
          "魔域永恒",
          "武动苍穹",
          "鬼谷无双新版",
          "永劫无间",
        ],
        Legacy: ["古剑奇谭网络版", "火影忍者", "斗罗大陆"],
        "Pre-planned": ["剑灵", "热血传奇神武4", "暗黑大天使"],
        Canceled: ["地下城与勇士", "剑网3重制版", "全面战争竞技场", "艾兰岛"],
        Finished: ["天涯明月刀", "热血合击"],
      },
      "third party": {
        Live: [
          "英雄联盟",
          "穿越火线",
          "天涯明月刀",
          "生死狙击",
          "龙武",
          "战意",
        ],
        Development: [
          "逆水寒33333333333333333333333333333333333333333333333",
          "魔力宝贝",
          "奇迹MU",
          "莽荒纪2",
          "热血国2",
          "领地人生",
        ],
        Legacy: ["魔兽世界", "诛仙3", "传奇霸业", "泰亚史诗"],
        "Pre-planned": [
          "龙武2",
          "梦幻西游",
          "剑网3",
          "蓝月传奇",
          "神座",
          "热血战歌",
          "龙神契约",
          "堡垒之夜",
          "天龙部归来",
          "穿越火线HD",
        ],
        Canceled: ["炉石传说", "攻城掠地", "万智牌竞技场"],
        Finished: ["传奇霸业", "龙武"],
      },
    };
    setEchartData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.echart}>
      <StackedRowBar data={{ dataSource: echartData }} />
    </div>
  );
};

export default Bar3;
