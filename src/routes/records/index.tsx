import React from 'react';
import { List } from 'antd-mobile';
import MNavBar from '@/components/NavBar';
import styles from './index.less';

const Item = List.Item;

interface IProps {
  location: any;
  history: any;
  match: any;
}

const Records: React.FC<IProps> = ({ match, history }) => {

  const userName = decodeURIComponent(match.params.name);
  console.log(userName);

  const goBack = () => {
    history.push('/app/home');
  };

  return (
    <div className={styles.content}>
      <div className={styles.navbar}>
        <MNavBar
          content='项目工时统计'
          onLeftClick={goBack}
        />
      </div>
      <div className={styles.list}>
        {
          ['2021 年 07 月', '2021 年 06 月', '2021 年 05 月', '2021 年 04 月', '2021 年 03 月', '2021 年 02 月', '2021 年 01 月'].map(i => {
            return (
              <List key={i} >
                <Item arrow="horizontal" multipleLine onClick={() => { }} className={styles.item}>
                  {i}
                </Item>
              </List>
            )
          })
        }
      </div>
    </div>
  )
}

export default Records;
