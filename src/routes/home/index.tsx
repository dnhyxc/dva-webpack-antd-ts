import React, { useEffect } from 'react';
import { Button, List, InputItem, Toast, ActivityIndicator } from 'antd-mobile';
import { connect } from 'dva';
import { DispatchProp } from 'react-redux';
import { createForm } from 'rc-form';
import { homeActions } from '@/models/home';
import { GlobalState } from '@/models/types';
import { UserInfoResponse } from '@/services/home';
import MNavBar from '@/components/NavBar';
import styles from './index.less';

interface IProps extends DispatchProp {
  history: any;
  form: any;
  userInfo: UserInfoResponse;
  loading: boolean;
  selectedProject: any;
}

const Home: React.FC<IProps> = ({
  history, form, dispatch, loading, userInfo, selectedProject,
}) => {
  const { getFieldProps } = form;

  useEffect(() => {
    dispatch(homeActions.effects.getUserInfo());
  }, [dispatch]);

  const toTeam = () => {
    history.push('/app/team');
  };

  const toProject = () => {
    history.push('/app/project');
  };

  const onRecordClick = () => {
    history.push('/app/records/lisi');
  };

  const onSubmit = () => {
    form.validateFields({ force: true }, (error: any) => {
      if (!error) {
        const select: any[] = [];
        for (const key in form.getFieldsValue()) {
          select.push({ [key]: form.getFieldsValue()[key] });
        }
        console.log(select, '-------------------------------');
        // 发送请求，拿到结果之后跳转
        setTimeout(() => {
          history.push('/app/result');
        }, 2000);
      } else {
        Toast.info('还有项目未填写');
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      {
        loading ?
          <ActivityIndicator
            size="large"
            className={styles.loading}
            text="Loading..."
            animating={loading}
          /> :
          (
            <div className={styles.container}>
              <div className={styles.title}>
                <MNavBar
                  content='项目工时统计'
                  onLeftClick={() => console.log('homeonLeftClick')}
                  rightContent={[<span key={1} onClick={onRecordClick}>提交记录</span>]}
                />
                <div className={styles.info}>
                  <div className={styles.userInfo}>
                    <div>
                      {userInfo && <img className={styles.avatarUrl} src={userInfo.avatarUrl} alt="" />}
                    </div>
                    <div>
                      <span>{userInfo && userInfo.userName}</span>
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
                  {selectedProject.map((i: any) => {
                    return (
                      <div className={styles.inputList} key={i.id}>
                        <form>
                          <List>
                            <InputItem
                              className={styles.item}
                              // autoAdjustHeight
                              {...getFieldProps(`${i.desc}`, {
                                // initialValue: 'little ant',
                                rules: [
                                  { required: true, message: '还有项目未填写' },
                                ],
                              })}
                              type='money'
                              placeholder="天"
                            >
                              {i.desc}
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
            </div>
          )
      }
    </div >
  )
}

export default connect((state: GlobalState) => ({
  loading: state.loading.models.home,
  userInfo: state.home.userInfo,
  selectedProject: state.project.selectedProject,
}))(createForm()(Home));
