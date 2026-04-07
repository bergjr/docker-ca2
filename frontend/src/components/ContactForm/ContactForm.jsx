import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import { sendMessage } from '../../services/messageservice';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', telephone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  // Basic validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (!formData.telephone.trim()) newErrors.telephone = 'Telephone is required';
    else if (!/^\+?\d{7,15}$/.test(formData.telephone))
      newErrors.telephone = 'Invalid telephone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const result = await sendMessage(formData);
      if (result?.success === false) throw new Error('Failed to submit');

      setSuccess(true);
      setFormData({ name: '', email: '', telephone: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        {success && <p className={styles.successMessage}>Message sent successfully!</p>}

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              id="name"
              name="name"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="telephone" className={styles.label}>
            Telephone
          </label>
          <input
            id="telephone"
            name="telephone"
            className={styles.input}
            value={formData.telephone}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.telephone && <span className={styles.error}>{errors.telephone}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}