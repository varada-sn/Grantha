import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from './api';

export function useAuth() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials) => {
      console.log('Login Request:', credentials);
      const response = await API.post('/auth/login', credentials);
      console.log('Login Response:', response);

      const { data } = response;
      if (data?.token) {
        localStorage.setItem('jwt', data.token);
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'], exact: true }); 
    },
  });
}
