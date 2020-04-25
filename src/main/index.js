import React, { useState } from 'react';
import Chart from '../components/chart';
import ControlPanel from '../components/control-panel';
import { Content } from './styled';
import SwitchesGroup from '../components/switches-group';
import { setOptions, makeRequest } from '../utils';
import { POST, PATH_POINTS } from '../constants';

const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async values => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await makeRequest(PATH_POINTS, POST, values);
      const result = await new Promise(resolve => resolve(response.json()));
      const dataWithOptions = setOptions(result);
      setData(dataWithOptions);

    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleChange = (event) => {
    const toggledData = data.map(item => event.target.id === item.id ? { ...item, isActive: event.target.checked } : item);
    setData([ ...toggledData ]);
  };

  return (
    <Content>
      <ControlPanel onSubmit={onSubmit} />
      {Boolean(data.length) && !isLoading && !isError ? (
        <>
          <SwitchesGroup data={data} handleChange={handleChange} />
          <Chart data={data} />
        </>
      ) : null}
    </Content>
  );
}

export default Main;
