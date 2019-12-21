import React, {useCallback, useContext} from 'react';
import { Tabs, Row, Col, Button } from 'antd';
import oneColumn from '../json-tpl/one-column';
import twoColumn from '../json-tpl/two-column';
import { Context } from '../EditorContext';
import { ADD_ONE_COLUMN, ADD_TWO_COLUMN } from '../actions';

const { TabPane } = Tabs;

export default () => {

  const { dispatch } = useContext(Context);
  
  const addOneColunm = useCallback(() => {
    dispatch({ action: ADD_ONE_COLUMN, data: oneColumn });
  }, [dispatch]);

  const addTwoColunm = useCallback(() => {
    dispatch({ action: ADD_TWO_COLUMN, data: twoColumn });
  }, [dispatch]);

  return (
    <Tabs>
      <TabPane tab="Content" key="1">
        <Row>
          <Col span={8}>
            <Button>
              Text
            </Button>
          </Col>
          <Col span={8}>
            <Button>
              Image
            </Button>
          </Col>
          <Col span={8}>
            <Button>
              Button
            </Button>
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="Row" key="2">
        <Button onClick={addOneColunm}>One Colunm</Button>
        <Button onClick={addTwoColunm}>Two Colunm</Button>
      </TabPane>
      <TabPane tab="Setting" key="3">
        Content of tab 3
      </TabPane>
    </Tabs>
  );
}
