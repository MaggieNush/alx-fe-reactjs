function Home() {
    return (
        <div style={{ padding:'20px', textAlign:'center', backgroundColor:'#FFF8DC' }}>
            <h1 style={{ color:'#8B4513', fontSize:'3em' }}>Welcome to Sweet Scents Candles!</h1>
            <p style={{ color:'#A0522D', fontSize:'1.5rem' }}>Ignite your sense with handcrafted 
                dessert-inspired candles
            </p>
            <img 
                src="https://images.unsplash.com/photo-1687175124783-144d9730d530?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlc3NlcnQlMjBjYW5kbGVzfGVufDB8fDB8fHww" 
                alt="strawberry dessert candle"
                style={{ maxWidth:'100%', height:'auto', borderRadius:'8px', marginTop:'20px' }}
            />
            <p style={{ color:'#A0522D', marginTop:'20px' }}>
                Each candle is a little piece of dessert heaven, drafted to bring warmth and delightful aromas to your home.
            </p>
        </div>
    );
}

export default Home;