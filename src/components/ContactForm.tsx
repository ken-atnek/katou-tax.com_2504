/* =======================================
 * お問い合せフォーム
 * URL: /components
 * Referenced in: /page.tsx,
 * Created: 2025-03-17
 * Last updated: 2025-03-18
 * ======================================= */
import { useState } from 'react';
import Modal from '@components/Modal';
import styles from '@/styles/components/ContactForm.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false); // 確認画面フラグ
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダル制御

  // **確認ボタンの処理**
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus('全ての項目を入力してください');
      return;
    }

    setIsConfirming(true); // 確認画面へ
    setStatus('');
  };

  // **修正ボタンの処理（入力画面に戻る）**
  const handleEdit = () => {
    setIsConfirming(false);
  };

  // **送信処理**
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('/backend/contact.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      // console.log('サーバーレスポンス:', result);

      if (result.success) {
        setStatus('');
        setIsModalOpen(true); // モーダルを開く
        setTimeout(() => setIsModalOpen(false), 3000); // 3秒後に自動閉じる

        setName('');
        setEmail('');
        setMessage('');
        setIsConfirming(false); // 入力画面に戻す
      } else {
        setStatus(result.error || '送信に失敗しました。');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('エラー:', error);
      setStatus('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <article>
      <form
        className={styles.blockForm}
        onSubmit={isConfirming ? handleSubmit : handleConfirm}
      >
        {isConfirming ? (
          // ✅ 確認画面
          <div className={styles.statusConfirm}>
            <p>入力内容を確認してください。</p>
            <dl>
              <div>
                <dt>お名前</dt>
                <dd>{name}</dd>
              </div>
              <div>
                <dt>メールアドレス</dt>
                <dd>{email}</dd>
              </div>
              <div>
                <dt>問い合わせ内容</dt>
                <dd>{message}</dd>
              </div>
            </dl>
            <div className={styles.box_btn}>
              <button type="button" onClick={handleEdit}>
                修正する
              </button>
              <button type="submit" disabled={loading}>
                {loading ? '送信中…' : '送信'}
              </button>
            </div>
          </div>
        ) : (
          // ✅ 入力画面
          <div>
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
              <button type="submit">確認</button>
            </div>
          </div>
        )}
        <p>{status}</p>
      </form>

      {/* ✅ モーダル表示 */}
      {isModalOpen && (
        <Modal
          message="お問い合わせが送信されました。"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </article>
  );
};

export default ContactForm;
