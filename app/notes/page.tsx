 import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { noteService } from '@/lib/api'; 
import NotesClient from './Notes.client'; 
import css from './Notes.client.module.css';


export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
      queryKey: ['notes'],
      queryFn : () =>
          noteService({
        page: 1,
        search: undefined,
        perPage: 12,
      }),
  });

  return (
    <div className={ css.app }>
       <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
   </div>
  );
}
