import styles from './index.module.sass'
import { useEffect, useState, useRef } from 'react'
const Home = () => {
    const [forms, setForms] = useState({ name: '', email: '' })
    const [errors, setErrors] = useState({ name: '', email: '' })
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = () => {
        setErrors({
            name: forms.name === '' ? 'エラーです' : '',
            email: forms.email === '' ? 'エラーです' : '',
        })
        if (forms.name !== '' && forms.email !== '') {
            setIsSuccess(true)
            setForms({
                name: '',
                email: '',
            })
            setTimeout(() => {
                setIsSuccess(false)
            }, 3000)
        }
    }
    return (
        <div>
            <div>
                <p>{errors.name}</p>
                <label htmlFor="">名前</label>
                <input
                    type="text"
                    value={forms.name}
                    onChange={(e) =>
                        setForms({ ...forms, name: e.target.value })
                    }
                />
            </div>
            <div>
                <p>{errors.email}</p>
                <label htmlFor="">メールアドレス</label>
                <input
                    type="text"
                    value={forms.email}
                    onChange={(e) =>
                        setForms({ ...forms, email: e.target.value })
                    }
                />
            </div>
            <button onClick={() => handleSubmit()}>submit</button>
            <div
                className={`${styles.success} ${isSuccess ? styles.show : ''}`}
            >
                送信しました！
            </div>
        </div>
    )
}
export default Home
