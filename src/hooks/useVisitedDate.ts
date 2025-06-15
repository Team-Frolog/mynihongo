import { useMutation } from '@tanstack/react-query';
import { updateUserVisitedDate } from '@/services/user';

export const useVisitedDate = () => {
  const { mutate: updateVisitedDate } = useMutation({
    mutationFn: updateUserVisitedDate,
  });

  return { updateVisitedDate };
};
