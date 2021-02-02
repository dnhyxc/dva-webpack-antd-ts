import React, { useCallback, useEffect } from 'react';
import { Button, List, InputItem, Toast } from 'antd-mobile';
import { connect } from 'dva';
import { DispatchProp } from 'react-redux';
import { createForm } from 'rc-form';
import { GlobalState } from '@/models/types';
import MNavBar from '../../components/NavBar';
import styles from './index.less';

interface IProps extends DispatchProp {
  history: any;
  form: any;
}

const Home: React.FC<IProps> = ({ history, form, dispatch }) => {
  const { getFieldProps } = form;

  const getUserInfo = async () => {
    dispatch({
      type: 'home/getUserInfo',
      payload: {},
      onResult: (error: Error, result: any) => {
        if (error) {
          Toast.info(error);
        } else {
          console.log(result);
        }
      },
    });
  }

  useEffect(() => {
    getUserInfo();
  }, [dispatch]);

  const toTeam = useCallback(() => {
    history.push('/app/team');
  }, []);

  const toProject = useCallback(() => {
    history.push('/app/project');
  }, []);

  const onRecordClick = useCallback(() => {
    history.push('/app/records/lisi');
  }, []);

  const onSubmit = useCallback(() => {
    form.validateFields({ force: true }, (error: any) => {
      if (!error) {
        console.log(form.getFieldsValue());
      } else {
        console.log('Validation failed');
      }
    });
    history.push('/app/result');
  }, []);

  // const validateAccount = (rule: any, value: string | any[], callback: any) => {
  //   if (value && value.length > 20) {
  //     callback();
  //   } else {
  //     // callback(new Error('At least four characters for account'));
  //   }
  // }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <MNavBar
          content='项目工时统计'
          onLeftClick={() => console.log('homeonLeftClick')}
          rightContent={[<span key={1} onClick={onRecordClick}>提交记录</span>]}
        />
        <div className={styles.info}>
          <div className={styles.userInfo}>
            <div>头像</div>
            <div>
              <span>姓名</span>
              <span className={styles.date}>2021年01月</span>
            </div>
          </div>
          <div className={styles.action}>
            <Button className={styles.btn} onClick={toTeam}>团队</Button>
            <Button className={styles.btn} onClick={toProject}>选择项目</Button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.list}>
          {['智能媒资', '智能模板', 'boss', 'bastv', 'vlog', 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
            return (
              <div className={styles.inputList} key={i}>
                <form>
                  <List>
                    <InputItem
                      className={styles.item}
                      {...getFieldProps('account', {
                        // initialValue: 'little ant',
                        rules: [
                          { required: true, message: 'Please input account' },
                          { validator: 2 },
                        ],
                      })}
                      type='money'
                      placeholder="天"
                    >
                      {i}
                    </InputItem>
                  </List>
                </form>
              </div>
            )
          })}
        </div>
        <div className={styles.footer}>
          <Button type="primary" className={styles.submit} onClick={onSubmit}>提交</Button>
          <span>请按照实际工作天数填写（计算请假、调休和节假日加班）</span>
        </div>
      </div>
    </div >
  )
}

export default connect((state: GlobalState) => ({
  loading: state.loading.models.home,
}))(createForm()(Home));