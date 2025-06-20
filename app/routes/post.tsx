import { useFetcher, useNavigate } from 'react-router';
import type { Route } from './+types/post';

export async function clientLoader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return await res.json();
}

export async function clientAction({ params }: Route.ClientLoaderArgs) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: 'DELETE',
    });
    return {
      isDeleted: true,
    };
  } catch (err) {
    console.log(err);
    return {
      isDeleted: false,
    };
  }
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const isDeleted = fetcher.data?.isDeleted;

  return (
    <div>
      {!isDeleted && (
        <>
          <h1>Title: {loaderData.title}</h1>
          <p>Body: {loaderData.body}</p>
        </>
      )}

      <fetcher.Form method="delete">
        <div>
          <button onClick={() => navigate('/')}>Redirect</button>
          <button type="submit">Delete</button>
        </div>
      </fetcher.Form>
    </div>
  );
}
