import { useState } from "react"

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" })
  const [submitted, setSubmitted] = useState(null)

  return (
    <div className="card">
      <h2>Feedback Form</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        placeholder="Feedback"
        value={form.feedback}
        onChange={(e) => setForm({ ...form, feedback: e.target.value })}
      />

      <button onClick={() => setSubmitted(form)}>Submit</button>

      {submitted && (
        <div>
          <p><b>Name:</b> {submitted.name}</p>
          <p><b>Email:</b> {submitted.email}</p>
          <p><b>Feedback:</b> {submitted.feedback}</p>
        </div>
      )}
    </div>
  )
}
