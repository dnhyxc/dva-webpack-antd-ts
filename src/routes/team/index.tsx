import React, { useState } from 'react';
import { SegmentedControl, WingBlank, List } from 'antd-mobile';
import { RouteComponentProps } from 'dva/router';
import MNavBar from '../../components/NavBar';
import styles from './index.less';

const Item = List.Item;

interface IProps extends RouteComponentProps {
  history: any;
}

const Demo: React.FC<IProps> = ({ history }) => {
  const [isSubmit, setIsSubmit] = useState<boolean>(true);

  const goBack = () => {
    history.push('/app/home');
  };

  const onChange = () => {
    setIsSubmit(!isSubmit);
  };

  const toRecords = () => {
    history.push(`/app/records/${'张三'}`);
  }

  // const onValueChange = () => {
  //   console.log('onValueChange');
  // };

  const v1 = '已提交33'
  const v2 = '未提交8'

  return (
    <div className={styles.wrapper}>
      <MNavBar
        content='项目工时统计'
        onLeftClick={goBack}
      />
      <div className={styles.content}>
        <WingBlank size="lg" className={styles.wingBlank}>
          <SegmentedControl
            className={styles.segmentedControl}
            values={[v1, v2]}
            onChange={onChange}
          // onValueChange={onValueChange}
          />
        </WingBlank>
        <div className={styles.listContent}>
          <div className={styles.list}>
            {
              isSubmit ? ['成员0', '成员1', '成员2', '成员3', '成员4', '成员5', '成员6', '成员7', '成员8', '成员9'].map(i => {
                return (
                  <List key={i}>
                    <Item arrow="horizontal" multipleLine onClick={toRecords} className={styles.item}>
                      {i}
                    </Item>
                  </List>
                )
              }) : ['111', '222', '333', '444', '555'].map(i => {
                return (
                  <List key={i}>
                    <Item arrow="horizontal" multipleLine onClick={toRecords} className={styles.item}>
                      {i}
                    </Item>
                  </List>
                )
              })
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default Demo;
