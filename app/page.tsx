export default function Page() {
  return (
    <main style={{ padding: '55px 20px', width: '100%', fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff' }}>
      {/* Точна ширина для ідентичного переносу слів як на зразку */}
      <div style={{ maxWidth: '1010px', margin: '0 auto' }}>
        
        {/* Заголовок */}
        <h1 style={{ fontSize: '36px', marginBottom: '45px', fontWeight: 'bold', color: '#000000', textAlign: 'center', letterSpacing: '-0.3px' }}>
          Welcome to NoteHub
        </h1>

        {/* Перший абзац */}
        <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#444444', marginBottom: '22px', textAlign: 'left' }}>
          NoteHub is a simple and efficient application designed for managing personal notes. It helps keep your thoughts organized and accessible in one place, whether you are at home or on the go.
        </p>

        {/* Другий абзац */}
        <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#444444', marginBottom: '22px', textAlign: 'left' }}>
          The app provides a clean interface for writing, editing, and browsing notes. With support for keyword search and structured organization, NoteHub offers a streamlined experience for anyone who values clarity and productivity.
        </p>
        
      </div>
    </main>
  );
}





