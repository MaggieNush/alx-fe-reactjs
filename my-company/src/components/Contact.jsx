import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message, ${formData.name}! We'll get back to you soon")

        setFormData({name: '', email: '', message: ''});
    };

    const inputStyle = {
        display:'block',
        width:'100%',
        padding:'10px',
        margin:'10px, 0',
        borderRadius:'4px',
        cursor:'pointer',
        fontSize:'1em',
        marginTop:'10px' 
    };

    const buttonStyle = {
        padding:'10px 20px',
        backgroundColor:'#8B4513',
        color:'white',
        border:'none',
        borderRadius:'5px',
        cursor:'pointer',
        fontSize:'1em',
        marginTop:'10px'
    }
    
    return (
        <div style={{ padding: '20px', backgroundColor: '#FDF5E6', minHeight: 'calc(100vh - 120px)' }}>
            <h1 style={{ color: '#8B4513' }}>Get in Touch with Sweet Scents!</h1>
            <p style={{ color: '#A0522D' }}>Have a question or custom order inquiry? Send us a message!</p>
            <form onSubmit={handleSubmit} style={{ maxWidth:'500px', margin:'20px, auto', padding:'20px', border:'1px solid #D2B48C', borderRadius:'8px', backgroundColor:'#FFFAF0'}}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <textarea 
                    name="message" 
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Send Message</button>
            </form>     
        </div>
    );
}

export default Contact;