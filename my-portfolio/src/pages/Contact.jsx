import React, { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        if (!form[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: `${e.target.name} is required` });
        } else if (e.target.name === 'email' && !/\S+@\S+\.\S+/.test(form.email)) {
            setErrors({ ...errors, email: 'Email is invalid' });
        } else {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    return (
        <section id="contact">
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.name && <span>{errors.name}</span>}
                
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && <span>{errors.email}</span>}
                
                <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.message && <span>{errors.message}</span>}

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;