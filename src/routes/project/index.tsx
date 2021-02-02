import React, { useState } from 'react';
import { SearchBar, List, Icon } from 'antd-mobile';
import styles from './index.less';

const Item = List.Item;

interface IProps {
  history: any;
}

const Project: React.FC<IProps> = ({ history }) => {
  const [value, setValue] = useState<string>('');
  const [selected, setSelected] = useState<string>();

  const toHome = () => {
    history.push('/app/home');
  }

  const onChange = (value: string) => {
    setValue(value);
  }

  const onSelect = (value: any) => {
    console.log(value);
    setSelected(value);
  }

  return (
    <div className={styles.content}>
      <div className={styles.search}>
        <SearchBar
          className={styles.serachBar}
          value={value}
          cancelText='完成'
          placeholder='请输入搜索内容'
          onSubmit={value => console.log(value, 'onSubmit')}
          onCancel={toHome}
          showCancelButton
          onChange={onChange}
        />
      </div>
      <div className={styles.list}>
        {['智能媒资', '智能媒资2', '项目3', '项目11', '项目4', '项目5', '项目6', '项目7', '项目8', '项目9', '项目10'].map(i => {
          return (
            <List key={i}>
              <Item
                className={styles.item}
                extra={i === selected ? <Icon type="check" size='xs' /> : ''}
                onClick={() => onSelect(i)}>
                <span className={styles.textInfo}>{i}</span>
              </Item>
            </List>
          )
        })}
      </div>
    </div>
  )
}

export default Project;
