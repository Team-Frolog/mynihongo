import { useMutation } from '@tanstack/react-query';
import { updateUserVisited } from '@/services/user';

export const useVisitedDate = () => {
  const { mutate: updateVisited } = useMutation({
    mutationFn: updateUserVisited,
  });

  return { updateVisited };
};
