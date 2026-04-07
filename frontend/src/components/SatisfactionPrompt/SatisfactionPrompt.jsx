import React, { useState } from 'react';

export default function SatisfactionPrompt() {
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRating = async (value) => {
    if (loading) return; // Prevent multiple clicks
    setRating(value);
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/rating', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value }),
      });

      if (!res.ok) throw new Error('Failed to submit rating');
      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert('Failed to send rating. Please try again.');
      setRating(null); // Reset on failure
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <p>How satisfied are you with your experience?</p>

      <div
        style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: '0.5rem 0' }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => handleRating(num)}
disabled={loading}
            aria-pressed={rating === num}
            style={{
              padding: '0.5rem 0.8rem',
              fontSize: '1rem',
              borderRadius: '4px',
              background: rating === num ? '#4caf50' : '#e0e0e0',
              color: rating === num ? '#fff' : '#000',
              border: 'none',
              cursor: loading || success ? 'not-allowed' : 'pointer',
            }}
          >
            {num} ⭐
          </button>
        ))}
      </div>

      {loading && <p>Submitting your rating...</p>}
      {success && <p style={{ color: 'green' }}>Thanks for your feedback!</p>}
    </div>
  );
}