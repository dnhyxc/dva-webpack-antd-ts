import React from 'react';
import { Icon, Button } from 'antd-mobile';
import MNavBar from '@/components/NavBar';
import styles from './index.less';

interface IProps {
  history: any;
}

const SubmitResult: React.FC<IProps> = ({ history }) => {
  const onRecordClick = () => {
    history.push('/app/records/lisi1111');
  };

  const viewRecord = () => {
    history.push('/app/records/lisi1111');
  };

  const goHome = () => {
    history.push('/app/home');
  };

  return (
    <div className={styles.content}>
      <MNavBar
        content="项目工时统计"
        onLeftClick={goHome}
        rightContent={[<span key={1} onClick={onRecordClick}>提交记录</span>]}
      />
      <div className={styles.subInfo}>
        <div className={styles.actionInfo}>
          <Icon type="check-circle" className={styles.icon} />
          <span className={styles.textInfo}>提交成功</span>
          <Button type="primary" className={styles.back}>退出</Button>
          <Button className={styles.record} onClick={viewRecord}>查看提交记录</Button>
        </div>
        <div className={styles.footer}>
          新华智云
        </div>
      </div>
    </div>
  );
};

export default SubmitResult;
