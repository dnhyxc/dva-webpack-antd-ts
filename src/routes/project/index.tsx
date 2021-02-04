import React, { useEffect, useState } from 'react';
import { SearchBar, List, Icon } from 'antd-mobile';
import { connect } from 'dva';
import { DispatchProp } from 'react-redux';
import { GlobalState } from '@/models/types';
import { projectActions } from '@/models/project';
import styles from './index.less';

const Item = List.Item;

const data = [
  {
    id: 0,
    desc: '智能媒资',
  },
  {
    id: 1,
    desc: '剪贝',
  },
  {
    id: 2,
    desc: '交互大屏',
  },
  {
    id: 3,
    desc: '一键打卡',
  },
  {
    id: 4,
    desc: '智能模板',
  }
]

interface IProps extends DispatchProp {
  history: any;
}

const Project: React.FC<IProps> = ({ history, dispatch }) => {
  const [value, setValue] = useState<string>('');
  const [dataList, setDataList] = useState<any>();

  useEffect(() => {
    dispatch(projectActions.reducers.updateSelectedProject({ selectedProject: [] }));
    const result = data.map(item => {
      const newObj = Object.assign({}, item);
      Object.defineProperty(newObj, 'checked', { value: false, writable: true })
      return newObj;
    })
    setDataList(result);
  }, []);

  const onSelect = (id?: number, desc?: string, checked?: boolean) => {
    const result = dataList.map((item: any) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    })
    setDataList(result);
  }

  const onOk = (val: any) => {
    // console.log('完成了', val)
    const checkedResult = dataList.filter((item: any) => item.checked);
    dispatch(projectActions.reducers.updateSelectedProject({ selectedProject: checkedResult }));
    // console.log(checkedResult)
    // 发送请求，成功后跳转到首页
    setTimeout(() => {
      history.push('/app/home');
    }, 2000);
  }

  const onChange = (value: string) => {
    setValue(value);
  }

  // const onSelect = (value: any) => {
  //   selected.push(value);
  //   setSelected([...selected]);
  // }

  return (
    <div className={styles.content}>
      <div className={styles.search}>
        <SearchBar
          className={styles.serachBar}
          value={value}
          cancelText='完成'
          placeholder='请输入搜索内容'
          onSubmit={value => console.log(value, 'onSubmit')}
          onCancel={onOk as any}
          showCancelButton
          onChange={onChange}
        />
      </div>
      <div className={styles.list}>
        {dataList && dataList.map((item: any) => {
          return (
            <List key={item.id}>
              <Item
                className={styles.item}
                onClick={() => onSelect(item.id, item.desc, item.checked)}
                extra={item.checked ? <Icon type='check' /> : null}
              >
                <div className={item.checked ? styles.listChecked : undefined}>{item.desc}</div>
              </Item>
            </List>
          )
        })}
      </div>
    </div>
  )
}

export default connect((state: GlobalState) => ({
  loading: state.loading.models.home,
}))(Project);
