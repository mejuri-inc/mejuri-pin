import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import CardsFromService from './CardsFromService'

import mockResponse from './mockResponse.json';

describe('<CardsFromService>', () => {
  let setData;
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          json: () => {
            return mockResponse;
          },
        });
      });
    });

    setData = jest.fn();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardsFromService />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('fetches data and render elements accordingly', done => {
    const dataType = "rings";
    const wrapper = render(<CardsFromService dataType={dataType} setData={setData} />);

    process.nextTick(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/categories/rings');
      expect(setData).toHaveBeenCalledTimes(1);
  
      done();
    })
  });
});
