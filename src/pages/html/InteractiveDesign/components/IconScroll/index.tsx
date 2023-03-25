import React from "react";
import {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  IeOutlined,
  ChromeOutlined,
  GithubOutlined,
  AliwangwangOutlined,
  DingdingOutlined,
  WeiboSquareOutlined,
  WeiboCircleOutlined,
  TaobaoCircleOutlined,
  Html5Outlined,
  WeiboOutlined,
  TwitterOutlined,
  WechatOutlined,
  YoutubeOutlined,
  AlipayCircleOutlined,
  TaobaoOutlined,
  SkypeOutlined,
  QqOutlined,
  GitlabOutlined,
  MediumOutlined,
  LinkedinOutlined,
  GooglePlusOutlined,
  DropboxOutlined,
  FacebookOutlined,
  CodepenOutlined,
  CodeSandboxOutlined,
  AmazonOutlined,
  GoogleOutlined,
  CodepenCircleOutlined,
  AlipayOutlined,
  AntDesignOutlined,
  AntCloudOutlined,
  AliyunOutlined,
  ZhihuOutlined,
  SlackOutlined,
  SlackSquareOutlined,
  BehanceOutlined,
  BehanceSquareOutlined,
  DribbbleOutlined,
} from "@ant-design/icons";
import styles from "./index.module.scss";

const list = new Array(30).fill(0);

const IconScroll = () => {
  const renderIconList = () => (
    <div>
      <AndroidOutlined />
      <WeiboCircleOutlined />
      <AppleOutlined />
      <WindowsOutlined />
      <IeOutlined />
      <ChromeOutlined />
      <GithubOutlined />
      <AliwangwangOutlined />
      <DingdingOutlined />
      <WeiboSquareOutlined />
      <TaobaoCircleOutlined />
      <Html5Outlined />
      <WeiboOutlined />
      <TwitterOutlined />
      <WechatOutlined />
      <YoutubeOutlined />
      <AlipayCircleOutlined />
      <TaobaoOutlined />
      <SkypeOutlined />
      <QqOutlined />
      <GitlabOutlined />
      <MediumOutlined />
      <LinkedinOutlined />
      <GooglePlusOutlined />
      <DropboxOutlined />
      <FacebookOutlined />
      <CodepenOutlined />
      <CodeSandboxOutlined />
      <AmazonOutlined />
      <GoogleOutlined />
      <CodepenCircleOutlined />
      <AlipayOutlined />
      <AntDesignOutlined />
      <AntCloudOutlined />
      <AliyunOutlined />
      <ZhihuOutlined />
      <SlackOutlined />
      <SlackSquareOutlined />
      <BehanceOutlined />
      <BehanceSquareOutlined />
      <DribbbleOutlined />
    </div>
  );

  return (
    <div className={styles.container}>
      {list.map((item: number, index: number) => (
        <div className={styles.row} key={index}>
          {renderIconList()}
          {renderIconList()}
        </div>
      ))}
    </div>
  );
};

export default IconScroll;
