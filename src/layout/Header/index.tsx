import React, { useState, useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import { Tooltip, Modal, Alert } from 'antd';
import { CoffeeOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useGlobalContext } from '@/hooks/useGlobalContext';
import InteractionEyes from 'components/InteractionEyes';
import { IFRAME_ID, THAT_PAGE_URL } from 'constants/common';
import collectionCode from 'images/collectionCode.jpeg';
import English from 'images/English.svg';
import Chinese from 'images/Chinese.svg';
import styles from './index.module.scss';

const isDev =
  window.location.host.includes('localhost') ||
  window.location.host.includes('127.0.0.1');

const Header: React.FC = () => {
  const intl = useIntl();
  const { locale, setLocale, setHeadHeight } = useGlobalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const onchangeLanguage = () => {
    if (locale === 'zh-cn') {
      setLocale('en-us');
    } else {
      setLocale('zh-cn');
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect();
      setHeadHeight(height);
    }
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.left}>
        <div
          className={styles.title}
          onClick={() => {
            if (isDev) {
              const aIframe = document.getElementById(IFRAME_ID);
              if (aIframe) {
                (aIframe as HTMLIFrameElement).contentWindow?.postMessage(
                  'autoSavePassword',
                  THAT_PAGE_URL
                );
              }
              window.open(THAT_PAGE_URL, '_blank', 'top=200,left=100');
            } else {
              window.open('https://hepengwei.cn', '_blank', 'top=200,left=100');
            }
          }}
        >
          {intl.formatMessage({ id: 'common.logoName' })}
        </div>
        <InteractionEyes />
      </div>
      <Alert
        message={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            全新复合组件示例库已发布，赶紧
            <div
              style={{ color: '#4c78fc', cursor: 'pointer', marginLeft: '4px' }}
              onClick={() => {
                window.open(
                  'https://hepengwei.github.io/composite-component-library',
                  '_blank'
                );
              }}
            >
              前往体验
            </div>
          </div>
        }
        type='warning'
        showIcon
        closable
      />
      <div className={styles.right}>
        <Tooltip
          placement='bottomRight'
          title={intl.formatMessage({ id: 'common.reward' })}
        >
          <div
            className={styles.btn}
            onClick={() => {
              setOpen(true);
            }}
          >
            <CoffeeOutlined />
          </div>
        </Tooltip>
        <Tooltip
          placement='bottomRight'
          title={intl.formatMessage({ id: 'common.LanguageSwitch' })}
        >
          <div className={styles.btn} onClick={onchangeLanguage}>
            {locale === 'zh-cn' ? <Chinese /> : <English />}
          </div>
        </Tooltip>
      </div>
      <Modal
        wrapClassName={styles.rewardModal}
        title={intl.formatMessage({ id: 'common.reward' })}
        open={open}
        closeIcon={null}
        footer={null}
        maskClosable={false}
        width={320}
      >
        <div
          className={styles.closeBtn}
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseCircleOutlined />
        </div>
        <img src={collectionCode} alt='' />
        <p>{intl.formatMessage({ id: 'common.reward.tip' })}</p>
      </Modal>
    </div>
  );
};

export default Header;
