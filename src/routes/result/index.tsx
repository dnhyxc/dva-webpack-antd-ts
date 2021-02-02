import React from 'react';
import { Result, Icon, Button } from 'antd-mobile';
import MNavBar from '@/components/NavBar';
import styles from './index.less';

interface IProps {
  history: any
}

const SubmitResult: React.FC<IProps> = ({ history }) => {
  const onRecordClick = () => {
    history.push('/app/records/lisi1111');
  };

  const viewRecord = () => {
    history.push('/app/records/lisi1111');
  }

  return (
    <div className={styles.content}>
      <MNavBar
        content='项目工时统计'
        onLeftClick={() => console.log('homeonLeftClick')}
        rightContent={[<span key={1} onClick={onRecordClick}>提交记录</span>]}
      />
      <div className={styles.subInfo}>
        <div className={styles.actionInfo}>
          <Icon
            type="check-circle"
            className={styles.icon}
            style={{ fill: '#1F90E6' }}
          />
          <span className={styles.textInfo}>提交成功</span>
          <Button type='primary' className={styles.back}>退出</Button>
          <Button className={styles.record} onClick={viewRecord}>查看提交记录</Button>
        </div>
        <div className={styles.footer}>
          新华智云
        </div>
      </div>
    </div>
  )
}

export default SubmitResult;
