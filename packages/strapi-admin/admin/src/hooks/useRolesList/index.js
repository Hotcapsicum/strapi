import { useEffect, useReducer } from 'react';
import { useQuery } from 'react-query';
import { request } from 'strapi-helper-plugin';
import { get } from 'lodash';
import init from './init';
import reducer, { initialState } from './reducer';

const fetchRoles = async () => {
  const { data } = await request('/admin/roles', { method: 'GET' });

  return data;
};

const useRolesList = (shouldFetchData = true) => {
  console.log(shouldFetchData);
  const { data, isLoading, error } = useQuery('roleList', fetchRoles, { enabled: shouldFetchData });

  // const [{ roles, isLoading }, dispatch] = useReducer(reducer, initialState, () =>
  //   init(initialState, shouldFetchData)
  // );

  // useEffect(() => {
  //   if (shouldFetchData) {
  //     fetchRolesList();
  //   }
  // }, [shouldFetchData]);

  // const fetchRolesList = async () => {
  //   try {
  //     dispatch({
  //       type: 'GET_DATA',
  //     });

  //     const { data } = await request('/admin/roles', { method: 'GET' });

  //     dispatch({
  //       type: 'GET_DATA_SUCCEEDED',
  //       data,
  //     });
  //   } catch (err) {
  //     const message = get(err, ['response', 'payload', 'message'], 'An error occured');

  //     dispatch({
  //       type: 'GET_DATA_ERROR',
  //     });

  //     if (message !== 'Forbidden') {
  //       strapi.notification.toggle({
  //         type: 'warning',
  //         message,
  //       });
  //     }
  //   }
  // };

  return { roles: data || [], isLoading, getData: () => {} };
};

export default useRolesList;
