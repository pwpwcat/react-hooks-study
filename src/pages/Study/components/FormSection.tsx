import { useState } from 'react'
import styles from '../index.module.sass'

const FormSection = () => {
    const [forms, setForms] = useState({ name: '', email: '' })
    const [errors, setErrors] = useState({ name: '', email: '' })
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = () => {
        setErrors({
            name: forms.name === '' ? '名前を入力してください' : '',
            email: forms.email === '' ? 'メールアドレスを入力してください' : '',
        })
        if (forms.name !== '' && forms.email !== '') {
            setIsSuccess(true)
            setForms({ name: '', email: '' })
            setTimeout(() => {
                setIsSuccess(false)
            }, 3000)
        }
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.section__title}>Form</h2>
            <div className={styles.form}>
                <div className={styles.form__field}>
                    <label>名前</label>
                    <input
                        type="text"
                        value={forms.name}
                        maxLength={10}
                        onChange={(e) => {
                            setForms({ ...forms, name: e.target.value })
                            if (forms.name.length > 10) {
                                setErrors({
                                    ...errors,
                                    name: 'これ以上打てません',
                                })
                            } else {
                                setErrors({
                                    ...errors,
                                    name: '',
                                })
                            }
                        }}
                    />
                    <p>{forms.name.length}</p>
                    {errors.name && (
                        <p className={styles.form__error}>{errors.name}</p>
                    )}
                </div>
                <div className={styles.form__field}>
                    <label>メールアドレス</label>
                    <input
                        type="text"
                        value={forms.email}
                        onChange={(e) =>
                            setForms({ ...forms, email: e.target.value })
                        }
                    />
                    <p>{forms.email.length}</p>
                    {errors.email && (
                        <p className={styles.form__error}>{errors.email}</p>
                    )}
                </div>
                <button onClick={handleSubmit}>送信</button>
                {isSuccess && (
                    <p className={styles.form__success}>送信しました！</p>
                )}
                <button
                    onClick={() => {
                        setForms({ name: '', email: '' })
                        setErrors({ name: '', email: '' })
                    }}
                >
                    リセット
                </button>
            </div>
        </section>
    )
}

export default FormSection
