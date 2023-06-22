import styles from './Form.module.css';

export const Form = ({
  active,
  setActive,
  isActive,
  setIsActive,
  userAuthData,
  handleChange,
  onSubmit,
  error,
  titleButton,
  titleSpan,
}) => {
  return (
    <form
      className={active ? [styles.form, styles.active].join(' ') : styles.form}
      onClick={() => setActive(false)}
    >
      <h2 className={styles.title}>Sign in or create an account</h2>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <label htmlFor="email-id">Email:</label>
        <input
          type="email"
          id="email-id"
          name="email"
          placeholder="Email"
          value={userAuthData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={userAuthData.password}
          onChange={handleChange}
        />
        {error && <span className={styles.error}>{error}</span>}
        <button className={styles.button} onClick={onSubmit}>
          {titleButton}
        </button>
        {isActive ? (
          <span
            style={{ maxWidth: '145px', cursor: 'pointer' }}
            onClick={() => setIsActive(false)}
          >
            {titleSpan}
          </span>
        ) : (
          <span
            style={{ maxWidth: '220px', cursor: 'pointer' }}
            onClick={() => setIsActive(true)}
          >
            {titleSpan}
          </span>
        )}
      </div>
    </form>
  );
};
