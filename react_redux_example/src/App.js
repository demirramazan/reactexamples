import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [form, setForm] = useState({ isim: '', sehir: '', bio: '' });

  console.log("FORM", form);
  const handleChange = event =>
    setForm[{ ...form, [event.target.name]: event.target.value }];

  return (
    <div className="App">

      <h1>React Forms</h1>

      <form>
        <input
          value={form.isim}
          onChange={handleChange}
          placeholder="Adınız"
          name="isim"
        />
        <select
          value={form.sehir}
          onChange={handleChange}
          name="sehir"
        >
          <option value="" disabled>
            Şehir Seçiniz
        </option>
          <option value="ankara">Ankara</option>
          <option value="istanbul">İstanbul</option>
          <option value="bursa">Bursa</option>
          <option value="malatya">Malatya</option>
        </select>
        <textarea
          value={form.bio}
          onChange={handleChange}
          rows="10"
          placeholder="Biyografiniz"
          name="bio"
        />
        <button>Gönder</button>
      </form>
    </div>
  );
}