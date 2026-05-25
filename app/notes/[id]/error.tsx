'use client';


export default function NoteDetailsError({ error }: { error: Error }) {
  return (
    <p>Could not fetch the note details. {error.message}</p>
  );
}
