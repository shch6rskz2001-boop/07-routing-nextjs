import Link from 'next/link'; 

export default function HomePage() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
          Welcome to NoteHub
        </h1>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
          NoteHub is a simple and efficient application designed for
          managing personal notes. It helps keep your thoughts organized
          and accessible in one place, whether you are at home or on the go.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555', marginBottom: '30px' }}>
          The app provides a clean interface for writing, editing, and
          browsing notes. With support for keyword search and structured
          organization, NoteHub offers a streamlined experience for anyone
          who values clarity and productivity.
        </p>

        {}
        <Link 
          href="/notes" 
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Open My Notes →
        </Link>
      </div>
    </main>
  );
}