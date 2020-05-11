import React, { useCallback, useContext } from 'react';
import { Tabs, Row, Col, Button } from 'antd';
import { Context } from '../EditorContext';

import oneColumn from '../json-tpl/one-column';
import twoColumn from '../json-tpl/two-column';
import threeColumn from '../json-tpl/three-column';
import fourColumn from '../json-tpl/four-column';

import { ADD_ONE_COLUMN, ADD_TWO_COLUMN, ADD_THREE_COLUMN, ADD_FOUR_COLUMN } from '../actions';

const { TabPane } = Tabs;

export default () => {

  const { dispatch } = useContext(Context);
  
  const addOneColunm = useCallback(() => {
    dispatch({ action: ADD_ONE_COLUMN, data: oneColumn });
  }, [dispatch]);

  const addTwoColunm = useCallback(() => {
    dispatch({ action: ADD_TWO_COLUMN, data: twoColumn });
  }, [dispatch]);

  const addThreeColunm = useCallback(() => {
    dispatch({ action: ADD_THREE_COLUMN, data: threeColumn });
  }, [dispatch]);

  const addFourColunm = useCallback(() => {
    dispatch({ action: ADD_FOUR_COLUMN, data: fourColumn });
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
        <Button onClick={addThreeColunm}>Three Colunm</Button>
        <Button onClick={addFourColunm}>Four Colunm</Button>
      </TabPane>
      <TabPane tab="Setting" key="3">
        Content of tab 3
      </TabPane>
    </Tabs>
  );
}
