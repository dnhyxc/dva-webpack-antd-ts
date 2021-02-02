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
    history.push('/app/team');
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
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map(i => {
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
