import styles from './index.module.sass'
import { useEffect, useState, useRef } from 'react'
const Home = () => {
    const [form, setForm] = useState({ name: '', email: '', age: '' })
    const [errors, setErrors] = useState({ name: '', email: '', age: '' })

    const handleSubmit = () => {
        setErrors({
            name: form.name === '' ? '名前を入力してください' : '',
            email: form.email === '' ? 'メールアドレスを入力してください' : '',
            age: form.age === '' ? '年齢を入力してください' : '',
        })
        if (form.name !== '' && form.email !== '' && form.age !== '') {
            console.log(
                `名前：${form.name}、メアド：${form.email}、年齢：${form.age}`,
            )
        }
    }
    return (
        <div>
            <div>
                <p>{errors.name}</p>
                <label htmlFor="name">name</label>
                <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
            </div>
            <div>
                <p>{errors.email}</p>
                <label htmlFor="email">email</label>
                <input
                    type="text"
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />
            </div>
            <div>
                <p>{errors.age}</p>
                <label htmlFor="age">age</label>
                <input
                    type="text"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                />
            </div>
            <button onClick={() => handleSubmit()}>submit</button>
        </div>
    )
}
export default Home
