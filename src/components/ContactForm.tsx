/* =======================================
 * お問い合せフォーム
 * URL: /components
 * Referenced in: /page.tsx,
 * Created: 2025-03-17
 * Last updated: 2025-03-17
 * ======================================= */
import { useState } from 'react';
import styles from '@components/ContactForm.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // 成功 or 失敗メッセージ

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus('全ての項目を入力してください');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch(
        'https://katou-tax.tuna-pic.co.jp/backend/contact.php',
        {
          method: 'POST',
          body: formData,
        }
      );

      const result = await response.json();
      console.log('サーバーレスポンス:', result);

      if (result.success) {
        setStatus('送信成功しました！');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('送信に失敗しました。');
      }
    } catch (error) {
      console.error('エラー:', error);
      setStatus('エラーが発生しました。');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.blockForm}>
      <dl>
        <div>
          <dt>お名前</dt>
          <dd>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </dd>
        </div>
        <div>
          <dt>メールアドレス</dt>
          <dd>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </dd>
        </div>
        <div>
          <dt>問い合わせ内容</dt>
          <dd>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </dd>
        </div>
      </dl>
      <div className={styles.box_btn}>
        <button type="submit">送信</button>
      </div>
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;
